import CardImage from "./Image"
export default function Card({pokeData}){

    


    return(
       
        <>
            {pokeData.results.map((item) => (
                <CardImage itemName = {item.name} key = {item.name}/>
            ))}
            
            </> 
        

       
    )
}