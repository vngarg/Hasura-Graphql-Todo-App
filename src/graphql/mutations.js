import { gql } from 'apollo-boost';

export const TOGGLE_TODOS = gql`
mutation toggleTodo($id: uuid!, $DoneStatus: String!) {
    update_Todo(where: {id: {_eq: $id}}, _set: {DoneStatus: $DoneStatus}) {
      returning {
        Description
        DoneStatus
        Title
        date
        id
        EndTime
        StartTime
      }
    }
  }
`

export const ADD_TODOS = gql`
mutation insert_Todo($Description: String!, $Title: String!, $StartTime: timestamptz!, $EndTime:timestamptz!) {
  insert_Todo(objects: {Description: $Description, Title: $Title, EndTime: $EndTime, StartTime: $StartTime}) {
    returning {
      Description
      Title
      DoneStatus
      date
      EndTime
      StartTime
    }
  }
}

`