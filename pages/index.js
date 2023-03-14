import Head from "next/head";
import { use, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [messageInput, setMessageInput] = useState("");
  const [result, setResult] = useState("");


  async function onSubmit(event) {
    setResult(chat.innerText+"User: "+messageInput);
    chat.innerHTML+="User: "+messageInput;
    // console.log(event);
    setMessageInput(result + thePrompt.value);
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(chat.innerText+"Bot: " + data.result);
      chat.innerHTML += "<br>Bot: "+data.result;
      setMessageInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div className={styles.main}>
      <p id="up"></p>
      <header>
        <h1>Create-a-friend</h1>
        <nav>
            <a href="#up">Start</a>
            <a href="#theForm">Chat</a>
            <a href="#about">About</a>
        </nav>
    </header>
    <article id="about">
        <h2>About our project</h2>
        <p>
          So for our API project we have decided to make a site with an in-built chatbot. <br/>
          The chatbot model is text-babbage-001 and is provided by OpenAI - the company that created the famous ChatGPT. <br/>
          We have also decided we wanted to learn something new and challenge ourselves a bit, so the entire website is generated using ReactJS. <br/>
          My job was mainly to create the structre of the website and to plug the babbage into it. Although the job wasn't easy (API key rotation was so annoying)  
          I did manage to do it. I got the most useful informations from youtube tutorials and OpenAI Api documentation as well as their opensource test website.  <br/>
          The CSS (done mostly by Kamil) is a module - every selector inside it had to begin with class or id. <br/>
          Because our project is made in React and our CSS is a module our code can be used not only as a website of its own but also as an element of a bigger one.
        </p>
    </article>
    <article>
        <img src="https://cdn.pixabay.com/photo/2023/03/06/21/16/artificial-intelligence-7834467_960_720.jpg" alt="ai"/>
        
        <form onSubmit={onSubmit} id="theForm">
           <input
             id="thePrompt"
             type="text"
             name="message"
             placeholder="Message the bot"
             value={messageInput}
             onChange={(e) => setMessageInput(e.target.value)}
           />
           <input type="submit" value="Send"/>
           <br/>
           <div id="chat">
            User: testowa konwersacja weź to później usuń
            <br/>
            Bot: Ok, ale słuchaj: Ea ad cillum adipisicing aliquip ullamco veniam. Cillum et enim occaecat adipisicing et ad mollit pariatur. Dolore nulla aliqua Lorem ex et commodo. Sint pariatur velit irure Lorem velit mollit esse incididunt laboris fugiat aliquip enim officia. Aliqua in nisi dolore exercitation amet Lorem enim ullamco. Proident voluptate proident excepteur consequat aliquip.
           </div>
           <br/>
           {/* <div className={styles.result} id="chat">{result}</div> */}
         </form> 
    </article>
    <footer>
        Images and chat provided by OpenAI Api 
    </footer>
    </div>


  );
}

