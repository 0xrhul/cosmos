import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PokemonDetail = ({ name, id }: { name: string; id: number }) => {
  return (
    <>
      <h2 className="font-heading text-xl uppercase">{name}</h2>
      <Tabs defaultValue="normal">
        <TabsList className="bg-transparent hover:bg-neutral-900">
          <TabsTrigger
            value="normal"
            className="data-[state=active]:bg-neutral-800"
          >
            Normal
          </TabsTrigger>
          <TabsTrigger
            value="shiny"
            className="data-[state=active]:bg-neutral-800"
          >
            Shiny
          </TabsTrigger>
        </TabsList>
        <TabsContent value="normal">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={250}
            height={250}
            alt="pokemon images"
            priority
          />
        </TabsContent>
        <TabsContent value="shiny">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
            width={250}
            height={250}
            alt="pokemon images"
            priority
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default PokemonDetail;
