import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CoinNews from "../components/CoinNews";
import CoinCarousel from "../components/CoinCarousel";
import { getCoinData } from "../utils/utils";
import Loader from "../components/Loader";
import ViewCardUpper from "../components/viewcardUpper";
import ViewCardLower from "../components/ViewCardLower";

const ViewPage = ({match}) => {
    const [response, setCoinData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    
      getCoinData(id)
      .then(data => {
        setCoinData(data);
      })
      .catch(error => {
        console.log(error);
      });
    
    }, [id])
    
  
    if (!response) {
      return <div className={`w-full h-[100vh] bg-[#051925] flex flex-col pb-[200px]`}>
        <Loader/>
      </div>;
    }

    return (

      <div className={`w-full xl:h-[100%] lg:h-[100%] md:h-[6000px] h-[6000px] bg-[#051925] flex flex-col pb-[200px]`}>
        <ViewCardUpper
        data={response}/>
        <ViewCardLower
        data={response}/>    
        <CoinNews/>
        <CoinCarousel/>
      </div>

    );
}
export default ViewPage
