import FearGreedIndex from "../components/FearGreedIndex";
import HomeHeadCard from "../components/HomeHeadCard";
import HomeTrendingCard from "../components/HomeTrendingCard";
import CalculatorWidget from "../components/CalculatorWidget";
import HomeMarketList from "../components/HomeMarketList";

function Home() {
    return ( 
        <main className={`w-full  h-[100%] bg-[#051925] flex flex-col items-center`}>
                <HomeHeadCard/>
            <div className="flex flex-row lg:w-[1000px] lg:h-[260px]
            md:w-[700px] md:h-[300px]
            w-[450px] h-[250px]">
                <HomeTrendingCard/>
                <FearGreedIndex/>
            </div>
            
            <CalculatorWidget/>
            <HomeMarketList/>
            
        </main>
     );
}

export default Home;


