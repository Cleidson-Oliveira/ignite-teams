import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";

import { Conteiner, Content, Icon } from "./style";

export function NewGroup () {
    const [group, setGroup ] = useState("");
    const navigation = useNavigation();

    const handleCreateNewGroup = () => {
        navigation.navigate("players", { group });
    }

    return (
        <Conteiner>
            <Header showBackButton/>
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />
                <Input placeholder="Nome da turma" style={{marginBottom: 20}} onChangeText={setGroup}/>
                <Button name="Criar" onPress={handleCreateNewGroup}/>
            </Content>
        </Conteiner>
    );
}
