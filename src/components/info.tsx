import react from '../assets/react.svg'
import javascript from '../assets/JavaScript-logo.png'
import tailwind from '../assets/tailwind.jpg'
import typescript from '../assets/typescript.png'
import html from '../assets/html.svg'
import css from '../assets/cssRecortado.png'
import ReactRouter from '../assets/reactRouter.png'
import git from '../assets/git.png'
import github from '../assets/githubmejor.png'
import mongo from '../assets/mongodb.svg'
import postgre from '../assets/Postgresql_elephant.svg.png'
import vite from '../assets/Vitejs-logo.svg.png'
import figma from '../assets/figma.png'
import trello from '../assets/trello-v2.svg'
import LinkedIn from '../assets/LinkedIn.svg'


const Info: React.FC = () => {
  return(
  <div className=" w-[375px] h-[410px] card px-[3px] flex flex-col">
    <div className='w-[367.5px] h-[45px] info_trasn flex  items-center mb-[12px]'>
      <a className="family text-[20px] mx-[12px] my-[12px] text-[rgba(81,188,206)]">Open To Work</a>
    </div>
    
    <div className="h-[380px] w-[367.5px] flex flex-row justify-between">
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[340px] px-[4px] py-[4px] flex flex-col">
        <div className="w-[163px] h-[29px] flex items-center mx-[12px] my-[12px]"><a className="family text-[#ffffff]">Tech Stack</a></div>
        <div className=' grid gap-4 grid-cols-3 grid-rows-4'>
          <img className='w-[10xp] h-[40px] ' src={react}/>
          <img className='w-[10xp] h-[40px] rounded-sm' src={javascript}/>
          <img className='w-[10xp] h-[40px] rounded-sm' src={tailwind}/>
          <img className='w-[10xp] h-[40px] ' src={typescript}/>
          <img className='w-[10xp] h-[40px] rounded-sm' src={html}/>
          <img className='h-[42px] rounded-sm' src={css}/>
          <img className='h-[42px] rounded-sm' src={ReactRouter}/>
          <img className='h-[40px] rounded-sm' src={git}/>
          <img className='h-[42px] rounded-sm' src={github}/>
          <img className='h-[42px] rounded-sm' src={mongo}/>
          <img className='h-[42px] rounded-sm' src={postgre}/>
          <img className='h-[42px] rounded-sm' src={vite}/>
          <img className='h-[42px] rounded-sm' src={figma}/>
          <img className='h-[42px] ' src={trello}/>
        </div>
      </div>
      <div className='flex flex-col '>
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[135px] px-[4px] py-[4px] flex flex-col mb-[4px]">
        <div className="w-[163px] h-[29px] flex items-center mx-[12px] my-[12px]"><a className="family text-[#ffffff]">Mis redes</a></div>
         <div className=' flex flex-row items-center '>
          <a href='https://www.linkedin.com/in/gonzalo-tuset-a6116b202/'>
            <img className='h-[60px]' src={LinkedIn}alt='linkedIn_link'/>
          </a>
          <a href='https://github.com/GonzaloTuset'>
            <img className='h-[60px]' src={github} alt='Github_link'/>
          </a>
         </div>
      </div>
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[100px] px-[4px] py-[4px] flex flex-col mb-[4px]">
      <a className="btn btn-dark bg-black border" download="Curriculum_Gonzalo_Tuset(1).pdf" href="https://drive.google.com/file/d/1TvyoAVDH13o1fL2tIDV09sDHk9jPtsbw/view?usp=sharing">Descargar CV</a>
      </div>
      </div>
    </div>
  </div>
  )
}
export default Info