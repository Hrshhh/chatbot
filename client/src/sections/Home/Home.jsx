import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


const Home = () => {
    const [chatWindowOpen, setChatWindowOpen] = useState(true);
    const [userMessage, setUserMessage] = useState("");

    useEffect(()=> {
      addResponseMessage("Welcome to Chatbot")
    }, [])

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        setUserMessage(newMessage);
        const formData = new FormData();
        formData.append("userPrompt", newMessage);

        axios.post(`http://localhost:5000/chat`, formData).then((response) => {
          console.log("ere", response.data)
          // addResponseMessage(response.data)
        }).catch((error) => {
          console.log(error);
        })
      };

      const handleToggle = (open) => {
        setChatWindowOpen((prev) => !prev);
      };

    return (
        <>
        <div className="App">
            <Widget
                title="Dhruv"
                subtitle="Chutiya"
                showCloseButton={true}
                handleToggle={handleToggle}
                emojis={true}
                handleNewUserMessage={handleNewUserMessage}
            />
        </div>
        </>
    )
}

export default Home