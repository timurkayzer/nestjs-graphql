import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePetInput {
    @Field()
    name: string;
    @Field({ nullable: true })
    breed?: string;
}