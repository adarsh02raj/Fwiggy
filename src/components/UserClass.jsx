import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log('Child cc');
        this.state = {
            count: 0,
            count2: 2
        }
    }
    componentDidMount(){
        console.log("Child component did mount");
    }
    render(){
        console.log('Child Render Called');
        const {name, location, social} = this.props;
        return(
            <div className="userClass">
                <h1>Name: {name}</h1>
                <h2>Address: {location}</h2>
                <h4>Social: {social}</h4>
                <button onClick={()=>{
                    this.setState({count : this.state.count+1})
                }}>Count: {this.state.count}</button>
                <p>{this.state.count2}</p>
            </div>
        )
    }
}

export default UserClass;