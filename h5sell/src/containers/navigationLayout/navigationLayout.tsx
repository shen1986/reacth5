import React,{
    FC,
    useEffect,
} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '@/models/index'
import {
    Switch,
    Route,
    Redirect,
    NavLink,
} from 'react-router-dom'
import Header from '@/components/Header'

import './style.less'

const Goods = React.lazy(() => import('@/containers/Goods'))
const Seller = React.lazy(() => import('@/containers/Seller'))

const mapStateToProps = ({ seller, loading }: RootState) => ({
    seller: seller.seller,
    loading: loading.effects["seller/asyncGetSeller"]
})

const connector = connect(mapStateToProps)

export type ModelState = ConnectedProps<typeof connector>

const NavigationLayout: FC<ModelState> = (props) =>{
    const {
        seller,
        dispatch
    } = props
    useEffect(() => {
        dispatch({
            type: "seller/asyncGetSeller"
        })
    }, [dispatch])
    return (
        <div>
            <Header seller={seller}/>
            <div className="tab border-1px">
                <div className="tab-item">
                    <NavLink to="/goods">商品</NavLink>
                </div>
                <div className="tab-item">
                    <NavLink to="/ratings">评论</NavLink>
                </div>
                <div className="tab-item">
                    <NavLink to="/seller">商家</NavLink>
                </div>
            </div>
            <React.Suspense fallback={null}>
                <Switch>
                    <Redirect exact path="/" to="/goods" />
                    <Route path="/goods" component={Goods} />
                    <Route path="/ratings" component={() => <>123</>} />
                    <Route path="/seller" component={Seller} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default connector(NavigationLayout)