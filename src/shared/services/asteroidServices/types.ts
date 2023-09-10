import type { TAsteroid } from "@/shared/types/comon.ts"

export type TGetAsteroids= {
  near_earth_objects: {
    [key: string]: Array<TAsteroid>
  },
  element_count: number
}

export type TAsteroidServices = {
  getAsteroids: (date: string) => Promise<TGetAsteroids>,
  getAsteroid: (id: string | undefined) => Promise<TAsteroid>
}