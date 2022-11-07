import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Conteiner, Content, Icon } from "./style";

export function NewGroup () {
    return (
        <Conteiner>
            <Header showBackButton/>
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />
                <Input placeholder="Nome da turma" style={{marginBottom: 20}}/>
                <Button name="Criar"/>
            </Content>
        </Conteiner>
    );
}
