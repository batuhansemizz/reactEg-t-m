import "./App.css";

function App() {

  let isimler = ["ahmet", "mehmet", "ismail", "erdem"];

  return (
    <div>
        {isimler.map((isim)=>{
           return <p>{isim}</p>
        })}
    </div>
  );       
}

export default App;
