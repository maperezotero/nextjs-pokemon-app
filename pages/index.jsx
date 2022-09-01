import { Button } from "@nextui-org/react";
import React from "react";
import { Layout } from "../components/layouts";

const HomePage = () => {
  return (
    <Layout title={"Listado de Pokémons"}>
      <h1>Hola Mundo!</h1>
      <Button color="gradient">Hola Mundo</Button>
    </Layout>
  );
};

export default HomePage;
