import { Conteiner, Title, Icon } from "./style";

interface Props {
    name: string,
}

export function GroupCard ({name}: Props) {
    return (
        <Conteiner>
            <Icon/>
            <Title>{name}</Title>
        </Conteiner>
    );
}