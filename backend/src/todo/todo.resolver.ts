import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from './todo.entity';
import { PrismaService } from '../prisma/prisma.service';
import TodoCreateInput from './entities/input/createTodo.input';
import TodoWhereUniqueInput from './entities/input/todoWhereUnique.input';
import TodoUpdateInput from './entities/input/updateTodo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => Todo)
  async todo(@Args('where') where: TodoWhereUniqueInput) {
    return await this.prismaService.prisma.todo(where);
  }

  @Query(() => [Todo])
  async todoes() {
    return await this.prismaService.prisma.todoes();
  }

  @Mutation(() => Todo)
  async createTodo(@Args('data') data: TodoCreateInput) {
    return await this.prismaService.prisma.createTodo(data);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args('where') where: TodoWhereUniqueInput,
    @Args('data') data: TodoUpdateInput,
  ) {
    return await this.prismaService.prisma.updateTodo({
      data,
      where,
    });
  }

  @Mutation(() => Todo)
  async deleteTodo(@Args('where') where: TodoWhereUniqueInput) {
    return await this.prismaService.prisma.deleteTodo(where);
  }
}
