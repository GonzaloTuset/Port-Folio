import React, { useState } from 'react'
import { useEffect } from 'react'
import emailjs from 'emailjs-com'
import perfil from '../assets/Perfil.jpg'

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  useEffect(() => {
    const textarea = document.getElementById('message') as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Restaura la altura a automático para calcular correctamente la nueva altura
    textarea.style.height = `${textarea.scrollHeight}px`; // Establece la altura según el contenido
  }, [message])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.init('P_4HODGZvyW6Ik2t1');
    emailjs.send('service_cunkggo', 'template_dxrxi76', {
      from_name: email,
      to_name: 'Gonzalo',
      message: message,
    })
      .then((response) => {
        console.log('Correo electrónico enviado con éxito', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico', error);
      });
  };

  return (
    <div className='family  px-[3px]'>
     <form onSubmit={handleSubmit}>
      <div className='text-[14px] h-[29px] tranparent bg-[#0000004D] text-[#969696] flex flex-row justify-center justify-evenly items-center mt-[50px]'>
      <h2 className='text-[20px]'>¡Trabajemos juntos!</h2>
      
     
        <div>
          <input
            className='rounded-sm bg-[#00000080] pl-[3px] '
            placeholder="Tu Mail"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
        <div className='flex flex-row justify-center justify-around items-center px-[8px] py-[8px]'>
        <div className='w-[38px] h-[38px] border-cyan-300 border-2 mr-[8px]'>
        <img className='w-[38px] h-[34px]' src={perfil}></img>
      </div>
          <textarea
            className='rounded-sm family text-[#969696] bg-[#00000080] w-[307px] resize-none h-[38px] flex'
            placeholder="mensaje"
            id="message"
            name="message"
            required
            value={message}
            onChange={handleTextareaChange}  
          />
        </div>
        <div className='flex flex-row-reverse '>
        <button className='bg-[#708d05] rounded-sm flex items-center shadow-md transform transition-transform hover:shadow-lg' type="submit">Enviar</button>
        </div>      
      </form>
    </div>
  );
};

export default ContactForm
