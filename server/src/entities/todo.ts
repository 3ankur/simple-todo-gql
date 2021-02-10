import { getModelForClass, prop as Property } from "@typegoose/typegoose";
 import {  ObjectID } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
 export class Todo {

    @Field(() => ID)
    readonly _id: ObjectID;

    @Field(()=>String)
    @Property({ required: true })
    name : String

    @Field()
    @Property({ default: new Date(), required: true })
    createDate: Date;
}

export const TodoModel = getModelForClass(Todo);