import React from 'react'

class TodeItem extends React.Component{
    render(){
        return(
            <div>
                <li key={this.props.key}>{this.props.content}</li>
            </div>
        );
    }
}

export default TodeItem;