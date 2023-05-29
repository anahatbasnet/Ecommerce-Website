import {
  ShimmerButton,
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from 'react-shimmer-effects'

const Productshimmer = () => {
  return (
    <div className='h-[27rem] w-[20rem] m-5'>
      <ShimmerThumbnail height={170} width={'auto'} />
      
      <ShimmerTitle line={3} center />
      
      <div className='flex justify-evenly '>
        <div className='w-[30%] flex flex-col '>
          <ShimmerText line={2} />
         
        </div>
        <div className='w-25% flex justify-center'>
          <ShimmerButton size='sm' />
        </div>
        <div className='w-[30%] flex flex-col'>
          <ShimmerText line={2} />
         
        </div>
        
      </div>
    </div>
  )
}

export default Productshimmer
