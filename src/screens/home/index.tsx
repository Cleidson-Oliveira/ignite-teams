import { GroupCard } from "@components/groupCard";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { useState } from "react";
import { Conteiner, GroupsConteiner } from "./style";

function Home() {
    const [ groupsName, setGroupsName ] = useState(["ignite", "ocb"]);

    return (
        <Conteiner>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />
            <GroupsConteiner>
                {groupsName.map(group => (
                    <GroupCard name={group} key={group}/>
                ))}
            </GroupsConteiner>

        </Conteiner>
    );
}

export default Home;