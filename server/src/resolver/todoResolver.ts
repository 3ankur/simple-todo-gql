
import { Todo, TodoModel } from "../entities/todo";
import { Arg, Mutation, Query, Resolver } from "type-graphql";


@Resolver()
export class TodoResolver {

    @Query(() => [Todo])
    getTodos(): Promise<Todo[]> {
        return TodoModel.find();
    }


    @Mutation(() => Todo)
    async addTodo(
        @Arg('name', () => String) name: String
    ): Promise<Todo> {
        const newTodo = await TodoModel.create({ name });
        return await newTodo.save();
    }

}