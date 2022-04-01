import React, { useState } from "react";
import Trollface from '../images/troll-face.png'
import memesData from "../memesData.js"

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    //const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="meme-container">
            <div className="form">
                <div className="input-container">
                    <input
                        type='text'
                        placeholder="Top text"
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}

                    />
                    <input
                        type='text'
                        placeholder="Bottom text"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage}></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

export default Meme