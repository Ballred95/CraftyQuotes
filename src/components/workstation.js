import React, {Component} from 'react' 

export default class Workstation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    

render() {
        return (
            <div className = 'work-station-wrapper'>
                {this.props.rendering}
            </div>
        )
    }
}