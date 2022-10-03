import styled from "styled-components";
import iconeCerto from "./assets/img/icone_certo.png";
import iconeErro from "./assets/img/icone_erro.png";
import iconeQuase from "./assets/img/icone_quase.png";

const BOTOES = [{ texto: "Não lembrei", cor: "vermelho", codigo: "#FF3030", imagem: iconeErro },
{ texto: "Quase não lembrei", cor: "amarelo", codigo: "#FF922E", imagem: iconeCerto },
{ texto: "Zap!", cor: "verde", codigo: "#2FBE34", imagem: iconeQuase }]

function Botao(props) {
    const { texto, codigo } = props

    return (
        <>
            <CadaBotao codigo={codigo}>{texto}</CadaBotao>
        </>
    )


}

export default function FooterConcluidos() {
    return (
        <>
            <ContainerBotoes>
                {BOTOES.map((b) => (<Botao key={b.texto} texto={b.texto} codigo={b.codigo} />))}
            </ContainerBotoes>
            <h1>0/1 CONCLUÍDOS</h1>
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

