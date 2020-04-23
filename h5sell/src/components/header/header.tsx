import React, {
    FC,
    useState,
    useMemo,
} from 'react'
import Transition from  "@/components/Transition"
import Star from '@/components/Star'
import classNames from 'classnames'

import '@/styles/icon.less'
import './style.less'

interface ISellerType {
    avatar?: string
    name?: string
    description?: string
    deliveryTime?: string
    supports?: any
    bulletin?: string
    score?: number
}

interface IHeaderProps {
    seller: ISellerType
}

const Header:FC<IHeaderProps> = (props) => {
    const {
        seller
    } = props

    const [detailShow, setDetailShow] = useState<boolean>(false)
    const classMap = useMemo( () => ['decrease', 'discount', 'special', 'invoice', 'guarantee'], [])


    const getClass = (supports: any[]) => {
        const klass = classNames('icon',
            supports && supports.length > 0 ? classMap[supports[0].type] : undefined
        )
        return klass
    }

    const showDetail = () => {
        setDetailShow(true)
    }
    const hideDetail = () => {
        setDetailShow(false)
    }
    return (
        <div className="header">
            <div className="content-wrapper">
            <div className="avatar">
                <img width="64" height="64" alt="" src={seller?.avatar} />
            </div>
            <div className="content">
                <div className="title">
                <span className="brand"></span>
                <span className="name">{seller?.name}</span>
                </div>
                <div className="description">
                {seller?.description}/{seller?.deliveryTime}分钟送达
                </div>
                <div v-if="seller.supports" className="support">
                <span className={getClass(seller?.supports)} ></span>
                <span className="text">{seller?.supports && seller?.supports[0].description}</span>
                </div>
            </div>
                <div v-if="seller.supports" className="support-count" onClick={showDetail}>
                <span className="count">{seller?.supports?.length}个</span>
                <i className="icon-chevron-right"></i>
            </div>
            </div>
            <div className="bulletin-wrapper" onClick={showDetail}>
            <span className="bulletin-title"></span><span className="bulletin-text">{seller?.bulletin}</span>
                <i className="icon-chevron-right"></i>
            </div>
            <div className="background">
                <img src={seller?.avatar} alt="" width="100%" height="100%" />
            </div>
            <Transition
                in={detailShow}
                timeout={300}
                animation="fade"
                className="fade detail"
                unmountOnExit={true}
                appear={true}
            >
                <div>
                    <div className="detail-wrapper clearfix">
                        <div className="detail-main">
                            <h1 className="name">{seller?.name}</h1>
                            <div className="star-wrapper">
                            <Star size={48} score={seller.score}/>
                            </div>
                            <div className="title">
                            <div className="line"></div>
                            <div className="text">优惠信息</div>
                            <div className="line"></div>
                            </div>
                            <ul className="supports">
                            {
                                seller?.supports?.map((item: any, index: number) => {
                                    return (
                                    <li className="support-item" key={index} >
                                        <span className={getClass(seller.supports)}></span>
                                        <span className="text">{seller?.supports[index].description}</span>
                                    </li>
                                    )
                                })
                            }
                            </ul>
                            <div className="title">
                            <div className="line"></div>
                            <div className="text">商家公告</div>
                            <div className="line"></div>
                            </div>
                            <div className="bulletin">
                            <p className="content">{seller?.bulletin}</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-close" onClick={hideDetail}>
                        <i className="icon-x"></i>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Header