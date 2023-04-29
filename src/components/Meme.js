import memesData from "../memesData.js"
import {useState} from "react"

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function handleClick() {
        const memes = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        const url = memes[randomNumber].url
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
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
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}
export default Meme

