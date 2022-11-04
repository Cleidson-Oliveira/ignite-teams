import { Conteiner, Title } from "./style";

interface Props {
    name: string,
    type?: "primary" | "secondary"
}

export function Button ({name, type = "primary"}: Props) {
    return (
        <Conteiner type={type}>
            <Title>{name}</Title>
        </Conteiner>
    );
}