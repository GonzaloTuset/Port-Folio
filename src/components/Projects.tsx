import axios, { AxiosInstance } from 'axios';
import { useState, useEffect } from 'react';
import { zonedTimeToUtc, format } from 'date-fns-tz';
interface Repository {
  id: string;
  name: string;
  language: string;
  pushed_at: string;
  private: boolean;
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
        const publicRepos = repos.filter(repo => !repo.private);

        // Ordena los repositorios por fecha de actualización en orden descendente
        publicRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

        // Obtén los últimos 3 repositorios actualizados
        const lastUpdatedRepos = publicRepos.slice(0, 3);
        setRepositories(lastUpdatedRepos);
        
      } catch (error) {
        console.error('Error al obtener repositorios:', error);
      }
    };

    fetchData(); // Llama a la función para cargar los repositorios cuando el componente se monta
  }, []);

  return (
    <div className=" w-[374px] h-[350px] pl-[8px] pr-[8px] pt-[8px]  ">
      {/* Renderiza los últimos 3 repositorios actualizados */}
      {repositories.map((repo) => (
        <div key={repo.id}>
          <h2>{repo.name}</h2>
          <p>Lenguaje: {repo.language}</p>
          <p>
            Fecha de última actualización: {format(
              zonedTimeToUtc(repo.pushed_at, 'Etc/GMT'), // Reemplaza 'Etc/GMT' con la zona horaria de origen
              'dd/MM/yyyy HH:mm:ss', // Formato de fecha y hora
              { timeZone: 'America/Argentina/Buenos_Aires' } // Zona horaria de destino (Argentina)
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;