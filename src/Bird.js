
function Bird({benefits}) {
    return(
        <div>
            {benefits.map((element => {
                const{id, image} = element;
                return(
                    <div key={id}>
                        <p>{id}</p>
                        <img src={image} width="300px" alt="bird"/>
                    </div>
                )

            }))}

        </div>
    )

}
export default Bird;