import { gql } from '@apollo/client';

export const GET_CATEGORY_BY = gql`
    query GET_CATEGORY_BY ($id : ID!) {
        specialisation (id : $id , idType: SLUG) {
              id
              name
              logo
              slug
              databaseId
              university_count
              count
              children (first: 100) {
                  nodes {
                    id
                    databaseId
                    name
                    slug
                    courses (first: 100) {
                      nodes{
                        id
                        databaseId
                        title
                        slug
                        university {
                          nodes {
                            id
                            title
                            databaseId
                            logo              
                            slug
                            locations {
                              nodes {
                                name
                                is_country
                              }
                            }
                          }
                        }
                        studiesLevel {
                          nodes {
                            name
                          }
                        }
                      }
                    }
                  }
                }
        }          
    }
`;
