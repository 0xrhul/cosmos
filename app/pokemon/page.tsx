import Image from "next/image";
import Link from "next/link";

const getPokemons = async () => {
  const pokeRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0}`
  );
  const { results } = await pokeRes.json();
  return results;
};

const Pokemon = async () => {
  const data = await getPokemons();
  return (
    <main className="container py-12">
      <div className="grid grid-cols-3 gap-4 mx-auto">
        {data.map(({ name, url }: { name: string; url: string }) => {
          const id = url.split("/")[6];
          return (
            <Link
              href={`/pokemon/details/${id}`}
              key={id}
              className="hover:bg-neutral-900/70 rounded p-2 duration-300 flex flex-col items-center"
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                width={250}
                height={250}
                alt="pokemon images"
              />
              <h3 className="text-lg font-semibold text-heading uppercase text-center">
                {name}
              </h3>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Pokemon;
