import React,{
    useRef,
} from 'react'
import {
    InputItem,
    List,
} from 'antd-mobile'
import SearchList from '../../components/searchList'
import useScroll from '../../hooks/useScroll'

const Search = () => {
    const wrapper = useRef(null)
    useScroll(wrapper.current as any)

    return (
        <div className="search-wrapper h5-clearfix" ref={wrapper}>
            <div className="h5-clearfix">
            <List>
                <InputItem
                    type="text"
                    placeholder="搜索你喜欢的商品"
                />
                <List.Item>
                    <div
                        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                        onClick={() => mui.confirm("搜索成功")}
                    >
                        搜索
                    </div>
                </List.Item>
            </List>
            <SearchList />
            </div>
        </div>
    )
}

export default Search