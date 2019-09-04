import { Field, Int, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  done: boolean;
}
