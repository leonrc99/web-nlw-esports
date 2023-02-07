interface GameBannerProps {
    bannerUrl: string;
    title: string;
    countAds: number;
}

export function GameBanner(props: GameBannerProps) {

    return (
        
            <a href="" className="relative rounded-lg overflow-hidden">
            <img className="max-w-[180px]" src={ props.bannerUrl }/>
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
                <strong className="font-bold text-white block">{ props.title }</strong>
                <span className="text-sm text-zinc-300 mt-1 block">{ props.countAds } anúncios</span>
            </div>
            </a>
    )
}