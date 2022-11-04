import { Conteiner, Title, SubTitle } from "./style";

interface Props {
    title: string, 
    subtitle: string
}

export function Highlight ({title, subtitle}: Props) {
    return (
        <Conteiner>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Conteiner>
    );
}