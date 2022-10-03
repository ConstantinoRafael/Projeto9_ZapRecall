import LogoContainer from "./LogoContainer";
import styled from "styled-components";
import Perguntas from './Perguntas';
import FooterConcluidos from "./FooterConcluidos";
import DECK from "./DECK";
import { useState } from "react";

export default function App() {

    const [estadoPergunta, setEstadoPergunta] = useState("pergunta-fechada")


    const [contador, setContador] = useState(0);
    const [ultimaPerguntaClick, setUltimaPerguntaClick] = useState(null)

    const [deck, setDeck] = useState(DECK);
    
     
    return (
        <ScreenContainer>
            <LogoContainer />

            <Perguntas deck={deck} setDeck={setDeck} ultimaPerguntaClick={ultimaPerguntaClick} setUltimaPerguntaClick={setUltimaPerguntaClick}/>

            <StyleFooterConcluidos>
                <FooterConcluidos deck={deck} setDeck={setDeck} contador={contador} setContador={setContador} ultimaPerguntaClick={ultimaPerguntaClick} setUltimaPerguntaClick={setUltimaPerguntaClick} />
            </StyleFooterConcluidos>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;

const StyleFooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`;