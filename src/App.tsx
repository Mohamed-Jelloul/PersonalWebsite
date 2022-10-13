import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [imgUrl, setImageUrl] = useState("https://simosandboxbucket.s3.us-east-2.amazonaws.com/IMG_0828.jpg")
    let [description, setDescription] = useState("The Best Programmer on Earth")
    let imgUrls = {
        0: "https://simosandboxbucket.s3.us-east-2.amazonaws.com/IMG_0828.jpg",
        1: "https://simosandboxbucket.s3.us-east-2.amazonaws.com/IMG_0906.jpg"
    }

    const fetchImage = async () => {
        let index = Math.round(Math.random()%2)
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
