import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { IngredientsResponse } from 'src/interfaces/api-response.interface'

export const useRecipeStore = defineStore('recipe', () => {
  const recipesList = ref({
    from: 0,
    to: 0,
    count: 0,
    _links: null,
    hits: null,
  } as IngredientsResponse)
  const prev = ref('https://api.edamam.com/api/recipes/v2?type=public&app_id=f004cdce&app_key=994b4c2f0f9c8465b4a3190966c1ff8d&imageSize=REGULAR')

  const resetTodos = (): void => {
    recipesList.value = {
      from: 0,
      to: 0,
      count: 0,
      _links: null,
      hits: null,
    }
  }
  const getTodos = async (next?: string) => {
    resetTodos()
    try {
      const res = await axios.get<IngredientsResponse>(
        next || prev.value,
      )
      recipesList.value = res.data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    prev,
    recipesList,
    getTodos,
    resetTodos,
  }
})
