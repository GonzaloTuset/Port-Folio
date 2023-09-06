

const DownloadBoton = () => {
  const handleDownload = () => {
    // Reemplaza la URL con la URL generada por Netlify
    const pdfUrl = 'https://velvety-jelly-9a163b.netlify.app/';

    // Crea un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Cv_Gonzalo_Tuset.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  };

  return (
    <div>
      <button onClick={handleDownload}>Descargar CV</button>
    </div>
  );
};

export default DownloadBoton;