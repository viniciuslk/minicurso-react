import { Field, InputType, ArgsType } from 'type-graphql';

@ArgsType()
@InputType('TodoCreateInput')
export default class TodoCreateInput {
  @Field()
  title: string;

  @Field()
  done: boolean;
}
