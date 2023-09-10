import { TUseThrottle } from "./types.ts"

const useThrottle: TUseThrottle = (callback,timeout = 250) => {
  let timer: ReturnType<typeof setTimeout> | null = null

  return () => {
    if (timer) return

    timer = setTimeout(() => {
      callback()
      if (timer) {
        clearTimeout(timer)
      }
      timer = null
    }, timeout)
  }
}

export default useThrottle