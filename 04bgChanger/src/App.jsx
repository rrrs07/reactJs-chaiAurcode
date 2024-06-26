import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {/* Buttons

          onClick event to change the color of the background 
          it demands call back function to be passed otherwise without it no parameter would be passed into it 
          
          */}
          
          <button onClick={() => setColor("red")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button onClick={() => setColor("green")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button onClick={() => setColor("blue")}
           className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button onClick={() => setColor("yellow")}
           className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button onClick={() => setColor("purple")}
           className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>
          <button onClick={() => setColor("olive")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >Brown</button>
        </div>
      </div>
     </div>
    
  )
}

export default App
