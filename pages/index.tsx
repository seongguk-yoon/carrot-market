import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div 
       className='bg-white p-6 rounded-3xl shadow-xl'>
        <span className="font-semibold text-3xl">Select Item </span>
        <div className='flex justify-between my-2'> 
          <span className='text-gret-500'>Gray Chair</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between my-2'> 
          <span className='text-gret-500'>Tooly Table</span>
          <span className='font-semibold'>$8</span>
        </div>

        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'> 
          <span>Total</span>
          <span className='font-semibold'>$27</span>
        </div>
        <div className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto'>
          Cheack Out
           </div>
        
        
      </div>  
      <div className='bg-white p-10 rounded-2xl mb-10 shadow'></div>  
      <div className='bg-white p-10 rounded-2xl mb-10 shadow'></div>  
      <div className='bg-white p-10 rounded-2xl mb-10 shadow'></div>  

    </div>

   
)
}

export default Home; 
