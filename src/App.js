
import './style.css';

function App() {
  return (
    <div className="App">
        <div style={{borderStyle:"solid",borderSize:'1px',borderColor:"noir",maxWidth:'100vw'}}>
          <h1 className="title red">Mahdi Khayat</h1>
          <br/>
          <img className="image1" src={"/1.png"} alt="1" />
          <br/>
          <img className="image2" src={"/2.jpg"} alt="2" />
        </div>
        <video className="video1" controls>
          <source src={"/video.mp4"} type="video/mp4"/>
        </video>
        
    </div>    
    
  );
}

export default App;
