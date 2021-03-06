import {
    Model,
    Effect,
} from 'dva-core-ts'
import { Reducer } from 'redux'
import { getSeller } from "@/services/sellerService"

export interface SellerState {
    seller: ISellerType | {}
}

interface SellerModel extends Model {
    namespace: 'seller'
    state: SellerState
    reducers: {
        getSellerRs: Reducer<SellerState>
    }
    effects?: {
        asyncGetSeller: Effect
    }
}

const sellerModel: SellerModel = {
    namespace: 'seller',
    state: {
        seller: {},
    },
    reducers: {
        getSellerRs(state, { payload }) {
            return {
                ...state,
                seller: payload
            }
        },
    },
    effects: {
        *asyncGetSeller({ payload }, { call, put }) {
            const seller = yield call(getSeller)
            yield put({
                type: 'getSellerRs',
                payload: seller.data,
            })
        },
    },
}

export default sellerModel