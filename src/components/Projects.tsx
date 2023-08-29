import axios, { AxiosInstance } from 'axios';
import { useState, useEffect } from 'react';

interface Repository {
  id: string;
  name: string;
  language: string;
  pushed_at: string;
  private: boolean;
}
const Profile: React.FC = () => {   
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
        setRepositories(response.data)
        console.log(repositories)
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
    <div>
      {/* Renderiza los últimos 3 repositorios actualizados */}
      {repositories.map((repo) => (
        <div key={repo.id}>
          <h2>{repo.name}</h2>
          <p>Lenguaje: {repo.language}</p>
          <p>Fecha de última actualización: {repo.pushed_at}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;