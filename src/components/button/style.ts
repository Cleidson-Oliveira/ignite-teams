import styled, {css} from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type: "primary" | "secondary"
}

export const Conteiner = styled(TouchableOpacity)<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: ${({ theme, type }) => type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    border-radius: 6px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;
