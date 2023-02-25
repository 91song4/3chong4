import { CreateArticleDto } from './create-article.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateArticleBodyDto extends PartialType(CreateArticleDto) {}

export type UpdateArticleDto = Pick<
  UpdateArticleBodyDto,
  'title' | 'content' | 'password'
> & { id: number };
