import { gql } from '@apollo/client';

export const GET_CATEGORIE = gql `
    query {
        categories : specialisations(where: {parent: 0}) {
            nodes {
              id
              specialisationId
              name
              slug
              logo
              count
              children {
                nodes {
                  id
                  specialisationId
                  name
                  slug
                  count
                }
              }      
            }
        }
    }
`
