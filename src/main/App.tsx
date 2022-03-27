import React from 'react';
import '../theme/global.css';
import Logo from "../assets/images/logo.png"

function App() {
  return (
    <main>
      <header>
        <div style={{ width:'100vw', height:350, backgroundColor:"red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"flex-end"}}>
          <div style={{ width:"50%", height:250, background:`url(${Logo}) no-repeat`, backgroundSize:"contain", backgroundPositionY:-80}}/>
          <div>
          <h1>The Rick and Morty API</h1>
          <h1>#FFFFFF</h1>
          </div>
        </div>
        <nav>
          {/* <div><img src={Logo} /></div> */}
        </nav>
      </header>
    </main>
  );
}

export default App;
