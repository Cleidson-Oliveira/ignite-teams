import { Button } from "@components/button";
import { GroupCard } from "@components/groupCard";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { useState } from "react";
import { FlatList, Text } from "react-native";
import { Conteiner } from "./style";

export function Groups () {
    const [ groups, setGroups ] = useState(["ignite", "ocb"]);

    return (
        <Conteiner>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item}) => <GroupCard name={item} key={item}/>}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                  <Text>Que tal cadastrar a primeira turma?</Text>
                )}
            />
            <Button name="Criar uma nova turma"/>

        </Conteiner>
    );
}