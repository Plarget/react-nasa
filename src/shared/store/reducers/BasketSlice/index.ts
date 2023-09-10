import type { TBasketSlice } from "./types"
import type { TAsteroid } from "@/shared/types/comon.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TBasketSlice = []

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TAsteroid>) {
      const item = action.payload

      if (state.find((element) => element.id === item.id)) {
        const filteredState = state.filter((element) => {
          return element.id !== item.id
        })
        return [...filteredState]
      }
      return [item, ...state]
    },
    removeAllItems() {
      return []
    }
  },
})

export const {addItem, removeAllItems} = basketSlice.actions
export default basketSlice.reducer