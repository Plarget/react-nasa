export type TUseThrottle = (callback: () => void, timeout?: number) => () => void