import { useEffect, useState } from "react";
import { GameBanner } from "./components/GameBanner";
import { PostAdBanner } from "./components/PostAdBanner";

import "./styles/main.css";

import logoImg from "./assets/Logo.svg";

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [ games, setGames ] = useState<GameProps[]>([])

  useEffect(() => {
    fetch("http://localhost:3131/games")
    .then(res => res.json())
    .then(data => setGames(data))
  }, [])

  return (
    <div className="max-h-[1344px] mx-auto flex flex-col items-center my-20">

      <img src={logoImg}></img>

      <h1 className="text-6xl text-white font-black my-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6">
        { games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={ game.bannerUrl}  
              title={ game.title } 
              countAds={ game._count.ads }
            />
          )
        })}
      </div> 

      <PostAdBanner />
    </div>
  );
}

export default App;
