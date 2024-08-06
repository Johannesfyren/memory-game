import { useEffect, useState } from "react"
import Card from "./Card";





export function Cardholder(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState('true');
    const [chosenCards, setChosenCards] = useState([]);
    const [topScore, setTopScore] = useState('')
    let score = chosenCards.length;
    
    useEffect(() =>{        
        fetchCardInfo();
    },[])


    const fetchCardInfo = async ()=>{
        try {
        const response = fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'); 
       
        const dataFromApi = (await response).json();
        setData(await dataFromApi);
        setLoading(false);
    
        }catch (error){
            console.log(error); 
        }
    };
    



    return(
        <>
            <p>Current Score: {chosenCards.length}</p>
            <p>Top Score: {topScore}</p>
            <div
                className="Cardholder"
            >
            {loading ? '' : <Card pokeData = {data} chosenCards = {chosenCards} setChosenCards = {setChosenCards} score={score} setTopScore={setTopScore} topScore={topScore}/>}
            </div>
            
        </>
    )
    // 
}

