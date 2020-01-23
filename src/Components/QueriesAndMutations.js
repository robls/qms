import gql from 'graphql-tag'

export const READ_QUESTIONS = gql`
  query questions{
    questions{
      id
      body
      a
      b
      c
      d
      e
      correctAnswer
      createdAt
      editedAt
    }
  }
`;

export const REMOVE_QUESTION = gql`
  mutation removeQuestion($id: String! ) {
    removeQuestion(id: $id)
  }
`;

export const CREATE_QUESTION = gql`
    mutation createQuestion(
        $body: String!,
        $a: String!, 
        $b: String!, 
        $c: String!,
        $d: String!,
        $e: String!, 
        $correctAnswer: String!){
    createQuestion(
        body: $body,
        a: $a, 
        b: $b, 
        c: $c, 
        d: $d, 
        e: $e, 
        correctAnswer: $correctAnswer
    )}
`;

export const UPDATE_QUESTION = gql`
    mutation updateQuestion(
        $id: String!, 
        $body: String!, 
        $a: String!, 
        $b: String!, 
        $c: String!,
        $d: String!, 
        $e: String!,
        $correctAnswer: String!,
        $createdAt: String!
    ){
    updateQuestion(
        id: $id 
        body: $body,
        a: $a,
        b: $b, 
        c: $c, 
        d: $d, 
        e: $e, 
        correctAnswer: $correctAnswer, 
        createdAt: $createdAt)
    }
`;


export const FILTER_QUESTIONS = gql`
    query search($input: String!){
        search(input: $input) {
            id
            body
            a
            b
            c
            d
            e
            correctAnswer
            createdAt
            editedAt
        }
    }
`;

