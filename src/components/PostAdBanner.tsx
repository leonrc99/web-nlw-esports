import { MagnifyingGlassPlus } from "phosphor-react";

export function PostAdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch mx-28 mt-8 rounded-lg">
        <div className="bg-[#2A2634] px-8 py-6 rounded flex justify-between items-center">
          <div>
            <strong className="text-2xl font-bold text-white block">Não encontrou seu duo?</strong>
            <span className="text-zinc-300 mt-1">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 duration-200 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </div>
    )
}