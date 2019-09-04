import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [TodoService, TodoResolver],
  imports: [PrismaModule],
})
export class TodoModule {}
