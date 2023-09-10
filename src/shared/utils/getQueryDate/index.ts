import type { TGetQueryDate } from "./types.ts"

const getQueryDate: TGetQueryDate = (date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return [year,formattedMonth,formattedDay].join("-")
}

export default getQueryDate