const Info: React.FC = () => {
  return(
  <div className=" w-[375px] h-[300px] card px-[3px] flex flex-col">
    <div className='w-[367.5px] h-[45px] info_trasn flex  items-center mb-[12px]'>
      <a className="family text-[20px] mx-[12px] my-[12px] text-[rgba(81,188,206)]">Open To Work</a>
    </div>
    <div className="h-[200px] w-[367.5px] flex flex-row justify-between">
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[200px]"></div>
      <div className=" bg-[rgba(0,0,0,0.5)] w-[180px] h-[200px]"></div>
    </div>
  </div>
  )
}
export default Info