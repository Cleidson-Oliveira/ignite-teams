import { BackButton, BackIcon, Conteiner, Logo } from "./style";

import  logoImage from "../../assets/logo.png";

interface Props {
    showBackButton?: boolean
}

export function Header ({showBackButton = false}: Props) {
    return (
        <Conteiner withBackButton={showBackButton}>
            {showBackButton && <BackButton><BackIcon /></BackButton>}
            <Logo source={logoImage}/>
        </Conteiner>
    );
}