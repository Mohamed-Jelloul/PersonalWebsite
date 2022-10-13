import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [imgUrl, setImageUrl] = useState("https://simosandboxbucket.s3.us-east-2.amazonaws.com/Moi.jpg")
    let [description, setDescription] = useState("The Best Programmer on Earth")
    let imgUrls = {
        0: "https://simosandboxbucket.s3.us-east-2.amazonaws.com/Moi.jpg",
        1: "https://simosandboxbucket.s3.us-east-2.amazonaws.com/Twe.jpg",
        2: "https://simosandboxbucket.s3.us-east-2.amazonaws.com/Neil.jpg",
        3: "https://simosandboxbucket.s3.us-east-2.amazonaws.com/Gui.jpg"
    }

    const fetchImage = async () => {
        let index = Math.floor(Math.random()*3)
        console.log(index)
        // @ts-ignore
        setImageUrl(imgUrls[index])
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={imgUrl} className="App-logo" alt="logo" />
                <p>{description}</p>
                <button onClick={fetchImage}>Randomize Image</button>
            </header>
        </div>
    );
}

export default App;
