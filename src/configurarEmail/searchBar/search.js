import { CampoPesquisa, Lupa, Fundo } from "./style";

function Pesquisar() {
    return(
        <>
            <Fundo>
                <Lupa svg="./asssets/home.svg"></Lupa>
                <CampoPesquisa>Pesquisar</CampoPesquisa>
            </Fundo>
        </>
    )
}

export default Pesquisar;