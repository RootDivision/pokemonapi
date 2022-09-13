import { useParams } from "react-router-dom";

const PokemonDetail = () => {
    const params = useParams();

    return (
        <h1>{params.name}</h1>
    )
}

export default PokemonDetail;