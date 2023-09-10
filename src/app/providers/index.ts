import type { TWithProviders } from "./types.ts"
import compose from "compose-function"
import { withRouter } from "./withRouter"
import { withQuery } from "./withQuery"
import { withStore } from "./withStore.tsx"

export const withProviders: TWithProviders = compose(withRouter, withQuery, withStore)