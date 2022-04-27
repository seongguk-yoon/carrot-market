import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
<<<<<<< Updated upstream
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item </span>
        <div className="flex justify-between my-2">
          <span className="text-gret-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gret-500">Tooly Table</span>
          <span className="font-semibold">$8</span>
        </div>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$27</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl   w-full mx-auto
        hover:bg-teal-500 hover:text-gray-500
        active:bg-yellow-500 focus:bg-red-500
        ">
          Cheack Out
        </button>
      </div>

      {/* pro file */}
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className=" text-white text-2xl">profile</span>
        </div>

        <div className="rounded-3xl p-5 relative -top-5 bg-white">
          <div className="flex relative  -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">$340</span>
            </div>
            <div className="w-24 h-24 bg-red-300   rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>

          <div className="relative flex flex-col -mt-10 items-center  -mb-5">
            <span className="font-medium ">Seong Guk</span>
            <span className="text-sm text-gray-500 ">Korea</span>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl py-5 px-5">
        <div className="flex mb-5 justify-between items-center ">
          <div>
            <span>⬅</span>
          </div>

          <div className="space-x-3">
            <span>⭐️ 4.8</span>
            <span className="shadow-xl p-2 rounded-md">♥️</span>
          </div>
        </div>

        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex  flex-col  ">
          <span className="font-medium mb-1.5 text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          
          <div className='flex  justify-between  items-center  mt-3 mb-8 '>
            <div className="space-x-2">
              <button className='w-5 h-5  rounded-full  focus:ring-2 ring-offset-2 ring-yellow-500 bg-yellow-500 transition' />
              <button className='w-5 h-5  rounded-full  focus:ring-2 ring-offset-2 ring-indigo-500 bg-indigo-500 transition' />
              <button className='w-5 h-5  rounded-full  focus:ring-2 ring-offset-2 ring-teal-500 bg-teal-500 transition' />      
            </div>

            <div className="flex items-center space-x-5 " >
              <button className=' bg-blue-200 rounded-lg aspect-square w-8  text-xl text-gray-500 '>-</button>
              <span>1</span>
              <button className=' bg-blue-200 rounded-lg  aspect-square w-8  text-xl text-gray-500 '>+</button>
            </div>
          </div>
        </div>

        <div className='flex  justify-between  items-center'>
          <span className=' font-medium  text-2xl '>$ 450</span>
          <button className='  bg-blue-500 text-center rounded-md p-2 px-8 text-ss text-white'> Add to cart </button>
        </div>

      </div>
=======
    <div className=' flex flex-col space-y-5 py-10'>
      {[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1].map((_, i) => (
        <div key={i} className=' flex border-b   px-4 pb-4 cursor-pointer  justify-between'>
          <div className='flex  space-x-4 '>
            <div  className='w-20 h-20  bg-gray-400 rounded-md' />
            <div className='pt-2 flex flex-col'>
              <h3 className='text-sm font-medium text-gray-900'>New iPhone 14</h3>
              <span className='text-xs text-gray-500'>Black</span>
              <span className=' font-medium mt-1 text-gray-900'>$95</span>
            </div>
          </div>
          <div className='flex  space-x-2 items-end justify-end'>
            <div className='flex  space-x-0.5 items-center text-sm text-gray-600 '>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              <span>1</span>
            </div>            
            <div className='flex  space-x-0.5 items-center text-sm text-gray-600 '>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>1</span>
            </div>
          </div>

        </div>
      ))}
      <button className='fixed bottom-24 right-5  hover:bg-orange-500 cursor-pointer transition-colors  bg-orange-400 rounded-full p-4  text-white shadow-xl  '>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
