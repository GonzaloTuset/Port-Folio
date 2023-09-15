import perfil from '../assets/Perfil.jpg'

const Profile: React.FC = () => {
  return (
    <div className="  h-[400px] pl-[8px] pr-[8px] pt-[8px] md:w-[976px] ">
      <div className='pl-[18px] pb-[18px]'>
        <div className='mt-[6px]'>
          <span className='text-white text-2xl text-ellipsis family'>Gonzalo Tuset</span>
        </div>
        <div className='flex flex-row family pt-[4px]'>
          <bdi className='text-white mr-[10px] text-sm text-ellipsis'>Full Stack Web Developer</bdi>
          <div className='flex items-center'>
            <img src="https://community.cloudflare.steamstatic.com/public/images/countryflags/ar.gif" />
          </div>
          <p className='text-white text-ellipsis text-sm ml-[5px]'>Argentina</p>
        </div>
      </div>
      <div className='flex flex-row h-[130px] w-[351px]'>
        <div className='w-[123px] h-[112px] border-cyan-300 border-2'>
          <img src={perfil}></img>
        </div>
        <div className=' flex flex-col h-[30x] w-[200px] pl-[10px]'>
          <div className='text-white family flex flex-row h-[30px] items-center mb-[13px]'>
            <p>EDAD</p>
            <div className='border-2 w-[32px] h-[32px] border-red-600 rounded-full ml-[10px]  flex justify-center items-center'>
              <p >23</p>
            </div>
          </div>
          <div className=' w-[206px] h-[70px] px-2 py-2 rounded tranparent flex flex-col justify-center '>
            <p className='text-white flex mt-[1px]'>Intereses</p>
            <p className='text-white family text-[12px] mb-[6px]'>Programar, trabajar en equipo, adquirir nuevos conocimientos y estar en constante aprendizaje.</p>
          </div>
        </div>
      </div>
      <div className='family text-white text-[14px] flex flex-col justify-around'>
        <p className='p-[2px]'>hola soy gonzalo 😊!</p>
        <p className='p-[2px]'>Soy un Desarrollador Full-stack con experiencia en Desarrollo web, me especializo en React, javascript, Typescript, TailwindCSS, MongoDB y MySQL.</p>
        <p className='p-[2px]'>Me encuentro ansioso por seguir creciendo, de poder formar parte de un equipo y enfrentarme a nuevos retos para poder desarrollar y seguir nutriendo mis habilidades como Programador.</p>
      </div>

    </div>
  )
}
export default Profile