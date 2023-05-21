import PokemonDetail from "@/components/pokemon-details";

const DetailsPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { name } = await pokeRes.json();
  return (
    <main className="container py-12">
      <div className="border border-border p-4">
        <PokemonDetail name={name} id={id} />
      </div>
    </main>
  );
};

export default DetailsPage;
