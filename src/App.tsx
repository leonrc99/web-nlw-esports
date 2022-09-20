import "./styles/main.css";

import { MagnifyingGlassPlus } from "phosphor-react"
import logoImg from "./assets/Logo.svg";

function App() {
  return (
    <div className="max-h-[1344px] mx-auto flex flex-col items-center my-20">

      <img src={logoImg}></img>

      <h1 className="text-6xl text-white font-black my-20">
        seu <span className="text-transparent bg-nlw-gradient bg-clip-text">DUO</span> está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="max-w-[180px]" src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">VALORANT</strong>
            <span className="text-sm text-zinc-300 mt-1 block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="max-w-[180px]" src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-sm text-zinc-300 mt-1 block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="max-w-[180px]" src="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 mt-1 block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="max-w-[180px]" src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Minecraft</strong>
            <span className="text-sm text-zinc-300 mt-1 block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="max-w-[180px]" src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300 mt-1 block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="max-w-[180px]" src="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">GTA V</strong>
            <span className="text-sm text-zinc-300 mt-1 block">4 anúncios</span>
          </div>
        </a>
      </div>

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

    </div>
  );
}

export default App;
