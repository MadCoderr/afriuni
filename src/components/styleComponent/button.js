import styled from "styled-components";
import tw from "tailwind.macro";

export const Button = styled.button`
    ${tw`normal-case font-normal py-3 px-5`} 
`;

export const ButtonPrimary = styled(Button)`
    ${tw`bg-custom-secondary text-white`}     
`;
