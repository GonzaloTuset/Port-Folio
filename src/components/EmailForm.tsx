import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.init('O8LXvzAaPoUMIe7VH');
    try {
      await emailjs.send(
        'service_vfykdrm', // Reemplaza con el ID de tu servicio en Email.js
        'template_cv7uykl', // Reemplaza con el ID de tu plantilla en Email.js
        { email }
      );

      alert('Su cuenta se borrara en breve');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      alert('Hubo un error al enviar el correo electrónico');
    }
  };
  

  return (
    <div className='pl-[100px]'>
      <h1 className='p-[10px] text-[30px]'>Ingrese su mail</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input className='text-black rounded-sm mx-[10px]'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          title="Por favor, ingresa una dirección de correo electrónico válida."
        />
        <button className='hover:border-red-600 hover:text-red-800 hover:bg-red-500 rounded bg-transparent border-2 border-[rgb(83,100,113)]' type="submit">Borrar Cuenta</button>
      </form>
    </div>
  );
};

export default EmailForm;