import { GlobalState } from '@/common/types/type';
import { DvaModelBuilder } from 'dva-model-creator';
import { asyncGetSeller, getSellerRs } from '@/actions/seller';
import { getSeller } from '@/services/sellerService'

const initState: GlobalState['seller'] = {
    seller: {},
};

const builder = new DvaModelBuilder(initState, 'seller')
    .case(getSellerRs, ( state, { seller }: any ) => {
        return {
            ...state,
            seller
        }
    })
    .takeEvery(asyncGetSeller, function*(payload, { call, put }) {
        const result = yield call(getSeller);
        const seller: ISellerType = { seller: result.data } as ISellerType;
        yield put({ type: 'getSellerRs', payload: seller });
    });

export default builder.build();
export const actions = {
    asyncGetSeller,
    getSellerRs,
};
