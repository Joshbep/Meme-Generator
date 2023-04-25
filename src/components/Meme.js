import memesData from "../memesData.js"

function Meme() {

    function handleClick() {
        let memes = memesData.data.memes
        let meme = memes[[Math.floor(Math.random()*memes.length)]]
        return console.log(meme.url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button type="submit" className="form--button" onClick={handleClick}> Get a new meme image 🖼</button>
            </div >
        </main>
    )
}
export default Meme