import React from 'react'
import {
    Link,
    useLocation,
} from 'react-router-dom'
import classNames from 'classnames'
import '../../../components/Icon/style.css'
import './style.less'

const Footer = () => {
    const location = useLocation();

    const homeClass = classNames('tab_home icon-home',{
        'now': location.pathname === "/index"
    })
    const categoryClass = classNames('tab_home icon-bars', {
        'now': location.pathname.indexOf('/category') !== -1
    })
    const cartClass = classNames('tab_home icon-shopping-cart', {
        'now': location.pathname.indexOf('/user/cart') !== -1
    })
    const userClass = classNames('tab_home icon-user', {
        'now': location.pathname.indexOf('/user/index') !== -1
    })
    return (
        <footer className="ct_footer">
            <Link className={homeClass} to="/index"><span>首页</span></Link>
            <Link className={categoryClass} to="/category"><span>分类</span></Link>
            <Link className={cartClass} to="/user/cart"><span>购物车</span></Link>
            <Link className={userClass} to="/user/index"><span>会员中心</span></Link>
        </footer>
    )
}

export default Footer