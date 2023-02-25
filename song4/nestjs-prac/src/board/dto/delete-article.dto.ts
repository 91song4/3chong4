import { CreateArticleDto } from './create-article.dto';
import { PickType } from '@nestjs/mapped-types';

export class DeleteArticleBodyDto extends PickType(CreateArticleDto, [
  'password',
] as const) {}

export type DeleteArticleDto = Pick<DeleteArticleBodyDto, 'password'> & {
  id: number;
};
