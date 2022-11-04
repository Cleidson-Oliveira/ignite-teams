import styled from 'styled-components/native';

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