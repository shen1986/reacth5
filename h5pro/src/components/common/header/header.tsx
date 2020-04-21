import React from 'react'
import {
    NavBar,
    Icon,
} from 'antd-mobile'
import {
    useHistory,
} from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <NavBar
            style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10000 }}
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {history.goBack()}}
            rightContent={[
                <Icon key="0" type="search" onClick={() => history.push('/search')} />
            ]}
        >
            传淘云购
        </NavBar>
    )
}

export default Header