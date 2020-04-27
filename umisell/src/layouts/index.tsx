import React, {
    FC,
    useEffect,
} from 'react';
import NavLink from 'umi/navlink'
import style from './index.less';
import Header from '@/components/Header'
import { connect } from "dva";
import { GlobalState, UmiComponentProps } from "@/common/types/type";

const mapStateToProps = ({ seller, loading }: GlobalState) => {
    return {
        seller: seller.seller,
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
        dispatch({ type: "seller/asyncGetSeller" })
    }, [dispatch])

    return (
        <div>
            <Header seller={seller} />
            {
                loading ? <div>画面加载中</div> :
                    <>
                        <div className={[style.tab, style["border-1px"]].join(" ")}>
                            <div className={style.tabItem}>
                                <NavLink activeClassName={style.active} to="/goods">商品</NavLink>
                            </div>
                            <div className={style.tabItem}>
                                <NavLink activeClassName={style.active} to="/ratings">评论</NavLink>
                            </div>
                            <div className={style.tabItem}>
                                <NavLink activeClassName={style.active} to="/seller">商家</NavLink>
                            </div>
                        </div>
                        {props.children}
                    </>
            }

        </div>
    );
};

export default connect(mapStateToProps)(BasicLayout);
