import React, {
    FC,
    useEffect,
    useState,
} from 'react'
import { ListView } from 'antd-mobile';
import none01 from '../../images/none01.jpg'
import './style.less'

const data = [
    {
        id: 1,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 2,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 3,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 4,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 5,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    },
    {
        id: 6,
        pic: [],
        prodName: "测试数据",
        price: 100,
        oldPrice: 120
    }
]

const SearchList:FC = () => {

    return (
        <div className='ct_product h5-clearfix' style={{paddingBottom: '55px'}}>
            {data.map((item) => {
                return (<div className="pro_item" key={item.id}>
                    <a href={`product.html?productId=${item.id}`} className="pro_item_box">
                        {/* <% if(item.pic && item.pic[0]){ %> */}
                        {item.pic && item.pic[0] ?
                            <img src="<%=item.pic[0].picAddr%>" /> :
                            <img src={none01} />
                        }
                        
                        <p className="mui-ellipsis-2">{item.prodName}</p>
                        <p><span className="nowPrice">&yen;{item.price}</span> <span className="oldPrice">&yen;{item.oldPrice}</span></p>
                        <button className="button">立即购买</button>
                    </a>
                </div>
            )})}

        </div>
    )
}

export default SearchList