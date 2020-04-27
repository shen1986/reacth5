import React,{
    FC,
} from 'react'
import classNames from 'classnames'
import './style.less'

interface IStarProps {
    size: number
    score?: number
}

const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

const Star:FC<IStarProps> = (props) => {
    const {
        size,
        score: preScore
    } = props

    const klass = classNames('star', {
        [`star-${size}`]: size
    })

    const itemClasses = () => {
        let result = [];
        let score = Math.floor(preScore || 0 * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
    }
    return (
        <div className={klass}>
            {
                itemClasses().map((itemClass, index) => {
                    const spanClass = classNames("star-item", itemClass )
                    return <span className={spanClass} key={index}></span>
                })
            }
        </div>
    )
}

Star.defaultProps = {
    score: 0
}

export default Star