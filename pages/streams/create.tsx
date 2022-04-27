import { NextPage } from 'next';


const Create : NextPage = () => {
    return (
        <div className='py-10 px-4 space-y-5'> 
         <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 " htmlFor='Name'>Name</label>
        <input id="Name" className=' appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500' type="text"  />

        <label className="mb-1 block text-sm font-medium text-gray-700 " htmlFor='price'>Price</label>
        <div className=' rounded-md shadow-sm  relative flex items-center'>
          <div className=' absolute left-0 pl-3 flex items-center pointer-events-none justify-center'>
            <span className='text-gray-500 text-sm'>$</span>
          </div>
          <input id="price" className=' appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500' type="text" placeholder="0.00" />
          <div className=' absolute right-0 pr-3 pointer-events-none flex items-center'>
            <span className='text-gray-500'>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 ">Description</label>
        
          <textarea className='mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300  focus:border-orange-500' rows={4} />
        
      </div>
      <button  className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Go Live
      </button>
      </div>
    )
}

export default Create