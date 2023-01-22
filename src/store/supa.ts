import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
import { CONFIG } from 'src/config'
export const useSupaBaseStore = defineStore('supabase', () => {
  const supabaseInstance = createClient(CONFIG.VITE_SUPABASE_URL, CONFIG.VITE_SUPABASE_KEY)
  // const getRecipes = async (next?: string) => {
  //   resetRecipes()
  //   try {
  //     const res = await axios.get<IngredientsResponse>(
  //       next || prev.value || initPrev.value,
  //     )
  //     recipesList.value = res.data
  //     prev.value = next || prev.value
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return {
    supabaseInstance,
  }
})
