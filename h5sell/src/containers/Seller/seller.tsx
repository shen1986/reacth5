import React,{
    FC,
    useMemo,
    useState,
} from 'react'
import Star from '@/components/Star'
import Split from '@/components/Split'
import classNames from 'classnames'

import './style.less'

interface ISellerProps {
    seller: ISellerType
}

const Seller:FC<ISellerProps> = (props) => {
    const {
        seller
    } = props

    const [favorite] = useState()

    const classMap = useMemo(() =>
        ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    [])

    const toggleFavorite = (event:any) => {
        // this.favorite = !this.favorite;
        // saveToLocal(this.seller?.id, 'favorite', this.favorite);
    }


    const favoriteText = () => {
        return favorite ? '已收藏' : '收藏';
    }

    return (
        <div className="seller" ref="seller">
            <div className="seller-content">
            <div className="overview">
                <h1 className="title">{seller?.name}</h1>
                <div className="desc border-1px">
                <Star size={36} score={seller?.score} />
                <span className="text">({seller?.ratingCount})</span>
                <span className="text">月售{seller?.sellCount}单</span>
                </div>
                <ul className="remark">
                <li className="block">
                    <h2>起送价</h2>
                    <div className="content">
                    <span className="stress">{seller?.minPrice}</span>元
                    </div>
                </li>
                <li className="block">
                    <h2>商家配送</h2>
                    <div className="content">
                    <span className="stress">{seller?.deliveryPrice}</span>元
                    </div>
                </li>
                <li className="block">
                    <h2>平均配送时间</h2>
                    <div className="content">
                    <span className="stress">{seller?.deliveryTime}</span>分钟
                    </div>
                </li>
                </ul>
                <div className="favorite" onClick={toggleFavorite}>
                <span className={classNames("icon-favorite",{'active':favorite})}></span>
                <span className="text">{favoriteText()}</span>
                </div>
            </div>
            <Split/>
            <div className="bulletin">
                <h1 className="title">公告与活动</h1>
                <div className="content-wrapper border-1px">
                <p className="content">{seller?.bulletin}</p>
                </div>
                {seller?.supports &&
                    <ul className="supports">
                        {seller?.supports.map((item: any, index: number) => {
                            return (
                                <li className="support-item border-1px" key={index}>
                                    <span className={classNames("icon", classMap[item.type])}></span>
                                    <span className="text">{item.description}}</span>
                                </li>
                            )
                        })}

                    </ul>
                }

            </div>
            <Split/>
            <div className="pics">
                <h1 className="title">商家实景</h1>
                <div className="pic-wrapper" ref="picWrapper">
                <ul className="pic-list" ref="picList">
                    {seller?.pics.map(pic => {
                        return (
                            <li className="pic-item">
                                <img src={pic} width="120" height="90" alt=""/>
                            </li>
                        )
                    })}

                </ul>
                </div>
            </div>
            <Split/>
            <div className="info">
                <h1 className="title border-1px">商家信息</h1>
                <ul>
                    {seller?.infos.map((info) => (
                        <li className="info-item">{info}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Seller