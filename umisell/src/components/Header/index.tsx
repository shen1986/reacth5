import React, {
    FC,
    useState,
    useMemo,
} from 'react'
import Transition from "@/components/Transition"
import Star from '@/components/Star'
import {
    CloseOutlined,
    RightOutlined,
} from '@ant-design/icons'
import classNames from 'classnames'

import style from './style.less'

interface IHeaderProps {
    seller: ISellerType
}

const Header: FC<IHeaderProps> = (props) => {
    const {
        seller
    } = props

    const [detailShow, setDetailShow] = useState<boolean>(false)
    const classMap = useMemo(() => ['decrease', 'discount', 'special', 'invoice', 'guarantee'], [])


    const getClass = (supports: any[]) => {
        const klass = classNames(style.icon,
            supports && supports.length > 0 ? style[classMap[supports[0].type]] : undefined
        )
        return klass
    }

    const showDetail = () => {
        setDetailShow(true)
    }
    const hideDetail = () => {
        setDetailShow(false)
    }
    console.log(getClass(seller?.supports))
    return (
        <div className={style.header}>
            <div className={style.contentWrapper}>
                <div className={style.avatar}>
                    <img width="64" height="64" alt="" src={seller?.avatar} />
                </div>
                <div className={style.content}>
                    <div className={style.title}>
                        <span className={style.brand}></span>
                        <span className={style.name}>{seller?.name}</span>
                    </div>
                    <div className={style.description}>
                        {seller?.description}/{seller?.deliveryTime}分钟送达
                    </div>
                    {
                        seller.supports &&
                        <div className={style.support}>
                            <span className={getClass(seller?.supports)} ></span>
                            <span className={style.text}>{seller?.supports && seller?.supports[0].description}</span>
                        </div>
                    }
                </div>
                {
                    seller.supports &&
                    <div className={style.supportCount} onClick={showDetail}>
                        <span className={style.count}>{seller?.supports?.length}个</span>
                        <RightOutlined className={style["icon-chevron-right"]}/>
                    </div>
                }
            </div>
            <div className={style.bulletinWrapper} onClick={showDetail}>
                <span className={style.bulletinTitle}></span>
                <span className={style.bulletinText}>{seller?.bulletin}</span>
                <RightOutlined className={style["icon-chevron-right"]} />
            </div>
            <div className={style.background}>
                <img src={seller?.avatar} alt="" width="100%" height="100%" />
            </div>
            <Transition
                in={detailShow}
                timeout={300}
                animation="fade"
                className={[style.detail, "fade"].join(" ")}
                unmountOnExit={true}
                appear={true}
            >
                <div>
                    <div className={[style.detailWrapper, style.clearfix].join(" ")}>
                        <div className={style.detailMain}>
                            <h1 className={style.name}>{seller?.name}</h1>
                            <div className={style.starWrapper}>
                                <Star size={48} score={seller.score} />
                            </div>
                            <div className={style.title}>
                                <div className={style.line} />
                                <div className={style.text}>优惠信息</div>
                                <div className={style.line} />
                            </div>
                            <ul className={style.supports}>
                                {
                                    seller?.supports?.map((item: any, index: number) => {
                                        return (
                                            <li className={style.supportItem} key={index} >
                                                <span className={getClass(seller.supports)}></span>
                                                <span className={style.text}>{seller?.supports[index].description}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={style.title}>
                                <div className={style.line} />
                                <div className={style.text}>商家公告</div>
                                <div className={style.line} />
                            </div>
                            <div className={style.bulletin}>
                                <p className={style.content}>{seller?.bulletin}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.detailClose} onClick={hideDetail}>
                        <CloseOutlined />
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Header
