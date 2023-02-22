import { IArticle } from '../model/article.model';
import { IsInt } from 'class-validator';
export interface ICreateArticleDto extends Pick<IArticle, 'title' | 'content'> {
  // @IsInt()
  password: number;
}

export type TCreateArticleDto = Pick<IArticle, 'title' | 'content'> & {
  // @IsInt()
  password: number;
};

export class CreateArticleDto {
  title: string;
  content: string;
  @IsInt()
  password: number;
}
