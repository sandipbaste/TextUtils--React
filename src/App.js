import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {Routes, Route,HashRouter} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light") //wheather dark mode is anable or not
  const [alert, setAlert] = useState(null); // setAlert alert chya value la change karanyasathi

  const showAlert=(message, type)=>{ //Alert Messages la show karanyasathi
      setAlert({
        msg: message,
        type: type  // he name same pan rahu shakatya
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode=()=>{
      if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been anable", "success")
        document.title = "TextUtils - Dark Mode";
        setInterval(() => {
          document.title = "TextUtil is Amazng App"
        }, 2000);
        setInterval(() => {
          document.title = "Install TExtUtils now"
        }, 1500);
      }else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("light mode has been anable", "success")
        document.title = "TextUtils - Light mode";
      }
  }
  return (
   
    <>
     <HashRouter>
            <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3" mode={mode}>
                <Routes>
                    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
                    </Route>
                    <Route path="/about" element={<About about="about us" />}>
                    </Route>
                </Routes>
            </div>
        </HashRouter>
        
    </>
  );
}

export default App;
