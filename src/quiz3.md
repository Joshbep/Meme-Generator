manipulating state and changing it with the click of a button

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [thingsArray, setThingArray] = useState(["Thing 1", "Thing 2"])
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    
    function addItem() {
        // Build from scratch :)
        setThingArray((prevState) => {
            return [...thingsArray, `Thing ${prevState.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map((thing) => <p key={thing}> {thing} </p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));