/* 
    PÁGINAS CRIADAS NO SERVER SIDE E CLIENT SIDE:
    O getStaticPaths permite que as páginas no array de paths sejam
    geradas antes de tudo.
    O fallback aceita 3 valores:
    false = só permite os paths no array
    true = aceita os paths do array ou tentar gerar a página assincrona
    blocking = bloqueia a requisição até gerar a página (server side)
*/

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await delay(5000);
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    return <div>Produto {props.id}</div>
}

export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}