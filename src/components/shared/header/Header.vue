<template>
  <header class="h-16 flex justify-between items-center px-4 py-3 bg-violet-200 text-white">
    <div class="flex-1 flex items-center">
      <div class="border-b-2 border-slate-800">
        <div class="flex w-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-black mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input class="form-input px-3 text-gray-800 bg-transparent dark:focus-visible:border-transparent focus-visible:border-transparent" type="text" placeholder="Search">
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 text-gray-400 hover:text-gray-600 mr-2 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
        />
      </svg>
      <button
        class="px-4 py-4 shadow-lg shadow-red-300 font-normal rounded-md text-white bg-red-700 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue active:bg-gray-400 ml-3"
      >
        Go to Premium
      </button>
    </div>
  </header>
</template>
