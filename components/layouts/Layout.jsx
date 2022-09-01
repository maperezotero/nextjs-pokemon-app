import Head from "next/head";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Miguel Ángel Pérez Otero" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
