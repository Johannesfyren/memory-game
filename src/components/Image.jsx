export default function CardImage({itemName, chosenCards, setChosenCards, score, topScore, setTopScore}){

    function handleClick (){
        if (chosenCards.includes(itemName)){
            topScore < chosenCards.length ? setTopScore(chosenCards.length) : '';
            setChosenCards('') 
            
            
        } else{
            topScore < chosenCards.length ? setTopScore(chosenCards.length) : '';
            setChosenCards([... chosenCards, itemName]);
            console.log(score)
        }
        
       
        
    }
    return(
        <div>
            <img
                    src={`https://img.pokemondb.net/artwork/${itemName}.jpg`}
                    alt={itemName} 
                    width={"100px"}
                    height={"auto"}
                    onClick={handleClick}
                    />
            <p>{itemName}</p>        
        </div>
        
    )
}