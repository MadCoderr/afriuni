import { gql } from '@apollo/client';
import MenuFragment from "./fragments/menu";

export const GET_MENU = gql`
    
    ${MenuFragment}
`;