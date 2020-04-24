import React,{
    FC,
    useRef,
    useEffect,
    useState,
    useCallback,
} from 'react'
import {
    connect,
    ConnectedProps,
} from 'react-redux'
import { RootState } from '@/models/index'
import BScroll, {
    Position,
} from 'better-scroll';
import Cartcontrol from '@/components/Cartcontrol'
import Shopcart from '@/components/Shopcart'
import classNames from 'classnames'
import './style.less'

const mapStateToProps = ({ goods, loading }: RootState) => ({
    goods: goods.goods,
    loading: loading.effects["seller/asyncGetSeller"]
})

const connector = connect(mapStateToProps)

export type ModelState = ConnectedProps<typeof connector>

interface IGoodsProps {
    seller: ISellerType
}

type ILocalProps = IGoodsProps & ModelState

const Goods: FC<ILocalProps> = (props) => {
    const {
        dispatch,
        goods,
        seller
    } = props

    const menuWrapper = useRef<HTMLDivElement>(null)
    const foodsWrapper = useRef<HTMLDivElement>(null)
    const menuList = useRef<HTMLLIElement[]>([])
    const foodList = useRef<HTMLLIElement[]>([])
    const [scrollY, setScorllY] = useState(0)
    const meunScroll = useRef<BScroll>()
    const foodsScroll = useRef<BScroll>()
    const [selectedFood, setSelectedFood] = useState<any>({})

    const [listHeight, setListHeight] = useState<any[]>([])
    const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

    const _initScroll = useCallback(() => {
        meunScroll.current = new BScroll(menuWrapper.current as HTMLDivElement, {
            click: true
        });

        foodsScroll.current = new BScroll(foodsWrapper.current as HTMLDivElement, {
            click: true,
            probeType: 3
        });

        foodsScroll.current.on('scroll', (pos: Position) => {
            // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
            if (pos.y <= 0) {
                setScorllY(Math.abs(Math.round(pos.y)))
            }
        });
    }, [])

    const _calculateHeight = useCallback(() => {
        let tempFoodList = foodList.current;
        let height = 0;
        
        listHeight.push(height);
        for (let i = 0; i < tempFoodList.length; i++) {
            let item = tempFoodList[i];
            height += item.clientHeight;
            listHeight.push(height);
        }
        setListHeight(listHeight)
    }, [listHeight] )

    useEffect(() => {
        dispatch({
            type: "goods/asyncGetGoods"
        })
        _initScroll()
        _calculateHeight()
    }, [_calculateHeight, _initScroll, dispatch])

    const _followScroll = (index: number) => {
        let tempMenuList = menuList.current;
        let el = tempMenuList[index];
        meunScroll.current?.scrollToElement(el, 300, 0, -100);
    }

    const currentIndex = () => {
        for (let i = 0; i < listHeight.length; i++) {
            let height1 = listHeight[i];
            let height2 = listHeight[i + 1];
            if (!height2 || (scrollY >= height1 && scrollY < height2)) {
                _followScroll(i);
                return i;
            }
        }
        return 0;
    }

    const selectMenu = (index: number, event: any) => {
        let tempFoodList = foodList.current;
        let el = tempFoodList[index];
        foodsScroll.current?.scrollToElement(el, 300);
    }

    const selectFood = (food: any, event: any) => {
        if (!event._constructed) {
            return;
        }
        setSelectedFood(food)
        // this.$refs.food.show();
    }

    const addFood = (target: any) => {
        _drop(target);
    }

    const _drop = (target: any) => {
        // 体验优化,异步执行下落动画
        // this.$nextTick(() => {
        //     this.$refs.shopcart.drop(target);
        // });
    }

    return (
        <div>
            <div className="goods">
                <div className="menu-wrapper" ref={menuWrapper}>
                <ul>
                    {
                        goods.map((item, index) => {
                            const menuClass = classNames('menu-item',{
                                'current': currentIndex() === index
                            })
                            const spanClass = classNames('icon', 
                                classMap[item.type]
                            )
                            return (
                                <li
                                    key={index}
                                    className={menuClass}
                                    onClick={(event) => selectMenu(index, event)}
                                    ref={(ref) => menuList.current[index] = ref as HTMLLIElement}
                                >
                                    <span className="text border-1px">
                                        {item.type > 0 && <span className={spanClass} />}
                                        { item.name }
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
                <div className="foods-wrapper" ref={foodsWrapper}>
                <ul>
                    {
                        goods.map((item, i) => {
                            return (
                                <li className="food-list"
                                    key={i}
                                    ref={(ref) => foodList.current[i] = ref as HTMLLIElement}
                                >
                                    <h1 className="title">{ item.name }</h1>
                                    <ul>
                                        {item.foods.map((food: IFoodType, index) =>{
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={(event) => selectFood(food,event)}
                                                    className="food-item border-1px"
                                                >
                                                    <div className="icon">
                                                        <img width="57" height="57" src={food.icon} alt=""/>
                                                    </div>
                                                    <div className="content">
                                                        <h2 className="name">{ food.name }</h2>
                                                        <p className="desc">{ food.description }</p>
                                                        <div className="extra">
                                                            <span className="count">月售{ food.sellCount }份</span>
                                                            <span>好评率{ food.rating }%</span>
                                                        </div>
                                                        <div className="price">
                                                            <span className="now">￥{ food.price }</span>
                                                            {
                                                                food.oldPrice &&
                                                                <span className="old">￥{ food.oldPrice }</span>
                                                            }
                                                        </div>
                                                        <div className="cartcontrol-wrapper">
                                                            <Cartcontrol
                                                                dispatch={dispatch}
                                                                goodName={item.name}
                                                                add={addFood}
                                                                food={food}
                                                            />
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
                <Shopcart
                    // selectFoods={selectFood}
                    deliveryPrice={seller?.deliverPrice}
                    minPrice={seller?.minPrice}
                    dispatch={dispatch}
                    goodName={"asd"}
                />
            {/* <shopcart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice"
                         :minPrice="seller.minPrice"></shopcart> */}
        </div>
         
        </div>
    )
}

export default connector(Goods)