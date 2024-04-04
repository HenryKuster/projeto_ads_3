"use client";

import { useEffect } from "react";
import temp from "./receitas.json";

export interface Receita {
  receita: string;
  ingredientes: string;
  ingredientesBase: IngredientesBase;
  modoPreparo: string;
  link_imagem: string;
}

export interface IngredientesBase {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
}

export default function Home() {
  const receitaArray = Object.values(temp.receitas) as Receita[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-svh">
      <div className="flex flex-2 bg-red-500 text-white h-11">Menu</div>
      <div className="flex flex-1 bg-blue-500">
        <ul className="list-disc bg-red-400 m-2 justify-between">
          {receitaArray.map((re) => (
            <li
              key={re.receita}
              className="flex flex-row space-y-16 py-2 max-w-screen-md "
            >
              {/* <img className="" src={re.link_imagem} width={120}/> */}
              <img
                className="rounded-3xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfR-TtpFbX85rG-tfxu2Qly0dhnpXcmn245Q&s"
                width={120}
              />
              <div className="bg-red-600 content-center min-w-10">
                {re.ingredientes}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
