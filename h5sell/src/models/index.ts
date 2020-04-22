import search from './search'
import { DvaLoadingState } from 'dva-loading-ts'

const models = [search]

export type RootState = {
    search: typeof search.state,
    loading: DvaLoadingState,
}

export default models