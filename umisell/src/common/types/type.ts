import { Dispatch } from 'redux';
import { History } from 'history';

interface CounterModel {
    number: number;
}

interface SellerModel {
    seller: ISellerType;
}

interface GoodsModel {
    goods: IGoodsType[]
}

export interface DvaLoadingState {
    global: boolean;
    models: { [type: string]: boolean | undefined };
    effects: { [type: string]: boolean | undefined };
}

export interface GlobalState {
    counter: CounterModel;
    seller: SellerModel;
    goods: GoodsModel;
    loading: DvaLoadingState;
}

export interface UmiComponentProps {
    history: History;
    dispatch: Dispatch<any>;
}
