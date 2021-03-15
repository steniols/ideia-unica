/* 
    PARAMETROS DINÂMICOS:
    Resgatado dados do produto no client side, 
    ou seja, o dado só será populado
    dinamicamente no html (não virá junto com o html inicial)
*/

import { useRouter } from 'next/router';

function Produtos(props) {
    const router = useRouter();
    const id = router.query.id;

    return <div>Produto {id}</div>
}

export default Produtos;