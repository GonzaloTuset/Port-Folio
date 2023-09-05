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
const Info: React.FC = () => {
  return(
  <div className=" w-[375px] h-[300px] card px-[3px] flex flex-col">
    <div className='w-[367.5px] h-[45px] info_trasn flex  items-center mb-[12px]'>
      <a className="family text-[20px] mx-[12px] my-[12px] text-[rgba(81,188,206)]">Open To Work</a>
    </div>
    <div className="h-[200px] w-[367.5px] flex flex-row justify-between">
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[200px] px-[4px] py-[4px] flex flex-col">
        <div className="w-[163px] h-[29px] flex items-center mx-[12px]"><a className="family text-[#ffffff]">Tech Stack</a></div>
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
        </div>
      </div>
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[200px]">

      </div>
    </div>
  </div>
  )
}
export default Info