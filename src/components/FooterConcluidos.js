import styled from "styled-components";
import iconeCerto from "./assets/img/icone_certo.png";
import iconeErro from "./assets/img/icone_erro.png";
import iconeQuase from "./assets/img/icone_quase.png";


const BOTOES = [{ texto: "Não lembrei", cor: "vermelho", codigo: "#FF3030", imagem: iconeErro },
{ texto: "Quase não lembrei", cor: "amarelo", codigo: "#FF922E", imagem: iconeQuase },
{ texto: "Zap!", cor: "verde", codigo: "#2FBE34", imagem: iconeCerto }]

function Botao(props) {
    const {deck, setDeck, texto, codigo, contador, setContador, ultimaPerguntaClick, setUltimaPerguntaClick } = props


    return (
        <>
            <CadaBotao data-identifier="forgot-btn almost-forgot-btn zap-btn" onClick={() => responderPergunta(texto)} codigo={codigo} contador={contador} >{texto}</CadaBotao>
        </>
    )

    function responderPergunta() {

        if(ultimaPerguntaClick.estadoPergunta !== "resposta-aberta") {
            return
        }

        if(ultimaPerguntaClick.estadoPergunta === "pergunta-verde" || ultimaPerguntaClick.estadoPergunta === "pergunta-amarela" || ultimaPerguntaClick.estadoPergunta === "pergunta-vermelha" ) {
            return
        }

        const novoDeck = [...deck]

        if(texto === "Não lembrei" ) {
            novoDeck[ultimaPerguntaClick.id].estadoPergunta = "pergunta-vermelha"
        } else if(texto === "Quase não lembrei" ) {
            novoDeck[ultimaPerguntaClick.id].estadoPergunta = "pergunta-amarela"
        } else {
            novoDeck[ultimaPerguntaClick.id].estadoPergunta = "pergunta-verde"
        }

        

        setDeck(novoDeck);

        setContador(contador + 1)
    }
}

export default function FooterConcluidos(props) {

    // console.log(props)
    const {deck, setDeck, contador, setContador, ultimaPerguntaClick, setUltimaPerguntaClick} = props
    const totalContador = deck.length

    return (
        <>
            <ContainerBotoes>
                {BOTOES.map((b) => (<Botao key={b.texto} deck={deck} setDeck={setDeck} texto={b.texto} codigo={b.codigo} contador={contador} setContador={setContador} ultimaPerguntaClick={ultimaPerguntaClick} setUltimaPerguntaClick={setUltimaPerguntaClick}/>))}
            </ContainerBotoes>
            <h1 data-identifier="flashcard-counter">{contador}/{totalContador} CONCLUÍDOS</h1>
        </>

    )
}



const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

const CadaBotao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${(props) => (props.codigo)};
    border-radius: 5px;
    border: 1px solid ${(props) => (props.codigo)};
    padding:5px;
`

