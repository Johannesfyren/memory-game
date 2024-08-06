export default function CardImage({itemName, handleClick}){

    return(
        <div>
            <img
                    src={`https://img.pokemondb.net/artwork/${itemName}.jpg`}
                    alt={itemName} 
                    width={"100px"}
                    height={"auto"}
                    onClick={handleClick(itemName)}
                    />
            <p>{itemName}</p>        
        </div>
        
    )
}