import { Field, Int, InputType, ArgsType, ID } from 'type-graphql';

@ArgsType()
@InputType('TodoUpdateInput')
export default class TodoUpdateInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  done: boolean;
}
