
import { useState } from 'react';
import './App.css'
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
// import TextForm from './Components/TextForm';

function App() {
  const [mode,setmode]=useState('light')
  const [alert,alertset]=useState(null)

  const alertSetmeth=(message, type)=>{
    alertset({
              msg: message,
              type:type,
    })
    setTimeout(() => {
      alertset(null)
    }, 1500);
  }
  const toglemode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
      alertSetmeth("Dark mode enabled","Succes");

    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white  ';
      alertSetmeth("Light  mode enabled","Succes");
    }

  };
  return (
 <>
 {/* <BrowserRouter> */}
<Navbar  title="MyTitle" mode={mode} toglemode={toglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <TextForm heading="Enter text to analyse"/> */}

	{/* <Routes> */}
  {/* <Route path="/about" element={<About />}></Route> */}
	{/* <Route path="/" element={<TextForm/>}/> */}
	{/* </Routes> */}

<TextForm alertSetmeth={alertSetmeth} heading='Enter text to Analyse'  mode={mode}/>
{/* <About/>  */}
</div>
{/* // </BrowserRouter> */}
 </>
  );
}

export default App;
