import { TextInputProps } from "react-native";
import { Conteiner } from "./style";
import { useTheme } from "styled-components/native";

interface Props extends TextInputProps {}

export function Input({...props}: Props) {
    const {COLORS} = useTheme();

    return (
        <Conteiner  
            placeholderTextColor={COLORS.GRAY_300}
            {...props}
        />
    );
}