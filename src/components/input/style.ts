import styled, { css } from "styled-components/native";

export const Conteiner = styled.TextInput`
    flex: 1;
    height: 56px;
    padding: 0 16px;
    border-radius: 6px;

    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_700};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`;