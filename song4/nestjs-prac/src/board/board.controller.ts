import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/articles')
  async getArticles() {
    return await this.boardService.getArticles();
  }

  @Get('/articles/:id')
  async getArticleById(@Param('id') articleId: number) {
    return await this.getArticleById(articleId);
  }

  @Post('/articles')
  createArticle(@Body() body: CreateArticleDto) {
    return this.boardService.createArticle({
      title: body.title,
      content: body.content,
      password: body.password,
    });
  }

  @Put('/articles/:id')
  async updateArticle(
    @Param('id') articleId: number,
    @Body() body: UpdateArticleDto,
  ) {
    return await this.boardService.updateArticle({
      id: articleId,
      title: body.title,
      content: body.content,
      password: body.password,
    });
  }

  @Delete('/articles/:id')
  async deleteArticle(
    @Param('id') articleId: number,
    @Body() body: DeleteArticleDto,
  ) {
    return await this.boardService.deleteArticle({
      id: articleId,
      password: body.password,
    });
  }
}
