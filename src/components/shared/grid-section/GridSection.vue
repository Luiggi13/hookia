<script setup lang="ts">
import { useRecipeStore } from '../../../store/recipes'
const recipeStore = useRecipeStore()

const handleNextItems = async () => {
  if (recipeStore.recipesList._links?.next.href) recipeStore.prev = recipeStore.recipesList._links?.next.href
  await recipeStore.getTodos(recipeStore.recipesList._links?.next.href ?? '')
}
const maxStars: number = 5

</script>
<template>
  <slot v-if="recipeStore.recipesList.hits?.length">
    <div class="grid grid-cols-4 gap-4 mb-10">
      <div
        v-for="item in recipeStore.recipesList.hits"
        :key="item.recipe.label"
        class="flex flex-col justify-center items-center my-5"
      >
        <div class="rounded-lg bg-white w-full h-full text-center">
          <div class="flex flex-col h-full relative justify-between">
            <div class="flex justify-center items-center w-full relative">
              <img
                class="w-28 absolute mx-auto -top-12 m-0 bg-violet-200 rounded-full p-2"
                :src="item.recipe.images.THUMBNAIL.url"
              >
            </div>
            <div class="flex justify-center items-center w-full h-1/3 mb-3">
              <p class="text-center font-bold pt-20">
                {{ item.recipe.label }}
              </p>
            </div>
            <div class="flex flex-col justify-center items-center w-full my-3">
              <p class="bg-red-200 text-red-500 rounded-md px-2 mb-3">
                {{ item.recipe.source }}
              </p>
              <div class="flex flex-row justify-center w-full px-8">
                <div class="w-1/3">
                  <div class="h-full w-full">
                    <p class="text-xl">
                      {{ item.recipe.ingredients.length }}
                    </p>
                    <p class="text-sm text-gray-400">
                      Max
                    </p>
                  </div>
                </div>
                <div class="w-1/3">
                  <div class="h-full w-full border-right-1 border-left-1 border-gray-300">
                    <p class="text-xl">
                      {{ item.recipe.healthLabels.length }}
                    </p>
                    <p class="text-sm text-gray-400">
                      Kcal
                    </p>
                  </div>
                </div>
                <div class="w-1/3">
                  <div class="h-full w-full">
                    <p class="text-xl">
                      {{ item.recipe.mealType.length }}
                    </p>
                    <p class="text-sm text-gray-400">
                      Meat
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center w-full h-1/3">
              <div class="flex flex-row justify-center mt-3 mb-4">
                <div v-for="star in maxStars" :key="'star' + star" class="w-1/5">
                  <svg
                    v-if="star <= 4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#df0000"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#df0000"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#efefef"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#efefef"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center w-full">
              <button class="font-normal text-black focus:outline-none h-full w-full border-top-1 border-gray-300 my-4">
                Start cooking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <button
        :disabled="recipeStore.recipesList.from <= 1"
        class="flex p-5 bg-red-300 rounded-lg mr-4 disabled:bg-gray-50 disabled:text-gray-400"
        @click="handleNextItems"
      >
        Prev Page
      </button>
      <button
        v-if="recipeStore.recipesList._links?.next.href"
        class="flex p-5 bg-red-300 rounded-lg"
        @click="handleNextItems"
      >
        {{ recipeStore.recipesList._links?.next.title }}
      </button>
    </div>
  </slot>
  <p v-else>
    Loading ...
  </p>
</template>

<style scoped lang="scss">
.border-top-1 {
  border-top-width: 1px;
}

.border-bottom-1 {
  border-bottom-width: 1px;
}

.border-left-1 {
  border-left-width: 1px;
}

.border-right-1 {
  border-right-width: 1px;
}
</style>
