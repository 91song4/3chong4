import {
  ValidationPipe,
  Controller,
  UsePipes,
  ParseIntPipe,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { BoardService } from './board.service';
import {
  CreateArticleDto,
  ICreateArticleDto,
  TCreateArticleDto,
} from './dto/create-article.dto';
import { IArticle } from './model/article.model';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/articles')
  getArticles(): IArticle[] {
    return this.boardService.getArticles();
  }

  @Post('/articles')
  createArticle(@Body() data: TCreateArticleDto): number {
    console.log('create1');
    console.log(data);
    return this.boardService.createArticle({
      title: data.title,
      content: data.content,
      password: data.password,
    });
  }

  @Post('/articles2')
  createArticle2(@Body() data: ICreateArticleDto): number {
    console.log('create2');
    console.log(data);
    return this.boardService.createArticle({
      title: data.title,
      content: data.content,
      password: data.password,
    });
  }

  @Post('/articles3')
  createArticle3(@Body() data: CreateArticleDto): number {
    console.log('create3');
    console.log(data);
    return this.boardService.createArticle({
      title: data.title,
      content: data.content,
      password: data.password,
    });
  }
}
