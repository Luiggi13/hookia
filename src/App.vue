<template>
  <div class="my-bg flex flex-col h-screen w-screen max-w-full items-center justify-center text-white relative">
    <div class="bg-overlay" />
    <a
      class="w-11/12 lg:w-6/12 h-auto z-20 flex items-center justify-center"
      href="https://www.instagram.com/hook.ia/"
      target="_blank"
      title="Hook.ia Instagram profile"
    >
      <img src="./assets/logo.png">
    </a>
    <form
      class="flex items-center justify-center flex-col z-20 md:px-10 lg:px-0 w-full"
      @submit.prevent
    >
      <!-- <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
    </div>  -->
      <div class="mb-6">
        <h1 class="text-2xl text-center w-11/12 lg:w-full">
          Do you want to participate in our next <span class="font-bold">Weekly Online Magazine</span>?
        </h1>
        <div v-if="isUserCreated" class="message bg-green-400 border-green-800 border-2 text-center text-lg text-black p-2 rounded-lg mt-6">
          {{ message }}
        </div>
        <div v-if="isError" class="message bg-red-400 border-red-800 border-2 text-center text-lg text-red-800 p-2 rounded-lg mt-6">
          {{ message }}
        </div>
      </div>
      <div class="mb-6 w-11/12 lg:w-6/12">
        <label for="ig_user" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              fill="none"
              class="w-5 h-5 text-white dark:text-white"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>
          <input
            id="ig_user"
            v-model="user"
            type="text"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-none rounded-lg bg-gray-50 focus:border-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-none"
            placeholder="@hook.ia"
            required
          >
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="addUser"
          >
            I will join
          </button>
        </div>
      </div>
    </form>
    <!-- <template v-if="recipeStore.recipesList.hits?.length">
      <AppNavigation class="h-screen mybg w-60 fixed left-0 top-0" />
      <div class="block w-full h-screen pl-60">
        <div class="col-span-10 py-3 px-10 h-screen bg-violet-200">
          <div class="h-1/3">
            <Header />
            <section class="flex flex-row md:flex-row md:items-center mt-10 px-4">
              <Subheader />
            </section>
          </div>
          <div class="h-2/4">
            <section class="flex flex-col px-4 h-full mt-10">
              <GridSection />
            </section>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <LoadingCircle />
    </template> -->
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup lang="ts">import { ref } from 'vue'
import { useSupaBaseStore } from './store/supa'

const supa = useSupaBaseStore()
const user = ref('')
const message = ref('')
const isUserCreated = ref(false)
const isError = ref(false)
const addUser = async () => {
  isError.value = false
  const dato = {
    username: containtAtSign(user.value),
  }
  const { error } = await supa.supabaseInstance
    .from('hookia')
    .insert(dato)
  if (!error) {
    user.value = ''
    isUserCreated.value = true
    message.value = 'You are added to our community'
    setTimeout(() => {
      isUserCreated.value = false
      message.value = ''
    }, 3000)
  }
  if (error) {
    if (error?.message.includes('duplicate key')) {
      isError.value = true
      message.value = 'User already added in our community'
    }
  }
}

const containtAtSign = (str: string): string => {
  return str.startsWith('@') ? str : `@${str}`
}

</script>
<style lang="scss" scoped>
.my-bg {
  background-color: black;
  background-image: url(./assets/bg_pattern-small.png);
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .63);
  filter: blur(100px);
  content: "";
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
