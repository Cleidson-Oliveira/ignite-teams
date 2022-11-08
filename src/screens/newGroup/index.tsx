import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";

import { Conteiner, Content, Icon } from "./style";
import { groupCreate } from "@storage/group/create";
import { AppError } from "@utils/AppError";

export function NewGroup () {
    const [group, setGroup ] = useState("");
    const navigation = useNavigation();

    const handleCreateNewGroup = async () => {
        try {
            if(group.trim().length === 0) {
              return Alert.alert("Novo Grupo", "Informe o nome da turma.");
            }
      
            await groupCreate(group);
            navigation.navigate("players", { group });

        } catch (error) {
            if(error instanceof AppError) {
              return Alert.alert("Novo Grupo", error.message);
            } 

            Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
            console.log(error);
        }
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
                <Input 
                    placeholder="Nome da turma" 
                    style={{marginBottom: 20}}
                    value={group}
                    onChangeText={setGroup}
                />
                <Button name="Criar" onPress={handleCreateNewGroup}/>
            </Content>
        </Conteiner>
    );
}
