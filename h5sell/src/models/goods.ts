import {
    Model,
    Effect,
} from 'dva-core-ts'
import { Reducer } from 'redux'
import { getGoods } from "@/services/goodsService"

export interface SellerState {
    goods: IGoodsType[]
}

interface SellerModel extends Model {
    namespace: 'goods'
    state: SellerState
    reducers: {
        getGoodsRs: Reducer<SellerState>
    }
    effects?: {
        asyncGetGoods: Effect
    }
}

const sellerModel: SellerModel = {
    namespace: 'goods',
    state: {
        goods: [],
    },
    reducers: {
        getGoodsRs(state, { payload }) {
            return {
                ...state,
                goods: payload
            }
        },
    },
    effects: {
        *asyncGetGoods({ payload }, { call, put }) {
            const goods = yield call(getGoods)
            yield put({
                type: 'getGoodsRs',
                payload: goods.data,
            })
        },
    },
}

export default sellerModel