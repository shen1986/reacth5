import React from 'react'
import {
    InputItem,
    List,
} from 'antd-mobile'

const Search = () => {
    return (
        <>
            <List>
                <InputItem
                    type="text"
                    placeholder="搜索你喜欢的商品"
                />
                <List.Item>
                    <div
                        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                        onClick={() => alert("搜索成功")}
                    >
                        搜索
                    </div>
                </List.Item>
            </List>
        </>
    )
}

export default Search