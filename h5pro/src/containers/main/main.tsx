import React,{
    FC,
    useRef,
} from 'react'
import {
    Carousel,
    // List,
} from 'antd-mobile'
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import banner4 from '../../images/banner4.png'
import nav1 from '../../images/nav1.png'
import nav2 from '../../images/nav2.png'
import nav3 from '../../images/nav3.png'
import nav4 from '../../images/nav4.png'
import nav5 from '../../images/nav5.png'
import nav6 from '../../images/nav6.png'
import product from '../../images/product.jpg'
import useScroll from '../../hooks/useScroll'

import './style.less'

const MainPage: FC = () => {
    const wrapper = useRef(null)
    // 显示区域滚动
    useScroll(wrapper.current as any);

    return (
        <div className="ct_wrapper h5-clearfix" ref={wrapper}>
            <div className="mui-scroll-wrapper h5-clearfix" style={{ paddingBottom: '55px' }}>
            {/* // <List className="h5-clearfix" style={{paddingBottom: '55px'}}> */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    <img src={banner1} alt="" />
                    <img src={banner2} alt="" />
                    <img src={banner3} alt="" />
                    <img src={banner4} alt="" />
                </Carousel>
                {/* <!--导航--> */}
                <nav className="ct_nav h5-clearfix">
                    <a href="#"><img src={nav1} alt=""/></a>
                    <a href="#"><img src={nav2} alt=""/></a>
                    <a href="#"><img src={nav3} alt=""/></a>
                    <a href="#"><img src={nav4} alt=""/></a>
                    <a href="#"><img src={nav5} alt=""/></a>
                    <a href="#"><img src={nav6} alt=""/></a>
                </nav>
                {/* <!--商品--> */}
                <div className="ct_product">
                    <div className="pro_item">
                        <a href="#" className="pro_item_box">
                            <img src={product} alt=""/>
                            {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                            <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                            <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                            <button className="button">立即购买</button>
                        </a>
                    </div>
                    <div className="pro_item">
                        <a href="#" className="pro_item_box">
                            <img src={product} alt="" />
                            {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                            <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                            <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                            <button className="button">立即购买</button>
                        </a>
                    </div>
                    <div className="pro_item">
                        <a href="#" className="pro_item_box">
                            <img src={product} alt=""/>
                            {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                            <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                            <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                            <button className="button">立即购买</button>
                        </a>
                    </div>
                    <div className="pro_item">
                        <a href="#" className="pro_item_box">
                            <img src={product} alt=""/>
                            {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                            <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                            <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                            <button className="button">立即购买</button>
                        </a>
                    </div>
                    <div className="pro_item">
                        <a href="#" className="pro_item_box">
                            <img src={product} alt=""/>
                            {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                            <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                            <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                            <button className="button">立即购买</button>
                        </a>
                    </div>
                    <div className="pro_item">
                        <a href="#" className="pro_item_box">
                            <img src={product} alt=""/>
                            {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                            <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                            <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                            <button className="button">立即购买</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage