import React,{
    FC,
    useEffect,
} from 'react';
import NavLink from 'umi/navlink'
import style from './index.less';
import { connect } from "dva";
import { GlobalState, UmiComponentProps } from "@/common/type";

const mapStateToProps = ({ seller, loading }: GlobalState) => {
    return {
        seller,
        loading: loading.effects["seller/asyncGetSeller"]
    };
};

type PageStateProps = ReturnType<typeof mapStateToProps>;
type PageProps = PageStateProps & UmiComponentProps;

const BasicLayout: FC<PageProps> = props => {
    const {
        loading,
        seller,
        dispatch
    } = props

    useEffect(() => {
        dispatch({ type: "seller/asyncGetSeller"})
    }, [dispatch])

    useEffect(() => {
        console.log(seller);
    }, [seller])

    return (
        <div>
            <div>标题</div>
            {
                loading && <div>画面加载中</div>
            }
            <div className={[style.tab, style.border1px].join(" ")}>
                <div className={style.tabItem}>
                    <NavLink to="/goods">商品</NavLink>
                </div>
                <div className={style.tabItem}>
                    <NavLink to="/ratings">评论</NavLink>
                </div>
                <div className={style.tabItem}>
                    <NavLink to="/seller">商家</NavLink>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default connect(mapStateToProps)(BasicLayout);
