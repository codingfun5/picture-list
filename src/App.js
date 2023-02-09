import { useState } from 'react';
import Bird from './Bird';
import { data } from './data';

function App() {
    const [pic, setPic] = useState(data);
    console.log(pic)
    return(
        <Bird benefits={pic}/>
    )


}
export default App;