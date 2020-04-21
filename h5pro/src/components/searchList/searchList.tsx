import React, {
    FC,
    useEffect,
    useRef,
    // useState,
} from 'react'
import { ModelState } from '../../containers/search/search'
import none01 from '../../images/none01.jpg'
import useScroll from '../../hooks/useScroll'
import './style.less'

const SearchList:FC<ModelState> = (props) => {

    const {
        dispatch,
        searchList,
        loading,
    } = props

    useEffect(() => {
        dispatch({
            type: "search/asyncGetSearchList"
        })
    }, [])

    const wrapper = useRef<HTMLDivElement>(null)
    useScroll(wrapper.current, loading)

    if (loading) {
        return (
            <div>检索结果加载中</div>
        )
    }

    return (
        <div ref={wrapper} className='ct_product h5-clearfix' style={{paddingBottom: '55px'}} >
            <div >
            {searchList.map((item) => {
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
        </div>
    )
}

export default SearchList