import axios, { AxiosInstance } from 'axios';
import { useState, useEffect } from 'react';

interface Repository {
  id: string;
  name: string;
  language: string;
}
const Profile: React.FC = () => {
  const accessToken = "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"
  const apiUrl = 'https://api.github.com/user/repos'
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const instance: AxiosInstance = axios.create({
        baseURL: apiUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      try {
        // Realiza la solicitud a la API de GitHub
        const response = await instance.get('');
        setRepositories(response.data); 
        console.log(response.data)// Almacena los repositorios en el estado
      } catch (error) {
        console.error('Error al obtener repositorios:', error);
      }
    };

    fetchData(); // Llama a la función para cargar los repositorios cuando el componente se monta
  }, []);

  return (
    <div>
      {/* Renderiza los repositorios */}
      {repositories.map(repo => (
        <div key={repo.id}>{repo.name}{repo.language}</div>
      ))}
    </div>
  );
};

export default Profile;