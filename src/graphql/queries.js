import { gql } from "apollo-boost";

export const GET_TODOS = gql`
query MyQuery {
  Todo (where: {DoneStatus: {_eq: "false"}}) {
    id
    Description
    DoneStatus
    Title
    date
  }
}
`
