


export const Projects = ({imagen, titulo, texto}) => {
  return (
    <>
    
   <article className="relative cursor-pointer  h-[420px] w-[800px] container mx-auto my-6  scale-90 bg-stone-800  opacity-40 rounded-md hover:opacity-100 hover:scale-100 hover:bg-amber-600 grayscale hover:grayscale-0  ">
   
        <img  className="px-9 py-3" src={imagen} alt="Mundo Cafe"/>
    
    <div className="">
        <h2 className="text-white  font-mono text-2xl px-4 pb-3 " >{titulo}</h2>
        <p  className="text-white  font-mono text-xl px-4 " >{texto}</p>
    </div>
    {/*<div>
    <button  className="absolute -bottom-3 w-[100px] h-10  mx-[150px] shadow-stone-800  shadow-lg  bg-stone-300 rounded-lg font-mono  text-2xl  text-stone-6000  "  >visit</button>

    </div>*/}
   </article>
   </>
  )
}
