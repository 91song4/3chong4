import { PickType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class DeleteAritcleDto extends PickType(CreateArticleDto, [
  'password',
]) {}
