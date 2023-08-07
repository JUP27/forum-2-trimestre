import { Caminhos, Fundo, Icone, Logo, Menu } from "./style";

function Nav() {
    return(
        <Fundo>
            <Logo svg="src/asssets/icone.svg"/>
            <Menu>
                <Caminhos>
                    <Icone svg="src/asssets/home.svg"/>
                    Home
                </Caminhos>
                <Caminhos>
                    <Icone svg="src/asssets/home.svg"/>
                    Perfil
                </Caminhos>
                <Caminhos>
                    <Icone svg="src/asssets/home.svg"/>
                    Configurações
                </Caminhos>
            </Menu>
        </Fundo>
    )
}

export default Nav; 