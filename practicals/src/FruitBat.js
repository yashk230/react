function FruitBat(){

    const fruit=['apple','banana','cherry','bat']
    fruit.pop('bat')

    return(
        <ol>
            {
                fruit.map((f)=>(
                    <li>{f}</li>
                ))
            }
        </ol>
    )
}

export default FruitBat;