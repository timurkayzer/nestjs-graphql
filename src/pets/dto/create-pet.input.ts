import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsAlpha()
  name: string;
  @Field({ nullable: true })
  breed?: string;
  @Field({ nullable: true })
  ownerId?: number;
}
