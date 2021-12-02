import Header from "./components/Header";
import Footer from "./components/Footer";
import ImagenRandom from "./components/ImagenRandom";
import { Fragment,useState } from "react";
import "./App.css"

function App() {

  const [gif,setGif] = useState([]);
  



//Buscar el Gif en la API
  const buscaGif = async () => {

    try {       

      const api = await fetch('https://api.giphy.com/v1/gifs/random?api_key=4bJpyE6nA2yJagKzCPLf7SPwG4WJb3KH')

      const gifUrl = await api.json()
      
      setGif(gifUrl.data.images.downsized_large.url);
      
           

    }
    catch (error) {
      console.log(error)

    }

  }



  return (
    <Fragment>
      <Header/>

      <div className="row responsi">

      <div className= "col " id="buscar">
           <button className="btn btn-outline-success w100 p-3" type="submit" style={{fontSize:25}} onClick={buscaGif} >Traer GIF</button>
        </div>


        <div className="col img-fluid" id="contenedorImagen"  alt="Responsive image" >
        
         <ImagenRandom  
          gif = {gif}
         />
    
        </div>
          

      </div>
      <Footer/>
      
    </Fragment>

  );
}

export default App;
