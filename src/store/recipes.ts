import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { IngredientsResponse } from 'src/interfaces/api-response.interface'

export const useRecipeStore = defineStore('recipes', () => {
  const recipesList = ref({
    from: 0,
    to: 0,
    count: 0,
    _links: null,
    hits: null,
  } as IngredientsResponse)
  const prev = ref('')
  const initPrev = ref('https://api.edamam.com/api/recipes/v2?type=public&app_id=f004cdce&app_key=994b4c2f0f9c8465b4a3190966c1ff8d&imageSize=REGULAR')
  const initPrev2 = 'const https://api.edamam.com/api/recipes/v2?type=public&app_id=f004cdce&app_key=994b4c2f0f9c8465b4a3190966c1ff8d&imageSize=REGULAR'

  const resetRecipes = (): void => {
    recipesList.value = {
      from: 0,
      to: 0,
      count: 0,
      _links: null,
      hits: null,
    }
  }

  const getRecipes = async (next?: string) => {
    resetRecipes()
    try {
      const res = await axios.get<IngredientsResponse>(
        next || prev.value || initPrev.value,
      )
      recipesList.value = res.data
      prev.value = next || prev.value
    } catch (error) {
      console.error(error)
    }
  }

  return {
    prev,
    initPrev,
    initPrev2,
    recipesList,
    getRecipes,
    resetRecipes,
  }
})
