import Head from "next/head";
import { use, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [messageInput, setMessageInput] = useState("");
  const [result, setResult] = useState("");


  async function onSubmit(event) {
    setResult(chat.innerText+"User: "+messageInput+"\n");
    // console.log(event);
    setMessageInput(result +"\n"+ thePrompt.value);
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

      setResult(chat.innerText+"\n Bot: " + data.result);
      setMessageInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div className={styles.main}>
      <header>
        <h1>Create-a-friend</h1>
        <nav>
            <a>a</a>
            <a>b</a>
            <a>c</a>
        </nav>
    </header>
    <article>
        
    </article>
    <article>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg" alt="ai generated art" id="generatedImg"/>
        
        <form onSubmit={onSubmit}>
           <input
             id="thePrompt"
             type="text"
             name="message"
             placeholder="Message the bot"
             value={messageInput}
             onChange={(e) => setMessageInput(e.target.value)}
           />
           <input type="submit" value="Generate names"/>
           <br/>
           <textarea id="chat" className={styles.result} readOnly value={result}/>
           <br/>
           {/* <div className={styles.result} id="chat">{result}</div> */}
         </form> 
    </article>
    <footer>
        Images and chat provided by OpenAI Api 
    </footer>
    </div>




    
    // <div>
    //   <Head>
    //     <title>OpenAI Quickstart</title>
    //     <link rel="icon" href="/dog.png" />
    //   </Head>

    //   <main className={styles.main}>
    //     <img src="/dog.png" className={styles.icon} />
    //     <h3>Name my pet</h3>
    //     <form onSubmit={onSubmit}>
    //       <input
    //         type="text"
    //         name="animal"
    //         placeholder="Enter an animal"
    //         value={animalInput}
    //         onChange={(e) => setAnimalInput(e.target.value)}
    //       />
    //       <input type="submit" value="Generate names" />
    //     </form>
    //     <div className={styles.result}>{result}</div>
    //   </main>
    // </div>}
  );
}

