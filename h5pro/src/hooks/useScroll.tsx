import {
    useEffect
} from 'react'
import BScroll from 'better-scroll'

const useScroll = (wrapper?: HTMLDivElement) => {
    useEffect(() => {
        if (wrapper) {
            new BScroll(wrapper, { bounce: false })
        }
    }, [wrapper])
}

export default useScroll