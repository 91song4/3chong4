import { Injectable } from '@nestjs/common';
import { IArticle } from './model/article.model';
import { v4 as uuid } from 'uuid';
import _ from 'lodash';
import { ICreateArticleDto, TCreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class BoardService {
  private articles: IArticle[] = [];
  private articlesPassword: Map<string, number> = new Map();

  getArticles(): Array<IArticle> {
    return this.articles;
  }

  getArticleById(id: string): IArticle | null {
    const article = this.articles.find((article) => article.id === id);
    return _.isNil(article) ? null : article;
  }

  createArticle({ title, content, password }: ICreateArticleDto): number {
    console.log({ title, content, password });
    console.log({
      title: typeof title,
      content: typeof content,
      password: typeof password,
    });
    const articleId = uuid();
    const newArticle: IArticle = { id: articleId, title, content };
    this.articles.push(newArticle);
    this.articlesPassword.set(articleId, password);
    console.log();
    return 1;
  }
}
