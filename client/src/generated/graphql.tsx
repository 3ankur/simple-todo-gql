import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getTodos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  _id: Scalars['ID'];
  name: Scalars['String'];
  createDate: Scalars['DateTime'];
};


export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
};


export type MutationAddTodoArgs = {
  name: Scalars['String'];
};

export type AddTodoMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddTodoMutation = (
  { __typename?: 'Mutation' }
  & { addTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'name' | '_id' | 'createDate'>
  ) }
);

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = (
  { __typename?: 'Query' }
  & { getTodos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, '_id' | 'name' | 'createDate'>
  )> }
);


export const AddTodoDocument = gql`
    mutation AddTodo($name: String!) {
  addTodo(name: $name) {
    name
    _id
    createDate
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const GetTodosDocument = gql`
    query GetTodos {
  getTodos {
    _id
    name
    createDate
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;