import React,{
    FC,
} from 'react'
import Transition from '@/components/Transition'

import '@/styles/icon.less'
import './style.less'

interface ICartProps {
    food: IFoodType
    add: Function
    goodName: string
    dispatch: any
}

const Cartcontrol: FC<ICartProps> = (props) => {
    const {
        food,
        add,
        goodName,
        dispatch,
    } = props

    const decreaseCart = (event: any) => {
        dispatch({
            type: "goods/asyncDecreaseCart",
            payload: {
                foodName: food.name,
                goodName: goodName
            }
        })
    }

    const addCart = (event: any) => {
        dispatch({
            type: "goods/asyncAddCart",
            payload: {
                foodName: food.name,
                goodName: goodName
            }
        })
        add(event.target);
    }
    return (
        <div className="cartcontrol">
            {
                <Transition
                    in={food.count! > 0}
                    timeout={100}
                    animation="move"
                >
                    <div className="cart-decrease" onClick={(event) => decreaseCart(event)}>
                        <span className="inner icon-circle-with-minus"></span>
                    </div>
                </Transition>
            }
            {
                food.count! > 0 &&
                <div className="cart-count" >{ food.count }</div>
            }
            <div className="cart-add icon-circle-with-plus" onClick={(event) => addCart(event)} />
        </div>
    )
}

export default Cartcontrol