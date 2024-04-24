import Bs from '../assets/icons/Boostrap.svg'
import css from '../assets/icons/css.svg'
import git from '../assets/icons/github.svg'
import html from '../assets/icons/html.svg'
import js from '../assets/icons/js.svg'
import rjs from '../assets/icons/react.svg'
import sf from '../assets/icons/salesforce.svg'
import twd from '../assets/icons/tailwind.svg'


export const Skills = () => {
  return (
    <section className=" container mx-auto my-40 text-center cursor-pointer">
    <h2 className="text-3xl text-stone-100 text-center py-6">Skills</h2>
     <div className="flex h-[120px] py-4 px-auto justify-between">
       
        <img  className= "bg-violet-700 rounded"  src={Bs} alt="boostrap"/>
        <img className= "bg-orange-600 rounded"  src={css} alt="css"/>
        <img className= "bg-black rounded"  src={git} alt="github"/>
        <img className= "bg-cyan-600 rounded"  src={rjs} alt="reactJs"/>
        <img className= "bg-blue-600 rounded"  src={html} alt="html"/>
        <img className= "bg-yellow-600 rounded"  src={ js} alt="javascript"/>
        <img className= "bg-blue-500 rounded"  src={sf} alt="salesforce"/>
        <img className= "bg-teal-700 rounded"  src={twd} alt="tailwind"/>

     </div>
     </section>
  )
}
