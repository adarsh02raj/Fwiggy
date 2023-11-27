import React from "react";
import UserClass from "./UserClass";

// const Offers = ()=>{
//     return(
//         <div className="offersComponent">
//             <h1>Offers</h1>
//             <UserClass name={'Adarsh'} location={'Muzaffarpur'} social={'@adarsh02raj'}/>
//         </div>       
//     )
// }


class Offers extends React.Component{
    constructor(){
        super();
        // console.log('Parent constructor');
    }
    componentDidMount(){
        // console.log("Parent component did mount");
    }
    render(){
        // console.log('Parent Render called');

        return(
            <div className="offersComponent">
            <UserClass name={'Adarsh'} location={'Muzaffarpur'} social={'@adarsh02raj'}/>
            </div>
        )
    }
}

export default Offers;