import { TouchableOpacityProps } from "react-native";
import { Conteiner, Title } from "./style";

interface Props extends TouchableOpacityProps {
    name: string,
    type?: "primary" | "secondary"
}

export function Button ({name, type = "primary", ...rest}: Props) {
    return (
        <Conteiner type={type} {...rest}>
            <Title>{name}</Title>
        </Conteiner>
    );
}