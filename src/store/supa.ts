import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

export const useSupaBaseStore = defineStore('supabase', () => {
  const supabaseInstance = createClient('https://utlbqbzipryqmkcinunf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0bGJxYnppcHJ5cW1rY2ludW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4MDExOTUsImV4cCI6MTk4NDM3NzE5NX0.IdKGj1RXUA3IA4IghdDSIs_qD7xLuAlC6ByX4OezP00')
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
