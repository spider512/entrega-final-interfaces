import Header from "./components/Header";
import Footer from "./components/Footer";
import ImagenRandom from "./components/ImagenRandom";
import { Fragment,useState } from "react";
import "./App.css"

function App() {

  const [gif,setGif] = useState({})

  /* const [titulo,setTitulo] = useState({}) */



  //Buscar el Gif en la API



  const buscaGif = async () => {

    try {       

      const api = await fetch('https://api.giphy.com/v1/gifs/random?api_key=4bJpyE6nA2yJagKzCPLf7SPwG4WJb3KH')

      const gifUrl = await api.json()

      setGif(gifUrl.data.images.downsized_large.url)
      /* setTitulo(gifUrl.data.title) */
      

    }
    catch (error) {
      console.log(error)

    }

  }



  return (
    <Fragment>
      <Header/>

      <div class="row">
      
        <div id="contenedorImagen" class="col" >
        
         <ImagenRandom  gif={gif} />
        {/* <h5>{titulo}</h5> */}

        </div>
          
        <div class= "col" id="buscar">
           <button class="btn btn-outline-success w100 p-5" type="submit" onClick={buscaGif} >Traer GIF</button>
        </div>



      </div>





      <Footer/>
      

    </Fragment>

  );
}

export default App;
