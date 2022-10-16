import React, {useState} from 'react';
import './App.css';

function App() {
    let [imgUrl, setImageUrl] = useState("https://simosandboxbucket.s3.us-east-2.amazonaws.com/Moi.jpg")
    let [description, setDescription] = useState("The Best Programmer on Earth")

    function fetchImage() {
        fetch('https://api.mohamedjelloul.com/get_random_image_url')
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data)
                console.log(data)
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={imgUrl} className="App-logo" alt="logo" />
                <p>{description}</p>
                <button onClick={fetchImage}>Get Random Image</button>
            </header>
        </div>
    );
}

export default App;
