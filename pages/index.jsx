import { Layout } from "../components/layouts";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "../api";
import { PokemonCard } from "../components/pokemon";

const HomePage = ({ pokemons }) => {
  return (
    <Layout title={"Listado de Pokémons"}>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");
  const pokemons = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
