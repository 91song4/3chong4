import _ from 'lodash';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { IArticle } from './article.model';

@Injectable()
export class BoardService {
  private articles: IArticle[] = [];
  private articlesPassword = new Map();

  getArticles(): IArticle[] {
    return this.articles;
  }

  getArticleById(id: string): IArticle {
    const article: IArticle = this.articles.find(
      (article) => article.id === id,
    );

    return article;
  }

  createArticle({ title, content, password }): string {
    const createArticle = { id: uuid(), title, content };
    this.articles.push(createArticle);
    this.articlesPassword.set(createArticle.id, password);

    return createArticle.id;
  }

  updateArticle({ id, title, content, password }): IArticle {
    const targetArticle = this.getArticleById(id);

    if (_.isNil(targetArticle)) {
      throw new NotFoundException(`Article not found. id ${id}`);
    }

    if (!this.isAuthenticate(targetArticle.id, password)) {
      throw new UnauthorizedException(
        `Password is not correct. id ${targetArticle.id}`,
      );
    }

    targetArticle.title = title;
    targetArticle.content = content;

    return targetArticle;
  }

  deleteArticle(id: string, password: string): void {
    const targetArticle = this.getArticleById(id);
    if (_.isNil(targetArticle)) {
      throw new NotFoundException(`Article not found. id ${id}`);
    }

    if (!this.isAuthenticate(targetArticle.id, password)) {
      throw new UnauthorizedException(
        `Password is not correct. id ${targetArticle.id}`,
      );
    }

    this.articles = this.articles.filter((article) => article.id !== id);
    this.articlesPassword.delete(id);
  }

  private isAuthenticate(id: string, password: string): boolean {
    if (this.articlesPassword.get(id) === password) {
      return true;
    }
    return false;
  }
}
