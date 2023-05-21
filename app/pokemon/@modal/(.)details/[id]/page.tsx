import PokemonDetail from "@/components/pokemon-details";
import React from "react";
import PreviewModal from "@/components/preview-modal";

const DetailsModal = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { name } = await pokeRes.json();
  return (
    <PreviewModal>
      <PokemonDetail name={name} id={id} />
    </PreviewModal>
  );
};

export default DetailsModal;
