import CardImage from "./Image"
export default function Card({pokeData, chosenCards, setChosenCards, score, topScore, setTopScore}){
    

    function fillArrayOfPokemon(){
        let renderedArray =[];
        let renderedNumbers = [];
        for (let i = 0; i<8;i++){
            let currentNumber = checkNumberDublication(getRandomInt(19), renderedNumbers) ;
            renderedNumbers[i] = currentNumber;

            renderedArray[i] = pokeData.results[currentNumber].name;
        }
        return renderedArray;
    }
    
    function checkNumberDublication(currentNumber, numberarray){
        if (numberarray.includes(currentNumber)){
            const number = getRandomInt(19)
            return checkNumberDublication(number, numberarray)
        } else{ return currentNumber}
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

   

    return(
        <>
            {fillArrayOfPokemon().map((item) => (
                <CardImage itemName = {item} key = {item} chosenCards = {chosenCards} setChosenCards = {setChosenCards} score={score} setTopScore={setTopScore} topScore={topScore}/>
                
            ))}
            
        </> 
        

       
    )
}