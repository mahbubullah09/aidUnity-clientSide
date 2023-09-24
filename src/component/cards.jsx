import SingleCard from "./singleCard";


const Cards = ({cardsData}) => {
    return (
        <div className="grid grid-cols-4 gap-4 my-8">
           
            {
                cardsData?.map( card => <SingleCard key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

export default Cards;