import {
    useEffect
} from 'react'
import BScroll from 'better-scroll'

const useScroll = () => {
    useEffect(() => {
        const wrapper = document.querySelector('.ct_wrapper')
        new BScroll(wrapper as Element)
    })
}

export default useScroll