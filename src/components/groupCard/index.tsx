import { TouchableOpacityProps } from "react-native";
import { Conteiner, Title, Icon } from "./style";

interface Props extends TouchableOpacityProps {
    name: string,
}

export function GroupCard ({ name, ...rest }: Props) {
    return (
        <Conteiner {...rest}>
            <Icon/>
            <Title>{name}</Title>
        </Conteiner>
    );
}