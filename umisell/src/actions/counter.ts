import { actionCreatorFactory } from 'dva-model-creator';

const actionCreator = actionCreatorFactory('counter');

export const add = actionCreator<number>('add');
export const minus = actionCreator<number>('minus');
export const asyncAdd = actionCreator<number>('asyncAdd');
