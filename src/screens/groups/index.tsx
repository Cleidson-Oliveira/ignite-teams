import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button } from "@components/button";
import { GroupCard } from "@components/groupCard";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { ListEmpty } from "@components/listEmpty";
import { Loading } from "@components/loading";

import { groupsGetAll } from "@storage/group/getAll";
import { Conteiner } from "./style";

export function Groups () {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ groups, setGroups ] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNewGroup () {
        navigation.navigate("new");
    }

    async function fetchGroups() {
        try {
            setIsLoading(true);
            const data = await groupsGetAll();
            setGroups(data)
        } catch (error) {
            Alert.alert("Turmas", "Não foi possível carregar as turmas");
            console.log(error);
        } finally {
            setIsLoading(false);
        } 
      }

    function handleOpenGroup (group: string) {
        navigation.navigate("players", { group });
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
    },[]))

    return (
        <Conteiner>
            <Header />
            <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

            {
                isLoading
                ? <Loading />
                : <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    contentContainerStyle={groups.length === 0 && { flex: 1 }}
                    renderItem={({item}) => <GroupCard name={item} onPress={() => handleOpenGroup(item)}/>}
                    ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
                />
            }

            <Button name="Criar uma nova turma" onPress={handleNewGroup}/>

        </Conteiner>
    );
}