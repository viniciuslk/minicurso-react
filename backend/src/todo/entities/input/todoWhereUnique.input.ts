import { Field, InputType, ArgsType } from 'type-graphql';

@ArgsType()
@InputType('TodoWhereUniqueInput')
export default class TodoWhereUniqueInput {
  @Field({ nullable: true })
  id: string;
}
