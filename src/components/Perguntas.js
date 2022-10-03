import { useState } from "react";
import setaVirar from "./assets/img/seta_virar.png"
import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png"

import iconeCerto from "./assets/img/icone_certo.png";
import iconeErro from "./assets/img/icone_erro.png";
import iconeQuase from "./assets/img/icone_quase.png";

function Pergunta(props) {
    const { card, ultimaPerguntaClick, setUltimaPerguntaClick, deck, setDeck } = props
    
    const [mudarPergunta, setMudarPergunta] = useState(card.numero)

    if (card.estadoPergunta === "pergunta-fechada") {
        return (
            <PerguntaFechada data-identifier="flashcard">
                <p data-identifier="flashcard-index-item">{card.numero}</p>
                <img data-identifier="flashcard-show-btn" src={setaPlay} alt={"setaPlay"} onClick={() => mostrarPergunta (card.id)} />
            </PerguntaFechada>

        )
    } else if (card.estadoPergunta === "pergunta-aberta") {
        return (
            <PerguntaAberta>
                <p data-identifier="flashcard-question">{card.pergunta}</p>
                <img data-identifier="flashcard-turn-btn" src={setaVirar} alt={"setaVirar"} onClick={() => mostrarResposta (card.id)} />
            </PerguntaAberta>
        )
    } else if (card.estadoPergunta === "resposta-aberta") {
        return (
            <PerguntaAberta>
                <p data-identifier="flashcard-answer">{card.resposta}</p>
            </PerguntaAberta>
        )
    } else if (card.estadoPergunta === "pergunta-verde") {
        return (
            <PerguntaFechadaVerde>
                <p>{card.numero}</p>
                <img data-identifier="flashcard-status" src={iconeCerto} alt={"icon-check"} />
            </ PerguntaFechadaVerde>
        )
    } else if (card.estadoPergunta === "pergunta-amarela") {
        return (
            <PerguntaFechadaAmarela>
                <p>{card.numero}</p>
                <img data-identifier="flashcard-status" src={iconeQuase} alt={"icon-check"} />
            </ PerguntaFechadaAmarela>
        )
    } else if (card.estadoPergunta === "pergunta-vermelha") {
        return (
            <PerguntaFechadaVermelha>
                <p>{card.numero}</p>
                <img data-identifier="flashcard-status" src={iconeErro} alt={"icon-check"} />
            </ PerguntaFechadaVermelha>
        )
    }


    function mostrarPergunta(idCard) {

               
        if (ultimaPerguntaClick === null || ultimaPerguntaClick.estadoPergunta === "pergunta-verde" || ultimaPerguntaClick.estadoPergunta === "pergunta-amarela" || ultimaPerguntaClick.estadoPergunta === "pergunta-vermelha") {

            console.log(idCard)
            
            const novoDeck = [...deck]

            novoDeck[idCard].estadoPergunta = "pergunta-aberta"

            setDeck(novoDeck);

            setUltimaPerguntaClick(card)
            
        }


        if (ultimaPerguntaClick !== null && ultimaPerguntaClick.estadoPergunta !== "pergunta-verde" && ultimaPerguntaClick.estadoPergunta !== "pergunta-amarela" && ultimaPerguntaClick.estadoPergunta !== "pergunta-vermelha") {

            console.log(idCard)

            const novoDeck = [...deck]

            novoDeck[ultimaPerguntaClick.id].estadoPergunta = "pergunta-fechada"

            novoDeck[idCard].estadoPergunta = "pergunta-aberta"

            setDeck(novoDeck);

            setUltimaPerguntaClick(card);

        }       
        
    }

    function mostrarResposta(idCard) {

        console.log(idCard)
        const novoDeck = [...deck]

        novoDeck[idCard].estadoPergunta = "resposta-aberta"

        setDeck(novoDeck);

        
    }

}

export default function Perguntas(props) {
    const { deck, setDeck,ultimaPerguntaClick, setUltimaPerguntaClick } = props

    return (
        <>
            {deck.map((perg) => (<Pergunta key={perg.numero} deck={deck} setDeck={setDeck} card={perg} ultimaPerguntaClick={ultimaPerguntaClick} setUltimaPerguntaClick={setUltimaPerguntaClick} />))}
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    img {
    cursor: pointer;
    }

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  
    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #333333;
    }
  
    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    }
  `

const PerguntaFechadaVerde = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: line-through;
    text-decoration-color: #2FBE34;


    img {
    cursor: pointer;
    }

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #2FBE34;
    }
`

const PerguntaFechadaAmarela = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: line-through;
    text-decoration-color: #FF922E;

    img {
    cursor: pointer;
    }

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FF922E;
    }
`

const PerguntaFechadaVermelha = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: line-through;
    text-decoration-color: #FF3030;

    img {
    cursor: pointer;
    }

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FF3030;
    }
`