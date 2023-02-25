import { UpdateArticleDto } from './dto/update-article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { IArticle } from './model/article.model';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DeleteArticleDto } from './dto/delete-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  private articles: IArticle[] = [];
  private articlesPassword = new Map<number, number>();

  getArticles(): IArticle[] {
    return this.articles;
  }

  getArticleById(id: number): IArticle {
    const article = this.articles.find((article) => article.id === id);
    if (!article) {
      throw new NotFoundException('해당 게시물을 찾을 수 없습니다.');
    }
    return article;
  }

  createArticle({ title, content, password }: CreateArticleDto): number {
    const articleId = this.articles.length + 1;
    this.articles.push({ id: articleId, title, content });
    this.articlesPassword.set(articleId, password);
    return articleId;
  }

  updateArticle({ id, title, content, password }: UpdateArticleDto): number {
    const article = this.getArticleById(id);
    if (this.checkPassword(id, password) === false) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    article.title = title;
    article.content = content;

    return article.id;
  }

  deleteArticle({ id, password }: DeleteArticleDto): number {
    const article = this.getArticleById(id);
    if (this.checkPassword(id, password) === false) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }
    this.articles = this.articles.filter((article) => article.id !== id);
    this.articlesPassword.delete(id);

    return article.id;
  }

  private checkPassword(id: number, password: number): boolean {
    if (this.articlesPassword.get(id) !== password) {
      return false;
    }

    return true;
  }
}
