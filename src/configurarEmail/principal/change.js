import Main from "../main/opcoes";
import Pesquisar from "../searchBar/search";
import Nav from "../sideBar/side";
import { Direita, Esquerda, Fundo } from "./style";

function AlterarEmail() {
    return(
        <Fundo>
            <Esquerda>
                <Nav/>
            </Esquerda>
            <Direita>
                <Pesquisar/>
                <Main/>
            </Direita>
        </Fundo>
        
    )
}

export default AlterarEmail;