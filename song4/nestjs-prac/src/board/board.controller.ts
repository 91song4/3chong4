import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IArticle } from './article.model';
import { BoardService } from './board.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/articles')
  getArticles(): IArticle[] {
    return this.boardService.getArticles();
  }

  @Get('/articles/:id')
  getArticleById(@Param('id') articleId: string): IArticle {
    return this.boardService.getArticleById(articleId);
  }

  @Post('/articles')
  @UsePipes(ValidationPipe)
  createArticle(@Body() createArticleDto: CreateArticleDto): string {
    return this.boardService.createArticle({
      title: createArticleDto.title,
      content: createArticleDto.content,
      password: createArticleDto.password,
    });
  }

  @Patch('/articles/:id')
  @UsePipes(ValidationPipe)
  updateArticle(
    @Param('id') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): IArticle {
    return this.boardService.updateArticle({
      id: articleId,
      title: updateArticleDto.title,
      content: updateArticleDto.content,
      password: updateArticleDto.password,
    });
  }

  @Delete('/articles/:id')
  @UsePipes(ValidationPipe)
  deleteArticle(
    @Param('id') articleId: string,
    @Body() deleteArticleDto: DeleteArticleDto,
  ): void {
    return this.boardService.deleteArticle(
      articleId,
      deleteArticleDto.password,
    );
  }
}
