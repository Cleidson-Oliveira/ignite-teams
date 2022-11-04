import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Text } from "react-native";
import { Conteiner } from "./style";

function Home() {
    return (
        <Conteiner>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />
            <Text>home</Text>
        </Conteiner>
    );
}

export default Home;