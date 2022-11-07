import { useState } from "react";

import { FlatList } from "react-native";

import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";

import { Conteiner, Form, HeaderList, NumberOfPlayers } from "./style";
import { Filter } from "@components/filter";
import { PlayerCard } from "@components/playerCard";
import { ListEmpty } from "@components/listEmpty";

export function Players () {
    const [ players, setPlayers ] = useState([{name: "cleidson", team: "ignite"}]);
    return (
        <Conteiner>
            <Header showBackButton/>
            <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times"/>
            <Form>
                <Input />
                <ButtonIcon icon="add"></ButtonIcon>
            </Form>
            <HeaderList>
                <FlatList
                    horizontal
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === "Time A"}
                        />
                    )}
                />

                <NumberOfPlayers>
                    {0}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard 
                        name={item.name} 
                        onRemove={() => console.log(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Não há pessoas nesse time" />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />

            <Button name="Remover Turma" type="secondary"/>
        </Conteiner>
    );
}
