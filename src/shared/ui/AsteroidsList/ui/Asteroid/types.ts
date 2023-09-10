import type { TAsteroid, TAsteroidDistance } from "@/shared/types/comon.ts"

export type TAsteroidComponent = {
  element: TAsteroid,
  hasButton?: boolean,
  distanceAsteroid?: TAsteroidDistance
}