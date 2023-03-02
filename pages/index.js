import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
//
  return (
    <div>
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
             type="text"
             name="animal"
             placeholder="Enter an animal"
             value={animalInput}
             onChange={(e) => setAnimalInput(e.target.value)}
           />
           <input type="submit" value="Generate names" />
           <div className={styles.result}>{result}</div>
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
