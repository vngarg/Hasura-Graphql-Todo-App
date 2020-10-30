import { gql } from "apollo-boost";

export const GET_TODOS = gql`
query MyQuery {
  Todo (where: {DoneStatus: {_eq: "false"}}) {
    Description
    EndTime
    StartTime
    Title
    id
    DoneStatus
  }
}
`
