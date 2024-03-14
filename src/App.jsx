import { useState,useEffect } from "react";

const App = () => {
   const [typeOfColor , setTypeOfColor] = useState("HEX")
   const [color , setColor] = useState("red")

  useEffect(() => {
    if(typeOfColor === " hex") handleCreateRandomhexColor
    else handleCreateRandomrgbColor
    
  }, [typeOfColor])
  
       
   const randomColorUtility = (length) => {
     return Math.floor(Math.random() * length);
   }

  const handleCreateRandomrgbColor = () => {
    let r = randomColorUtility(256)
    let g = randomColorUtility(256)
    let b = randomColorUtility(256)

    setColor(`rgb${r},${g},${b}`)

  }

  const handleCreateRandomhexColor = () => {
    let hexcolor = "#"
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'] 
    for(let i = 0 ; i < 6 ; i++){
      hexcolor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexcolor);
  }
  
    
   

  return (
    <div className= {`w-full h-screen bg-[${color}]`}>
    <div className="flex gap-3 justify-center m-4">
      <button className={`border border-solid p-1 rounded-full hover:bg-slate-200`}
       onClick={() => setTypeOfColor("HEX")}>Create HEX Color</button>
      <button className="border border-solid p-1 rounded-full hover:bg-slate-200" 
       onClick={()=> setTypeOfColor("RGB")}>Create RGB Color</button>
      <button className="border border-solid p-1 rounded-full hover:bg-slate-200"
       onClick={() => typeOfColor === "HEX" ? handleCreateRandomhexColor() : handleCreateRandomrgbColor()}>Generate Color</button>
    </div>
    <h4 className="bg-yellow-400 border border-solid border-black font-bold text-center text-blue-900">{typeOfColor} : {color}</h4>
    </div>
  )
}

export default App;