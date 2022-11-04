import { Conteiner, Logo } from "./style";

import  logoImage from "../../assets/logo.png";

interface Props {
    showBackButton?: boolean
}

export function Header ({showBackButton = false}: Props) {
    return (
        <Conteiner withBackButton={showBackButton}>
            <Logo source={logoImage}/>
        </Conteiner>
    );
}