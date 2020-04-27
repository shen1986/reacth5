import { actionCreatorFactory } from 'dva-model-creator';

const actionCreator = actionCreatorFactory('seller');

export const getSellerRs = actionCreator<ISellerType>('getSellerRs');
export const asyncGetSeller = actionCreator<ISellerType>('asyncGetSeller');
