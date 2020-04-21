import React,{
    FC,
    useRef,
} from 'react'
import none from  '../../images/none01.jpg'
import useScroll from '../../hooks/useScroll'
import './style.less'

const firstData = [
    {
        categoryName: "鞋子"
    },
    {
        categoryName: "鞋子2"
    },
    {
        categoryName: "鞋子3"
    },
    {
        categoryName: "鞋子"
    },
    {
        categoryName: "鞋子2"
    },
    {
        categoryName: "鞋子3"
    },
    {
        categoryName: "鞋子"
    },
    {
        categoryName: "鞋子2"
    },
    {
        categoryName: "鞋子3"
    }
]

const secondData = [
    {
        brandName: 'logos'
    },
    {
        brandName: 'logo2'
    },
    {
        brandName: 'logo3'
    },
]

const Category: FC = () => {
    const wrapper = useRef<HTMLDivElement>(null)
    useScroll(wrapper.current)

    return (
        <div className="ct_wrapper" ref={wrapper}>
            <div className="mui-scroll-wrapper">
                <div className="mui-scroll">
                    {/* <!--一级分类--> */}
                    <div className="cate_left">
                        <ul>
                            {firstData.map((item, i) => {
                                return (
                                    <li
                                        className={i===0 ? 'now': ''}
                                    >
                                        <a href="javascript:;" data-id="<%=rows[i].id%>">
                                            {item.categoryName}
                                        </a>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                    {/* <!--二级分类--> */}
                    <div className="cate_right">
                        <ul>
                            { secondData.length ?
                                secondData.map((item, index) => {
                                    return (
                                        <li>
                                            <a href="javascript:;">
                                                <img src={none} alt=""/>
                                                <p>{item.brandName}</p>
                                            </a>
                                        </li>
                                    )
                                }) : 
                                <p>当前分类没有数据</p>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category