import perfil from '../assets/Perfil.jpg'
const Profile: React.FC = () => {
  return(
    <div className="bg-black w-[374px] h-[350px]">
      <div><span className='text-white text-2xl/[54px]'>Gonzalo Tuset</span></div>
      <div className='flex flex-row'><bdi className='text-white'>Full Stack Web Developer</bdi><div className='flex items-center'><img src="https://community.cloudflare.steamstatic.com/public/images/countryflags/ar.gif"/></div><p className='text-white'>Argentina</p></div>
      <div className='w-[123px] border-cyan-300 border-2'>
        <img src={perfil}></img>
      </div>
    </div>
  )
}
export default Profile