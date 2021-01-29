import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql `
    query {
        countries : locations(where: {parent: 0}) {
            nodes {
              id
              name
              slug
              locationId
              image      
            }
        }
    }
`
