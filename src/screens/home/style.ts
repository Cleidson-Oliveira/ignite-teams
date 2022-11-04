import styled from "styled-components/native";

export const Conteiner = styled.View`
    flex: 1;
    align-items: center;
    padding: 0 5%;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const GroupsConteiner = styled.View`
    width: 100%;
    margin-top: 16px;
`;