import memesData from "../memesData.js"
import {useState} from "react"

function Meme() {

    const [memeImg, setMemeImg] = useState("")

    function handleClick() {
        const memes = memesData.data.memes
        const meme = memes[Math.floor(Math.random()*memes.length)]
        let url = meme.url
        setMemeImg(url)
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
                <button 
                    type="submit" 
                    className="form--button" 
                    onClick={handleClick}
                > 
                    Get a new meme image 🖼
                </button>
            </div >
            <img src={memeImg} className="meme--image"/>
        </main>
    )
}
export default Meme

