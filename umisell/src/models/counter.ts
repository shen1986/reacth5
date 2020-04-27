import { GlobalState } from '@/common/type';
import { DvaModelBuilder } from 'dva-model-creator';
import {
    add,
    minus,
    asyncAdd
} from '@/actions/counter';

const initState: GlobalState['counter'] = {
    number: 0,
};

const builder = new DvaModelBuilder(initState, 'counter')
    .case(add, ({ number }) => ({ number: number + 1 }))
    .case(minus, ({ number }) => ({ number: number - 1 }))
    .takeEvery(asyncAdd, function* (payload, { call, put }) {
        yield call(delay, 100);
        yield put(add(payload));
    })

const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));
export default builder.build();
export const actions = {
    add,
    minus,
    asyncAdd,
};

