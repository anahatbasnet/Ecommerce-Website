
export default function CarouselItem({ item }) {
  return (
    <div className='carousel-item max-w-full h-[60vh] relative'>
      <div className='h-[70%] w-full relative'>
        <img className='object-cover h-full w-full' src={item.image} alt='' />
        <div className='carousel-navigation'>
          <button className='carousel-prev'>
           
          </button>
          <button className='carousel-next'>
           
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 p-4 bg-gray-900 text-white w-full'>
        <p className='text-lg'>{item.description}</p>
      </div>
    </div>
  )
}
