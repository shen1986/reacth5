import { actionCreatorFactory } from 'dva-model-creator';

const actionCreator = actionCreatorFactory('goods');

export const getGoodsRs = actionCreator<ISellerType>('getGoodsRs');
export const asyncGetGoods = actionCreator<ISellerType>('asyncGetGoods');
