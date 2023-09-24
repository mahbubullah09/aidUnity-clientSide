import { useLoaderData } from "react-router-dom";
import Banner from "./banner";
import Cards from "./cards";


const Home = () => {
    const cardsData = useLoaderData();
    console.log(cardsData);
    return (
        <div>
           <Banner></Banner>
           <Cards cardsData={cardsData}></Cards>
        </div>
    );
};

export default Home;