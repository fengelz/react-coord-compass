import React from 'react'

class Compass extends React.Component {

    getAngle() {
        if (this._compass === undefined) {
            return 0
        }
        const rect = this._compass.getBoundingClientRect()
        const center = [rect.left + (rect.width / 2), rect.top + (rect.height / 2)]
        const angle = Math.atan2(this.props.coords[0] - center[0], -(this.props.coords[1] - center[1])) * (180 / Math.PI)
        return angle 
    }
    render() {
        if (this.props.coords === undefined) {
            return <div />
        }
        return (
            <div
                ref={(compass) => { this._compass = compass }}
                style={{ transform: `rotate(${this.getAngle()}deg)` }}
                className="compass"
            >{this.props.children}</div>
        )
    }
}

export default Compass