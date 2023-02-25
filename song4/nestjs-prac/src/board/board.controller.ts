import {
  DeleteArticleBodyDto,
  DeleteArticleDto,
} from './dto/delete-article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import {
  UpdateArticleBodyDto,
  UpdateArticleDto,
} from './dto/update-article.dto';
import { IArticle } from './model/article.model';
import { BoardService } from './board.service';
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

@Controller('board')
@UsePipes(new ValidationPipe({ transform: true }))
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/articles')
  getArticles(): IArticle[] {
    return this.boardService.getArticles();
  }

  @Get('/articles/:id')
  getArticleById(@Param('id') articleId: number): IArticle {
    console.log(__dirname);
    return this.boardService.getArticleById(articleId);
  }

  @Post('/articles')
  createArticle(@Body() body: CreateArticleDto): number {
    const createArticleData = {
      title: body.title,
      content: body.content,
      password: body.password,
    };
    return this.boardService.createArticle(createArticleData);
  }

  @Put('/articles/:id')
  updateArticle(
    @Param('id') articleId: number,
    @Body() body: UpdateArticleBodyDto,
  ): number {
    const updateArticleDto: UpdateArticleDto = {
      id: articleId,
      title: body.title,
      content: body.content,
      password: body.password,
    };
    return this.boardService.updateArticle(updateArticleDto);
  }

  @Delete('/articles/:id')
  deleteArticle(
    @Param('id') articleId: number,
    @Body() body: DeleteArticleBodyDto,
  ): number {
    const deleteArticleDto: DeleteArticleDto = {
      id: articleId,
      password: body.password,
    };
    return this.boardService.deleteArticle(deleteArticleDto);
  }
}
