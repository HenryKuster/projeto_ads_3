"use client";

import temp from "./receitas.json";

export interface Receita {
  id: number;
  receita: string;
  ingredientes: string;
  modo_preparo: string;
  link_imagem: string;
  tipo: string;
  created_at: string;
  IngredientesBase: IngredientesBase[];
}

export interface IngredientesBase {
  id: number;
  nomesIngrediente: string[];
  receita_id: number;
  created_at: string;
}

export default function Home() {
  const receitaArray = Object.values(temp);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-svh">
      <h1 className="flex flex-2 text-white h-11">Menu</h1>

      <ul className="list-disc m-2 justify-between hover:text-slate-400">
        {receitaArray.map((re) => (
          <li className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row bg-[#FFDEFA] hover:bg-[#AE475B] gap-2 hover:text-slate-400 my-2">
            <div className="flex">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={re.link_imagem}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-950  ">
                  {re.receita}
                </h5>
                <p className="mb-3 font-normal text-slate-900">
                  {re.modo_preparo}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

{
  /* <li
              key={re.id}
              className="flex flex-row space-y-16 py-2 max-w-screen-md"
            >
              <div className="gap-2 mx-2">
                {!!re.link_imagem && (
                  <div className="w-28 h-auto">
                    <img className="flex rounded" src={re.link_imagem} />
                  </div>
                )}
                <div className="flex flex-col">
                  <h1 className="text-xl">{re.receita}</h1>
                  <div className="content-center min-w-10">
                    <div className="font-light">{re.modo_preparo}</div>
                    {/* {re.ingredientes.split(",").map((ingred) => (
                      <div>{ingred}</div>
                    ))}
                  </div>
                </div>
              </div>
            </li> */
}
