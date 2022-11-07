import { BackButton, BackIcon, Conteiner, Logo } from "./style";

import  logoImage from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface Props {
    showBackButton?: boolean
}

export function Header ({showBackButton = false}: Props) {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("groups")
    }

    return (
        <Conteiner withBackButton={showBackButton}>
            {showBackButton && <BackButton onPress={handleBack}><BackIcon /></BackButton>}
            <Logo source={logoImage}/>
        </Conteiner>
    );
}