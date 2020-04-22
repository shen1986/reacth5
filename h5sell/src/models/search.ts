import {
    Model, Effect } from 'dva-core-ts'
import { Reducer } from 'redux'

export interface SearchState {
   searchList : any[]
}

interface SearchModel extends Model {
    namespace: 'search'
    state: SearchState
    reducers: {
        getSearchListRs: Reducer<SearchState>
    }
    effects?: {
        asyncGetSearchList: Effect
    }
}

const data = [
    {
        id: 1,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 2,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 3,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 4,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 5,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 6,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    }
]

function delay(timeout: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, timeout)
    })
}


const searchModel: SearchModel = {
    namespace: 'search',
    state: {
        searchList:[]
    },
    reducers: {
        getSearchListRs(state, {payload}){
            return payload
        }
    },
    effects: {
        *asyncGetSearchList({payload},{call, put}) {
            const searchList = yield call(delay, 3000)
            yield put({
                type: "getSearchListRs",
                payload: {
                    searchList
                }
            })
        }
    }
}

export default searchModel