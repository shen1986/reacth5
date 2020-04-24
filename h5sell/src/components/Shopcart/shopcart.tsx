import React, {
    FC,
    useState,
    useRef,
} from 'react'
import classNames from 'classnames'
import BScroll from 'better-scroll'
import Cartcontrol from '@/components/Cartcontrol'
import Transition from '@/components/Transition'
import './style.less'

interface IShopcartProps {
    selectFoods?: ISelectFoodType[]
    deliveryPrice?: number
    minPrice?: number
    dispatch: any
    goodName: string
}

interface IGoodName {
    goodName?: string
}

type ISelectFoodType = IGoodName & IFoodType

interface IBall {
    show: boolean
    el?: any
}

const Shopcart:FC<IShopcartProps> = (props) => {

    const {
        selectFoods,
        deliveryPrice,
        minPrice,
        dispatch,
    } = props

    const [fold, setFold] = useState(true)
    const [balls] = useState<IBall[]>([
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
    ])
    const scroll = useRef<BScroll>()
    const listContent = useRef<HTMLDivElement>(null)
    const [dropBalls, setDropBalls] = useState<IBall[]>([])

    const totalCount = () => {
        let count = 0;
        selectFoods?.forEach((food) => {
          count += food.count!;
        });
        return count;
    }

    const totalPrice = () => {
        let total = 0;
        selectFoods!.forEach((food) => {
          total += food.price! * food.count!;
        });
        return total;
    }

    const pay = () => {
        if (totalPrice() < minPrice!) {
          return;
        }
        window.alert(`支付${totalPrice()}元`);
    }

    const payDesc = () => {
        if (totalPrice() === 0) {
          return `￥${minPrice}元起送`;
        } else if (totalPrice() < minPrice!) {
          let diff = minPrice! - totalPrice();
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
    }
    const payClass = () => {
        if (totalPrice() < minPrice!) {
          return 'not-enough';
        } else {
          return 'enough';
        }
    }

    const hideList = () => {
        setFold(true)
    }

    const toggleList = ()=>{
        if (!totalCount()) {
          return;
        }
        setFold(fold => !fold)
    }

    const listShow = () => {
        if (!totalCount()) {
            setFold(true)
            return false;
        }
        let show = !fold;
        if (show) {
            if (!scroll.current) {
              scroll.current = new BScroll(listContent.current!, {
                click: true
              });
            } else {
              scroll.current?.refresh();
            }
        }
        return show;
    }

    const empty = () => {
        selectFoods?.forEach((food) => {
          food.count = 0;
        });
    }

    const addFood = (target: any) => {
        drop(target);
    }

    const drop = (el: any) => {
        for (let i = 0; i < balls.length; i++) {
          let ball = balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;

            setDropBalls(dropBalls => [...dropBalls,ball] )
            return;
          }
        }
    }

    return (
        <div>
            <div className="shopcart">
            <div className="content" onClick={toggleList}>
                <div className="content-left">
                <div className="logo-wrapper">
                    <div className={classNames("logo", {'highlight':totalCount()>0})}>
                        <i className={classNames("icon-shopping-cart", {'highlight':totalCount()>0})}/>
                    </div>
                    <div className="num" v-show="totalCount>0">{totalCount()}</div>
                </div>
                <div className={classNames("price",{'highlight':totalPrice()>0})} >￥{totalPrice()}</div>
                <div className="desc">另需配送费￥{deliveryPrice}元</div>
                </div>
                <div className="content-right" onClick={pay}>
                <div className={classNames("pay", payClass())}>
                    {payDesc}
                </div>
                </div>
            </div>
            <div className="ball-container">
                {
                    balls.map(ball => {
                        return (
                            <Transition
                                name="drop"
                                in={ball.show}
                                timeout={300}
                            >
                                <div className="ball">
                                    <div className="inner inner-hook"></div>
                                </div>
                            </Transition>
                        )
                    })
                }
                {/* <div v-for="ball in balls"> */}

                {/* <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div className="ball" v-show="ball.show">
                    <div className="inner inner-hook"></div>
                    </div>
                </transition> */}
                {/* </div> */}
            </div>
            <Transition
                name="fold"
                in={listShow()}
                timeout={300}
            >
                <div className="shopcart-list">
                <div className="list-header">
                    <h1 className="title">购物车</h1>
                    <span className="empty" onClick={empty}>清空</span>
                </div>
                <div className="list-content" ref={listContent}>
                    <ul>
                        {selectFoods?.map( food => {

                            return (
                            <li className="food">
                                <span className="name">{food.name}</span>
                                <div className="price">
                                <span>￥{food.price!*food.count!}</span>
                                </div>
                                <div className="cartcontrol-wrapper">
                                    <Cartcontrol
                                        dispatch={dispatch}
                                        goodName={food.goodName!}
                                        add={addFood}
                                        food={food}
                                    />
                                </div>
                            </li>
                            )
                        })}
                    
                    </ul>
                </div>
                </div>
            </Transition>
            {/* <transition name="fold">
                <div className="shopcart-list" v-show="listShow">
                <div className="list-header">
                    <h1 className="title">购物车</h1>
                    <span className="empty" @click="empty">清空</span>
                </div>
                <div className="list-content" ref="listContent">
                    <ul>
                    <li className="food" v-for="food in selectFoods">
                        <span className="name">{{food.name}}</span>
                        <div className="price">
                        <span>￥{{food.price*food.count}}</span>
                        </div>
                        <div className="cartcontrol-wrapper">
                            <Cartcontrol
                                food={food}
                                add={addFood}
                            />
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </transition> */}
            </div>
            <Transition
                name="fade"
                timeout={300}
                in={listShow()}
            >
                <div className="list-mask" onClick={hideList} />
            </Transition>
        </div>
    )
}

Shopcart.defaultProps = {
    selectFoods: [
        {
          price: 10,
          count: 1
        }
    ],
    deliveryPrice: 0,
    minPrice:0,
}

export default Shopcart