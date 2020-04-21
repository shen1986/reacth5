import React from 'react'
import './style.less'

const Footer = () => {
    return (
        <footer className="ct_footer">
            <a className="tab_home icon-home now" href="index.html"><span>首页</span></a>
            <a className="tab_cate icon-bars" href="category.html"><span>分类</span></a>
            <a className="tab_cart icon-shopping-cart" href="user/cart.html"><span>购物车</span></a>
            <a className="tab_user icon-user" href="user/index.html"><span>会员中心</span></a>
        </footer>
    )
}

export default Footer