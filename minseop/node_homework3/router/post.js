const express = require('express');
const { Post } = require('../models');

const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

// 게시글 리스트 조회
router.get('/posts', async (req, res) => {
  const data = await Post.findAll({
    attributes: [
      'postId',
      'userId',
      'title',
      'content',
      'createdAt',
      'updatedAt',
    ],
    order: [ [ 'createdAt', 'DESC' ] ],
  });
  res.status(200).json({ data });
});

// 게시글 작성
router.post('/posts', authMiddleware, async (req, res) => {
  const { userId } = req.decode.userId;
  const { title, content } = req.body;

  try {
    await Post.create({ title, content, userId });
    res.status(200).send('게시물 작성 완료');
  } catch ( err ) {
    res.send('작성실패');
    console.log(err);
  }
});

// 게시글 상세조회
router.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params;

  const data = await Post.findOne({
    attributes: [
      'postId',
      'userId',
      'title',
      'content',
      'createdAt',
      'updatedAt',
    ],
    where: { postId },
  });
  res.status(200).json({ data });
});

// 게시글 수정
// 한국 시간 적용해야댐
// 보는사람한테 +9시간 해주기
router.put('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;

  if ( !title || !content ) {
    return res.status(412).json({
      msg: '데이터 형식이 올바르지 않습니당',
    });
  }

  if ( title === '' ) {
    return res.status(412).json({
      msg: '제목을 입력해주세요',
    });
  }

  if ( content === '' ) {
    return res.status(412).json({
      msg: '내용을 입력해주세요',
    });
  }
  const data = await Post.update({ title, content },
    { where: { postId } });

  //update(
  // { item1, item2, item3},
  // {where:{ ... }}
  // )
  res.status(200).json({
    msg: '수정완료',
  });
});

// 게시글 삭제
router.delete('/posts/:postId', authMiddleware, async (req, res) => {

  try {
    const { postId } = req.params;
    const userId = req.decode.userId;
    console.log("@@@@@@@@@@@@@@@@@@", userId);
    console.log("###############", postId);

    const post = await Post.findOne({
      where: [ { postId }, { userId } ]
    });

    if ( !post ) {
      return res.status(400).json({
        msg: "게시글이 없어염"
      });
    }

    if ( post.userId !== userId ) {
      return res.status(400).json({
        msg: "게시글 삭제 권한이 없어염"
      });
    }

    await Post.destroy({
      where: { postId }
    });
    res.status(200).json({
      msg: "삭제 했어염"
    });
  } catch ( err ) {
    console.log(err);
    return res.status(400).json({
      mes: "게시글 삭제 실패했어염"
    });
  }
});
module.exports = router;
