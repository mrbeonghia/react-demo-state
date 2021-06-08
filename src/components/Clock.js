import React from "react";
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {index:1};
    }
    render() {
        return(
            <div>
                <p>Value: {this.state.index}</p>
                <button onClick={()=>{
                    this.setState({
                        index: this.state.index+1
                    })
                }
                }>Tang</button>
                <button onClick={()=>{
                    this.setState({
                        index: this.state.index-1
                    })
                }
                }>Giam</button>
            </div>
        )
    }
}
export default Clock;