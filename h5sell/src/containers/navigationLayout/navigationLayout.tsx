import React,{
    FC,
    useEffect,
} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "@/models";
import Header from '@/components/Header'

interface INavProps {
    seller: ISellerType
}

const mapStateToProps = ({ seller, loading }: RootState) => ({
    seller: seller,
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
    }, [])
    // const seller ={}
    return (
        <div>
            <Header seller={seller}/>
        </div>
    )
}

export default connector(NavigationLayout)