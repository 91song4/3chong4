import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardService } from './board/board.service';
import { BoardModule } from './board/board.module';

@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService, BoardService],
})
export class AppModule {}
