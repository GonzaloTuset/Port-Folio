import axios, { AxiosInstance } from 'axios';
import { useState, useEffect } from 'react';
import { zonedTimeToUtc, format } from 'date-fns-tz';
import missImage from '../assets/noSeEncuentra.png'
interface Repository {
  id: string;
  name: string;
  language: string;
  pushed_at: string;
  private: boolean;
  image: string;

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
      });

      try {
        // Realiza la solicitud a la API de GitHub para obtener repositorios
        const response = await instance.get('');
        const repos: Repository[] = response.data;
    
        // Filtra los repositorios privados
        const publicRepos = repos.filter(repo => !repo.private && repo.name !== "GonzaloTuset");
         
        // Ordena los repositorios por fecha de actualización en orden descendente
        publicRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

        // Obtén los últimos 3 repositorios actualizados
        const lastUpdatedRepos = publicRepos.slice(0, 3)
        
        setRepositories(lastUpdatedRepos);


      } catch (error) {
        console.error('Error al obtener repositorios:', error);
      }
    };

    fetchData(); // Llama a la función para cargar los repositorios cuando el componente se monta
  }, []);

  return (
    <div className=" w-[368.7px]  card flex flex-col">
      <div className=' fondo w-full h-[40px] py-[5px] px-[10px] flex items-center'><p className='family text-[16px]'>Ultimos Proyectos</p></div>

      {/*morepush.map((last) => ( 
        <div>{last.name}</div>
      ))*/}
      {/* Renderiza los últimos 3 repositorios actualizados */}
      {/*<a  href={`https://github.com/GonzaloTuset/${repo.name}`}>*/}
      {repositories.map((repo) => (
       
        <div key={repo.id} className=' mt-[20px] mx-[10px] mb-[11px] h-[155px] card flex flex-col' >
          <div className='flex flex-row  h-[85px] w-[350px] px-[8px] py-[8px]'>
            <div className='h-[69px] flex flex-col'>
            <img className='w-[168px] h-[69px]' src={` ${missImage}`} />
           
            </div>
            <div className='flex items-center h-[69px] w-[120px] pt-[10px]'>
              <h2 className='family pl-[15px] text-[20px] w-[120px]'>{repo.name}</h2>
            </div>
          </div>
          <div className='w-[330px] px-[8px] py-[8px] family  '>
            <p className='pb-[5px]'>Lenguaje: {repo.language}</p>
            <p>
            Última actualización: {format(
              zonedTimeToUtc(repo.pushed_at, 'ART'), // Reemplaza 'Etc/GMT' con la zona horaria de origen
              `HH:mm:ss dd/MM/yyyy`, // Formato de fecha y hora
              { timeZone: 'America/Argentina/Buenos_Aires' } // Zona horaria de destino (Argentina)
            )}
          </p>
          </div>
       

        </div>
        
      ))}
    </div>
   
  );
};

export default Projects;