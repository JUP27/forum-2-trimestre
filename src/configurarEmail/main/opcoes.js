import Atualizar from "../atualizar/campos";
import { Icone } from "../sideBar/style";
import { Fundo, Outros } from "./style";

function Main() {
    return(
        <Fundo>
            <Outros>
                <Icone svg="./asssets/configuracoes.svg"/>
                Mudar o nome do usuário
            </Outros>
            <Atualizar/>
            <Outros>
                <Icone svg="./asssets/configuracoes.svg"/>
                Mudar biografia
            </Outros>
        </Fundo>
    )
}

export default Main; 