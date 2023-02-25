import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class BoardService {
  private articles = [];
  private articlesPassword = new Map<number, number>();

  getArticles() {
    return this.articles;
  }

  getArticleById(id: number) {
    return this.articles.find((article) => article.id === id);
  }

  createArticle({ title, content, password }: CreateArticleDto): number {
    const articleId: number = this.articles.length + 1;
    this.articles.push({ id: articleId, title, content, password });
    this.articlesPassword.set(articleId, password);
    return articleId;
  }

  updateArticle({ id, title, content, password }): number {
    const article = this.getArticleById(id);
    if (!!article === false) {
      throw new NotFoundException('게시물이 없습니다.');
    }

    if (this.articlesPassword.get(id) !== password) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    article.title = title;
    article.content = content;

    return article.id;
  }

  deleteArticle({ id, password }): number {
    const article = this.getArticleById(id);
    if (!!article === false) {
      throw new NotFoundException('게시물이 없습니다.');
    }

    if (this.articlesPassword.get(id) !== password) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    this.articles = this.articles.filter((article) => article.id !== id);
    this.articlesPassword.delete(id);

    return article.id;
  }
}
