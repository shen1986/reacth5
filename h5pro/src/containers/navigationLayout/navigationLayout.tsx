/**
 * @Description: 首页布局
 * @Author: sam.zhu
 * @Company: 魔笙科技
 * @Date: 2019-09-04 15:08:43
 */
import React,{
    FC,
    // useState,
    // useCallback,
    // useEffect,
} from 'react';
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import {
    Switch,
    Route,
    Redirect,
    // withRouter,
} from 'react-router-dom';

const MainPage = React.lazy(() => import('../main'))
const Search = React.lazy(() => import('../search'))
const Category = React.lazy(() => import('../category'))
const Page404 = React.lazy(() => import('../page404'))

const NavigationLayout:FC = () =>{
    return (
        <div className="ct_container">
            <Header />
            <div className="ct_content">
                <React.Suspense fallback={null}>
                    <Switch>
                        <Redirect exact path="/" to="index" />
                        <Route path="/index" component={MainPage} />
                        <Route path="/search" component={Search} />
                        <Route path="/category" component={Category} />
                        <Route path="/" compoennt={Page404} />
                    </Switch>
                </React.Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default NavigationLayout