import type { TGetAverageNumber } from "./types.ts"

const getAverageNumber: TGetAverageNumber = (array) => {
  const isObject = typeof array === "object" && !Array.isArray(array) && array !== null
  const arrayNumber: Array<number> = isObject ? Object.values(array) : [...array]

  return arrayNumber.reduce((acc, element) => acc + element, 0) / arrayNumber.length
}

export default getAverageNumber