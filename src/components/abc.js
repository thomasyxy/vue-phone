import * as React from 'react'
import * as classNames from 'classnames'
import './index.scss'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import * as modules from './module'

const statusBarImg = require('./image/status-bar.png')

@TransmitTransparently()
export default class Phone extends React.Component <modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = modules.defaultState
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'mobile': true,
            'phone': true,
            [this.props['className']]: !!this.props['className']
        })

        return (
            <div {...this.props.others} className={classes}>
                <img src={statusBarImg}
                     className="status-bar"/>
                <div className="phone-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Phone.defaultProps = {}
