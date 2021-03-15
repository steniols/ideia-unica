function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
        <div>{dynamicDateString} (dinâmico)</div>
        <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export function getStatucProps() {
    const staticDate = new Date();
    const staticDateString = dynamicDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo