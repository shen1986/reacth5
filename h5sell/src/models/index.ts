import seller from './seller'
import { DvaLoadingState } from 'dva-loading-ts'

const models = [seller]

export type RootState = {
    seller: typeof seller.state
    loading: DvaLoadingState
}

export default models