import React, {
    FC,
    useState,
    useMemo,
} from 'react'
import Transition from  "@/components/Transition"
import Star from '@/components/Star'
import classNames from 'classnames'

import style from './style.less'
import mixin from '~@/style/mixin.less'

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
        <div className={style.header}>
          <div className={style.contentWrapper}>
            <div className={style.avatar}>
                <img width="64" height="64" alt="" src={seller?.avatar} />
            </div>
            <div className={style.content}>
              <div className={style.title}>
                <span className={style.brand}></span>
                <span className="name">{seller?.name}</span>
              </div>
              <div className={style.brand}>
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
                <i className="icon-chevron-right"></i>
              </div>
            }
          </div>
          <div className={style.bulletinWrapper} onClick={showDetail}>
            <span className={style.bulletinTitle}></span>
            <span className={style.bulletinText}>{seller?.bulletin}</span>
            <i className="icon-chevron-right"></i>
          </div>
          <div className={style.background}>
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
            <div className={[style.detailWrapper, mixin.clearfix()].join(" ")}>
                <div className={style.detailMain}>
                  <h1 className={style.name}>{seller?.name}</h1>
                  <div className={style.starWrapper}>
                    <Star size={48} score={seller.score}/>
                  </div>
                  <div className={style.title}>
                    <div className={style.line}/>
                    <div className={style.text}>优惠信息</div>
                    <div className={style.line}/>
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
                    <div className={style.line}/>
                    <div className={style.text}>商家公告</div>
                    <div className={style.line}/>
                  </div>
                  <div className={style.bulletin}>
                    <p className={style.content}>{seller?.bulletin}</p>
                  </div>
                </div>
              </div>
              <div className={style.detailClose} onClick={hideDetail}>
                  <i className="icon-x"></i>
              </div>
            </div>
          </Transition>
        </div>
    )
}

export default Header
