
function FirstName(person) {
    return (
    <div>
    {person.map((element => {
    const {id, name} = element;
        
      
        return (
        <div key={id}>
          <p>{id} - {name}</p>
        </div>
        )
    }))}
        </div>
        

)}
export default FirstName;