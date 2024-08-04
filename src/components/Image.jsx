export default function CardImage({itemName}){

    return(
        <div>
            <img
                    src={`https://img.pokemondb.net/artwork/${itemName}.jpg`}
                    alt={itemName} // Adding alt text for accessibility
                    width={"100px"}
                    height={"auto"}
                    
                    />
            <p>{itemName}</p>        
        </div>
        
    )
}