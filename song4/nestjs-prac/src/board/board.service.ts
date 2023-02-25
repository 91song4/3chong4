import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async getArticles() {
    return await this.articleRepository.find({
      select: ['id', 'author', 'title', 'createdAt'],
      where: { deletedAt: null },
    });
  }

  async getArticleById(id: number) {
    return await this.articleRepository.findOne({
      select: ['author', 'title', 'content', 'createdAt', 'updatedAt'],
      where: { id, deletedAt: null },
    });
  }

  createArticle({ title, content, password }: CreateArticleDto): void {
    this.articleRepository.insert({
      author: 'test',
      title,
      content,
      password: password.toString(),
    });
  }

  async updateArticle({ id, title, content, password }) {
    await this.verifyPassword(id, password);

    this.articleRepository.update(id, { title, content });
  }

  async deleteArticle({ id, password }) {
    await this.verifyPassword(id, password);

    this.articleRepository.softDelete(id);
  }

  private async verifyPassword(id: number, password: number) {
    const article = await this.articleRepository.findOne({
      select: ['password'],
      where: { id, deletedAt: null },
    });

    if (!!article === false) {
      throw new NotFoundException('게시물이 없습니다.');
    }

    if (article.password !== password.toString()) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }
  }
}
