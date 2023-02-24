import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { DeleteAritcleDto } from './dto/delete-article.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  // api / 빠짐
  @Get('articles')
  getArticles(): IArticle[] {
    return this.boardService.getArticles();
  }

  // /board/articles//1
  @Get('/articles/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getArticleById(@Param('id') articleId: number): IArticle {
    return this.boardService.getArticleById(articleId);
  }

  @Post('articles')
  @UsePipes(ValidationPipe)
  createArticle(@Body() data: CreateArticleDto): number {
    return this.boardService.createArticle(data);
  }

  // handler-level pipe 처리 해야함.
  @Put('articles/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateArticle(
    @Param('id') articleId: number,
    @Body() data: UpdateArticleDto,
  ): IArticle {
    return this.boardService.updateArticle(
      articleId,
      data.title,
      data.content,
      data.password,
    );
  }

  // handler-level pipe 처리 해야함.
  @Delete('articles/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  deleteAritcle(
    @Param('id') articleId: number,
    @Body() { password }: DeleteAritcleDto,
  ): number {
    console.log({ articleId }, typeof articleId);
    return this.boardService.deleteArticle(articleId, password);
  }
}
