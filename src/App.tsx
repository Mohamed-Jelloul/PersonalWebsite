import React, {useState} from 'react';
import {CookiesProvider, useCookies} from "react-cookie";
import {Button, ButtonGroup, TextField} from '@mui/material';
import './App.css';

function App() {
    let [imgUrl, setImageUrl] = useState("https://simosandboxbucket.s3.us-east-2.amazonaws.com/Moi.jpg")
    let [name, setName] = useState('')
    let [cookie, setCookie] = useCookies(['name'])

    function fetchImage() {
        fetch('https://api.mohamedjelloul.com/get_random_image_url')
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data)
                console.log(data)
            })
            .catch((err) => console.log(err.message))
    }

    const handleName = () => {
        setCookie('name', name, {path: '/', expires: new Date(9999, 10, 10)})
        console.log(cookie['name'])
    }

    return (
        <CookiesProvider>
            <div className="App">
                <header className="App-header">
                    <img src={imgUrl} className="App-logo" alt="logo" />
                    <p>Hello {cookie['name']}!</p>
                    <TextField id="outlined-basic" label="Enter Name" variant="filled" onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                    <ButtonGroup sx={{"marginTop": 5}} variant="contained" aria-label="outlined primary button group">
                        <Button onClick={handleName}>Set Name</Button>
                        <Button onClick={fetchImage}>Random Image</Button>
                    </ButtonGroup>
                </header>
            </div>
        </CookiesProvider>
    );
}

export default App;
