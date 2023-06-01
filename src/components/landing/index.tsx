import Cabecalho from "./cabecalho"
import Destaque from "./destaque"
import Vantagens from "./vantagens"
import Depoimentos from "./depoimentos"
import Rodape from "./rodape"
import Pagina from "../template/Pagina"

export default function Landing() {
    return (
        <Pagina externa>
            <Cabecalho/>
            <Destaque/>
            <Vantagens/>
            <Depoimentos/>
            <Rodape/>
        </Pagina>
    )
}