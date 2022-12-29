export interface IngredientsResponse {
  from: number
  to: number
  count: number
  _links: IngredientsLinks | null
  hits: Hit[] | null
}

export interface IngredientsLinks {
  next: Next
}

export interface Next {
  href: string
  title: string
}

export interface Hit {
  recipe: Recipe
  _links: HitLinks
}

export interface HitLinks {
  self: Next
}

export interface Recipe {
  uri: string
  label: string
  image: string
  images: Images
  source: string
  url: string
  shareAs: string
  yield: number
  dietLabels: string[]
  healthLabels: string[]
  cautions: string[]
  ingredientLines: string[]
  ingredients: Ingredient[]
  calories: number
  totalWeight: number
  totalTime: number
  cuisineType: string[]
  mealType: string[]
  dishType: string[]
  totalNutrients: { [key: string]: Total }
  totalDaily: { [key: string]: Total }
  digest: Digest[]
}

export interface Digest {
  label: string
  tag: string
  schemaOrgTag: null | string
  total: number
  hasRDI: boolean
  daily: number
  unit: string
  sub?: Digest[]
}

export interface Images {
  THUMBNAIL: Large
  SMALL: Large
  REGULAR: Large
  LARGE?: Large
}

export interface Large {
  url: string
  width: number
  height: number
}

export interface Ingredient {
  text: string
  quantity: number
  measure: string
  food: string
  weight: number
  foodCategory: string
  foodId: string
  image: string
}

export interface Total {
  label: string
  quantity: number
  unit: string
}
