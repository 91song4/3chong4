const express = require('express');
const { json } = require('sequelize');

const { Comment } = require('../models');
const { User } = require('../models');

const { auth_middleware } = require('./index.js');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('댓글 조회 API');
  try {
    const comments = await Comment.findAll({
      raw: true,
      include: {
        model: User,
        attributes: [],
      },
      attributes: [
        'commentId',
        'userId',
        'User.nickname',
        'comment',
        'createdAt',
        'updatedAt',
      ],
      order: [['createdAt', 'desc']],
    });

    return res.status(200).json({ data: comments });
  } catch (err) {
    console.error(err, 'Error:');
    return res
      .status(400)
      .json({ errorMessage: '댓글 조회에 실패하였습니다.' });
  }
});

router.post('/', auth_middleware, async (req, res) => {
  console.log('댓글작성 API');
  const postId = parseInt(res.locals.postId);
  const user = res.locals.user;
  const { comment } = req.body;

  if (comment.trim() === '') {
    return res.status(412).json({ errorMessage: '댓글 내용을 입력해주세요.' });
  }

  try {
    await Comment.create({ comment, postId, userId: user.userId });
    return res.status(200).json({ message: '댓글을 작성하였습니다.' });
  } catch (err) {
    console.error(err, 'Error:');
    return res.status(400).json({ message: '댓글 작성에 실패하였습니다.' });
  }
});

router.put('/:commentId', async (req, res) => {
  console.log('댓글 수정 API');
  try {
    const commentId = Number(req.params.commentId);
    const { comment } = req.body;
    if (comment.trim() === '') {
      return res
        .status(412)
        .json({ errorMessage: '데이터 형식이 올바르지 않습니다.' });
    }
    try {
      const [updateCnt] = await Comment.update(
        { comment },
        { where: { commentId } },
      );
      if (updateCnt < 1) {
        return res
          .status(404)
          .json({ errorMessage: '댓글이 존재하지 않습니다.' });
      }

      return res.status(200).json({ message: '댓글을 수정하였습니다.' });
    } catch (err) {
      console.error(err, 'Error:');
      return res
        .status(400)
        .json({ errorMessage: '댓글 수정이 정상적으로 처리되지 않았습니다.' });
    }
  } catch (err) {
    console.error(err, 'Error:');
    return res
      .status(400)
      .json({ errorMessage: '댓글 수정에 실패하였습니다.' });
  }
});

router.delete('/:commentId', async (req, res) => {
  console.log('댓글 삭제 API');
  try {
    const commentId = Number(req.params.commentId);
    try {
      const destroyCnt = await Comment.destroy({ where: { commentId } });
      if (destroyCnt < 1) {
        return res
          .status(404)
          .json({ errorMessage: '댓글이 존재하지 않습니다.' });
      }
      return res.status(200).json({ message: '댓글을 삭제하였습니다.' });
    } catch (err) {
      console.error(err, 'Error');
      return res
        .status(400)
        .json({ errorMessage: '댓글 삭제가 정상적으로 처리되지 않았습니다.' });
    }
  } catch (err) {
    console.error(err, 'Error:');
    return res
      .status(400)
      .json({ errorMessage: '댓글 삭제에 실패하였습니다.' });
  }
});

module.exports = router;
