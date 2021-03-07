import React from 'react'
class About extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     name: "pranshu",
        //     age: 25
        // }
        console.warn("Constructor Called")
        
    }
    componentDidMount(){
        console.log(this.props)
        console.warn("Did mount Called")
    }
    componentDidUpdate(){
        console.warn("Did update Called")
    }
    render(){
        let data = 'About Us';
        return(
            <div>
                <h1>{data} Page</h1>
                <h2>Name : {this.props.name}</h2>
                {/* <h2>{this.state.name}</h2>
                <button onClick={()=>{this.setState({name:'Pranshu'})}}>Update Name</button> */}
            </div>
        )
    }
}

export default About