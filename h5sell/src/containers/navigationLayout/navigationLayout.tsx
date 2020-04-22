import React,{
    FC,
    useEffect,
} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../../models";
import {
    // Link,
    Switch,
    Route,
    Redirect,
    NavLink,
} from 'react-router-dom'
import Header from '@/components/Header'
import classNames from 'classnames'

import './style.less'

interface INavProps {
    seller: ISellerType
}

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
                <div className={classNames("tab-item", )}>
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
                    <Route path="/goods" component={() => <>123</>} />
                    <Route path="/ratings" component={() => <>123</>} />
                    <Route path="/seller" component={() => <>123</>} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default connector(NavigationLayout)