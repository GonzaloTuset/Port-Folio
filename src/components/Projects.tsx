import axios, { AxiosInstance } from 'axios'
import { useState, useEffect } from 'react'
import { zonedTimeToUtc, format } from 'date-fns-tz'
import missImage from '../assets/noSeEncuentra.png'
import goDeploy from '../assets/go-page.svg'

interface Repository {
  id: string
  name: string
  language: string
  pushed_at: string
  private: boolean
  image: string
  homepage:string
}

const Projects: React.FC = () => {
  const accessToken = import.meta.env.VITE_TOKEN
  const apiUrl = 'https://api.github.com/user/repos'
  const [repositories, setRepositories] = useState<Repository[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const instance: AxiosInstance = axios.create({
        baseURL: apiUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      })

      try {
        // Realiza la solicitud a la API de GitHub para obtener repositorios
        const response = await instance.get('')
        const repos: Repository[] = response.data
        console.log(repos)

        // Filtra los repositorios privados
        const publicRepos = repos.filter(repo => !repo.private && repo.name !== "GonzaloTuset")

        // Ordena los repositorios por fecha de actualización en orden descendente
        publicRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())

        // Obtén los últimos 3 repositorios actualizados
        const lastUpdatedRepos = publicRepos.slice(0, 3)
        setRepositories(lastUpdatedRepos)


      } catch (error) {
        console.error('Error al obtener repositorios:', error)
      }
    }
    fetchData();// Llama a la función para cargar los repositorios cuando el componente se monta
  }, [])


  return (
    <div className="  ml-[3px] mr-[3px]  text-white card flex flex-col md:w-[652px]">
      <div className=' fondo w-full h-[40px] py-[5px] px-[10px] flex items-center'><p className='family text-[16px]'>Ultimos Proyectos</p></div>

      {/*morepush.map((last) => ( 
        <div>{last.name}</div>
      ))*/}
      {/* Renderiza los últimos 3 repositorios actualizados */}
      {/*<a  href={`https://github.com/GonzaloTuset/${repo.name}`}>*/}
      {repositories.map((repo) => (
        
        <div key={repo.id} className=' mt-[20px] mx-[10px] mb-[11px] h-[155px] card flex flex-col md:flex-row' >
          <div className='flex flex-row  h-[85px] w-full px-[8px] py-[8px] md:justify-between md:w-[400px]'>
            <div className='h-[69px] flex flex-col'>
              <img className='w-[168px] h-[69px]' src={repo.name === "Port-Folio" ? `https://github.com/GonzaloTuset/${repo.name}/assets/110003160/7d5d1136-5c1f-4791-97f0-1a14bbef2d79`
              : 
              repo.name === "Google-Form" ? `https://github.com/GonzaloTuset/${repo.name}/assets/110003160/f6eefcbc-884e-444b-bf79-8f58a4ccf33b` 
              :
              repo.name === "Ari-page" ?  `https://github.com/GonzaloTuset/${repo.name}/assets/110003160/eaf06809-d987-40be-9b8a-3795be8d1cca` :  missImage     
            }
 />
            </div>
            <div className='flex items-center h-[69px] w-[120px] pt-[10px] '>
              <h2 className='family pl-[15px] text-[20px] w-[120px]  md:pl-[0px]'>{repo.name}</h2>
            </div>
            <a className='w-[50px] flex  justify-center md:hidden pl-[10px]'  href={repo.homepage}>
              <div className='bg-white rounded-full h-[35px] w-[35px] flex items-center justify-center '>
              <img className='h-[20px] pl-[3px]' src={goDeploy}/>
              </div>
            </a>
          </div>
          <div className='w-[330px] px-[8px] py-[8px] family md:flex md:flex-col md:justify-end md:items-end  '>
              <a className='hidden md:flex md:h-[86px]'  href={repo.homepage}>
              <div className='bg-white rounded-full h-[35px] w-[35px] flex items-center justify-center '>
              <img className='h-[20px] pl-[3px]' src={goDeploy}/>
              </div>
            </a>
            <p className='text-[#969696] pb-[5px]'>Hecho en: {repo.language}</p>
            <p className='text-[#969696]'>
              Última actualización: {format(
                zonedTimeToUtc(repo.pushed_at, 'Etc/GMT'),
                `dd/MM/yyyy`, // Formato de fecha y hora
                { timeZone: 'America/Argentina/Buenos_Aires' } // Zona horaria de destino (Argentina)
              )}
            </p>
          </div>


        </div>
      ))}
    </div>

  )
}

export default Projects