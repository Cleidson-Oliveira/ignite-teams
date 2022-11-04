import styled, {css} from 'styled-components/native';

export const Conteiner = styled.View`
    align-items: center;
    width: 100%;
    padding: 16px;
    margin: 16px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;