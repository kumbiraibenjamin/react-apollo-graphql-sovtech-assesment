import { gql } from "apollo-boost";

export const getRandomJoke = gql`
    query getRandomJoke($category: String) {
        getJoke(category: $category) {
            icon_url
            id
            url
            value
        }
    }
`

export const getCategories = gql`
    query getCategories {
      categories  
    }
`
