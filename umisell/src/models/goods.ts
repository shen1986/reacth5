import { GlobalState } from '@/common/types/type';
import { DvaModelBuilder } from 'dva-model-creator';
import { asyncGetGoods, getGoodsRs } from '@/actions/goods';
import { getGoods } from '@/services/goodsService'

const initState: GlobalState['goods'] = {
    goods: [],
};

const builder = new DvaModelBuilder(initState, 'goods')
    .case(getGoodsRs, ( state, { goods }: any ) => {
        return {
            ...state,
            goods
        }
    })
    .takeEvery(getGoodsRs, function*(payload, { call, put }) {
        const result = yield call(getGoods);
        const goods: IGoodsType = { seller: result.data } as IGoodsType;
        yield put({ type: 'getSellerRs', payload: goods });
    });

export default builder.build();
export const actions = {
    asyncGetGoods,
    getGoodsRs,
};
