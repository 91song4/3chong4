import { CreateArticleDto } from './dto/create-article.dto';
import { Injectable } from '@nestjs/common';
import _ from 'lodash';

@Injectable()
export class BoardService {
  private articles: IArticle[] = [];
  private articlePassword = new Map<number, number>();

  // 전체 조회
  getArticles(): IArticle[] {
    return this.articles;
  }

  // 한개 조회
  getArticleById(articleId: number): IArticle | null {
    try {
      const targetArticle = this.articles.find(
        (article) => article.id === articleId,
      );

      if (!!targetArticle === false) {
        return null;
      }

      return targetArticle;
    } catch (error) {
      throw error;
    }
  }
  // 생성
  createArticle({ title, content, password }: CreateArticleDto): number {
    try {
      const articleId: number = this.articles.length + 1;

      this.articles.push({ id: articleId, title, content });
      this.articlePassword.set(articleId, password);

      return articleId;
    } catch (error) {
      throw error;
    }
  }

  // 수정
  updateArticle(
    id: number,
    title: string,
    content: string,
    password: number,
  ): IArticle {
    if (this.articlePassword.get(id) !== password) {
      throw new Error('비밀번호가 틀립니다.');
    }
    const article = this.getArticleById(id);
    article.title = title;
    article.content = content;

    return article;
  }

  // 삭제
  deleteArticle(id: number, password: number): number {
    // 아이디가 있는지 없는지 체크
    if (this.getArticleById(id) === null) {
      throw new Error('아이디가 없습니다.');
    }

    // 비밀번호가 맞는지 안맞는지 체크
    if (this.articlePassword.get(id) !== password) {
      throw new Error('비밀번호가 틀립니다.');
    }
    // 삭제로직
    this.articles = this.articles.filter((article) => {
      article.id !== id;
    });

    return id;
  }
}
