import type { TComponentFn } from "./types.ts"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient: QueryClient = new QueryClient()
export const withQuery = (component: TComponentFn) => () => {
  return (
    <QueryClientProvider client={queryClient}>
      {component()}
    </QueryClientProvider>
  )
}