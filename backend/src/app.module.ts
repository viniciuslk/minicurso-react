import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: './src/schema.graphql',
    }),
    PrismaModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
