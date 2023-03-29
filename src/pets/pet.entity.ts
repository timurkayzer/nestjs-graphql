import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owners/entities/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    name: string;

    @Column({
        nullable: true
    })
    @Field({
        nullable: true
    })
    breed?: string;

    @ManyToOne(() => Owner, owner => owner.pets)
    @Field(() => Owner, { nullable: true })
    owner?: Owner;
}