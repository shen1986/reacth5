import {
    Model,
    Effect,
} from 'dva-core-ts'
import { Reducer } from 'redux'
import {
    getGoods,
    addCart,
    decreaseCart,
} from "@/services/goodsService"

export interface GoodsState {
    goods: IGoodsType[]
}

interface GoodsModel extends Model {
    namespace: 'goods'
    state: GoodsState
    reducers: {
        getGoodsRs: Reducer<GoodsState>
    }
    effects?: {
        asyncGetGoods: Effect
        asyncAddCart: Effect
        asyncDecreaseCart: Effect
    }
}

const goodsModel: GoodsModel = {
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
        *asyncAddCart({ payload }, { call, put }) {
            const goods = yield call(addCart, payload.goodName, payload.foodName)
            yield put({
                type: 'getGoodsRs',
                payload: goods.data
            })
        },
        *asyncDecreaseCart({ payload }, { call, put }) {
            const goods = yield call(decreaseCart, payload.goodName, payload.foodName)
            yield put({
                type: 'getGoodsRs',
                payload: goods.data
            })
        }
    },
}

export default goodsModel