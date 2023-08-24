import axios, { AxiosInstance } from 'axios';
import { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
}
const Profile: React.FC = () => {
  const accessToken = import.meta.env.VITE_TOKEN as string;
  const apiUrl = 'https://api.github.com/user/repos';
  const [repositories, setRepositories] = useState<Repository[]>([]); // Cambia "any[]" por el tipo correcto

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
        setRepositories(response.data); // Almacena los repositorios en el estado
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
        <div key={repo.name}>{repo.name}</div>
      ))}
    </div>
  );
};

export default Profile;