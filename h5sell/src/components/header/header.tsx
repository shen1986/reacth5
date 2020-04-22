import React, {
    FC,
} from 'react'

interface ISellerType {
    avatar: string
    name: string
    description: string
    deliveryTime: string
    supports: any
    bulletin: string
    score: number
}

interface IHeaderProps {
    seller?: ISellerType
}

const Header:FC<IHeaderProps> = (props) => {
    const {
        seller
    } = props
    return (
        <header id="header" className="mui-bar mui-bar-nav">
            <div className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></div>
            <h1 className="mui-title">{seller?.name}</h1>
        </header>
    )
}

export default Header