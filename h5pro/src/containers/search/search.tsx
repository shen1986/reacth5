import React,{
    useRef,
    FC,
} from 'react'
import {
    InputItem,
    List,
} from 'antd-mobile'
import SearchList from '../../components/searchList'
import useScroll from '../../hooks/useScroll'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../../models";

const mapStateToProps = ({search, loading}: RootState) => ({
    searchList: search.searchList,
    loading: loading.effects["search/asyncGetSearchList"]
})

const connector = connect(mapStateToProps)

export type ModelState = ConnectedProps<typeof connector>

const Search: FC<ModelState> = (props) => {
    const {
        dispatch,
        searchList,
        loading,
    } = props

    return (
        <div className="search-wrapper h5-clearfix" >
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
            <SearchList
                loading={loading}
                dispatch={dispatch}
                searchList={searchList}
            />
            </div>
        </div>
    )
}

export default connector(Search)