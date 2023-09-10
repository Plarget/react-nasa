import { TAsteroid, TAsteroidDistance } from "@/shared/types/comon.ts"

export type TAsteroidsList = {
  list: Array<TAsteroid>,
  hasButton?: boolean,
  distanceAsteroid?: TAsteroidDistance
}