import { Header } from "@components/header";
import { Text } from "react-native";
import { Conteiner } from "./style";

function Home() {
    return (
        <Conteiner>
            <Header />
            <Text>home</Text>
        </Conteiner>
    );
}

export default Home;