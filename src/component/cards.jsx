import SingleCard from "./singleCard";
import propTypes from 'prop-types';


const Cards = ({cardsData}) => {
    console.log(cardsData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 md:max-w-2xl md:flex-row lg:max-w-4xl min-[1100px]:max-w-5xl mx-auto">
           
            {
                cardsData?.map( card => <SingleCard key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};
Cards.propTypes = {
    cardsData: propTypes.array
}

export default Cards;