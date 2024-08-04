import { useEffect, useState } from "react"
import Card from "./Card";

let cardInfo = [];
//https://img.pokemondb.net/artwork/pikachu.jpg


export function Cardholder(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState('true');
    
    useEffect(() =>{        
        fetchCardInfo();
    },[])


    const fetchCardInfo = async ()=>{
        try {
        const response = fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'); 
       
        const dataFromApi = (await response).json();
        console.log(await dataFromApi,"hellos");
        setData(await dataFromApi);
        setLoading(false);
    
        }catch (error){
            console.log(error); 
        }
    };
    


    function handlebtnClick(){
        console.log(data)
    }


    return(
        <>
            <div
                className="Cardholder"
            >
            {loading ? '' : <Card pokeData = {data}/>}
            </div>
            <button onClick={handlebtnClick}></button>
        </>
    )
    // 
}

// function fetchCardInfo(){
//     fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')
//     .then(response => response.json())
//     .then((data) =>{
//         cardInfo = data.map((data, index) => data[index].url)
//         console.log(cardInfo);
//     })
//     .catch(error => console.error(error));
    
// }
