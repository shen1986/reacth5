import seller from './seller'
import goods from './goods'
import { DvaLoadingState } from 'dva-loading-ts'

const models = [seller, goods]

export type RootState = {
    seller: typeof seller.state
    goods: typeof goods.state
    loading: DvaLoadingState
}

export default models