function FruitMerge(){
    const Fruit1=['apple','banana']
    const Fruit2=['cherry','mango']
    const fruit=Fruit1.concat(Fruit2)

    return(
        
        <ol>
            {fruit.map((f)=>(
                <li>{f}</li>
            ))}
        </ol>
    )
}

export default FruitMerge