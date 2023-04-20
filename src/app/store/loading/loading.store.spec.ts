import { createAction } from "@ngrx/store"
import { LoadingState } from "./loading-state"
import { hide, show } from "./loading.actions"
import { loadingReducer } from "./loading.reducers"

describe('Loading store', () => {
    it('should show', () => {
        const initialState: LoadingState = {show: false}
        const newState = loadingReducer(initialState, show())

        expect(newState).toEqual({show: true})
    })

    it('should hide', () => {
        const initialState: LoadingState = {show: true}
        const newState = loadingReducer(initialState, hide())

        expect(newState).toEqual({show: false})
    })

    it('should keep the state if unknown action', () => {
        const initialState: LoadingState = {show: true}
        const action = createAction("UNKNOWN")
        const newState = loadingReducer(initialState, action())

        expect(newState).toEqual({show: true})
    })
})