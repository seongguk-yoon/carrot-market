import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
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
    </div>
  );
};

export default Home;
