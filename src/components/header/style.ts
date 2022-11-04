import styled from 'styled-components/native';
import { CaretLeft } from "phosphor-react-native";

interface Props {
    withBackButton: boolean
}

export const Conteiner = styled.View<Props>`
    justify-content: ${({withBackButton}) => withBackButton ? "space-between" : "center"};

    align-items: center;
    flex-direction: row;

    width: 100%;
    padding: 32px;

`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme})=> ({
    size: 36,
    color: theme.COLORS.GRAY_100
}))``;