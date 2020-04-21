import {
    useEffect
} from 'react'
import BScroll from 'better-scroll'

const useScroll = (wrapper?: HTMLDivElement | null, loading?: any) => {
    useEffect(() => {
        console.log(wrapper)
        if (wrapper && !loading) {
            new BScroll(wrapper, { bounce: false, click: false })
        }
    },[wrapper, loading])
}

export default useScroll