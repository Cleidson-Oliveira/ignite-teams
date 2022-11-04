import styled from "styled-components/native";

export const Conteiner = styled.View`
flex: 1;
justify-content: center;
align-items: center;

`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.GREEN_700
}))``;