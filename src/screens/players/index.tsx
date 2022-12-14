import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { PlayerCard } from "@components/playerCard";
import { ListEmpty } from "@components/listEmpty";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { Conteiner, Form, HeaderList, NumberOfPlayers } from "./style";
import { playerAddByGroup } from "@storage/player/addByGroup";
import { AppError } from "@utils/AppError";
import { playersGetByGroupAndTeam } from "@storage/player/getByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/player/removeByGroup";
import { groupRemoveByName } from "@storage/group/removeByName";
import { Loading } from "@components/loading";

interface RouteParams {
    group: string
}

export function Players () {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ newPlayerName, setNewPlayerName ] = useState("");
    const [ team, setTeam ] = useState("Time A");
    const [ players, setPlayers ] = useState<PlayerStorageDTO[]>([]);

    const newPlayerNameInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();
    const route = useRoute();
  
    const { group } = route.params as RouteParams;

    async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0) {
            return Alert.alert("Nova pessoa", "Informe o nome da pessoa para adicionar.");
        }
    
        const newPlayer = {
            name: newPlayerName,
            team,
        }
    
        try {
            await playerAddByGroup(newPlayer, group);
        
            newPlayerNameInputRef.current?.blur();
        
            setNewPlayerName("");
            fetchPlayersByTeam();

        } catch (error) {
            if(error instanceof AppError){
                return Alert.alert("Nova pessoa", error.message);
            }

            console.log(error);
            Alert.alert("Nova pessoa", "N??o foi poss??vel adicionar.");
        }
    }

    async function fetchPlayersByTeam() {
        try {
            setIsLoading(true);
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert("Pessoas", "N??o foi poss??vel carregar as pessoas do time selecionado.");
        } finally {
            setIsLoading(false);
        }
    }

    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);

            fetchPlayersByTeam()

        } catch (error) {
            console.log(error);

            Alert.alert("Remover pessoa", "N??o foi poss??vel remover essa pessoa.");
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate("groups");

        } catch (error) {
            console.log(error);
            Alert.alert("Remover Grupo", "N??o foi pos??vel remover o grupo");
        }
    }

    async function handleGroupRemove() {
        Alert.alert(
            "Remover",
            "Deseja remover a turma?",
            [
                { text: "N??o", style: "cancel" },
                { text: "Sim", onPress: () => groupRemove() }
            ]
        )
    }

    useEffect(() => {
        fetchPlayersByTeam();
    },[team])

    return (
        <Conteiner>
            <Header showBackButton/>
            <Highlight title={group} subtitle="Adicione a galera e separe os times"/>
            <Form>
                <Input onChangeText={setNewPlayerName} value={newPlayerName}/>
                <ButtonIcon icon="add" onPress={handleAddPlayer}/>
            </Form>
            <HeaderList>
                <FlatList
                    horizontal
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            {
                isLoading 
                ? <Loading /> 
                : <FlatList 
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <PlayerCard 
                            name={item.name} 
                            onRemove={() => handlePlayerRemove(item.name)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <ListEmpty message="N??o h?? pessoas nesse time" />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
                />
            }

            <Button name="Remover Turma" type="secondary" onPress={handleGroupRemove}/>
        </Conteiner>
    );
}
