import React, { Component } from 'react';
import NetworkComponent from './NetworkComponent';

class Compose extends Component {
    // state = {

    // };
    constructor(props){
        super(props)
        this.state = {
            serviceName: "",
            imageName: "", 
            networkClick: false,
            networksOne: [],
            configs: []
        }
        this.handleServiceNameChange = this.handleServiceNameChange.bind(this)
        this.handleNetworkClick = this.handleNetworkClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    handleServiceNameChange(event) {
        this.setState({serviceName: event.target.value})
        console.log("servie name: " + this.state.serviceName)
      }

    handleNetworkClick() {
        this.setState({
            networkClick:!this.state.networkClick
        })
    }

    handleAddNetworkOne(){
        this.setState({networksOne: [...this.state.networksOne, ""]})
    }

    handleNetworkOneInput(e, index){
        this.state.networksOne[index] = e.target.value
        this.setState({networksOne: this.state.networksOne})
    }

    handleRemoveNetworkOne(index){
        this.state.networksOne.splice(index,1)

        console.log(this.state.networksOne, "$$$$")

        this.setState({networksOne: this.state.networksOne})
    }
    handleAddConfig(){
        this.setState({configs: [...this.state.configs, ""]})
    }
    handleConfigSourceInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        
        this.state.configs[index].source = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleConfigTargetInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        this.state.configs[index].target = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleConfigVersionInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        this.state.configs[index].version = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleConfigFileInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        this.state.configs[index].file = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleRemoveConfig(index){
        this.state.configs.splice(index,1)

        console.log(this.state.configs, "$$$$")

        this.setState({configs: this.state.configs})
    }
    handleSubmit(){
        var services = []
        //console.log(this.state.networksOne,"mera network")
        //console.log(this.state.configs, "mera config")

        services.push(this.state.configs)
        console.log(services)
    }

    render() { 
       return (
        <React.Fragment>
           <label> <br></br>
            <span style = {this.styles} className = "badge badge-primary m-2">Collection(Team) name :</span>
            <input type="text" name="name" />
            </label>
            <h1>Services</h1>
            

            <label className= "m-4"> 
            <span style = {this.styles} className = "badge badge-primary m-2">Services name :</span>
            <input type="text" name="ServiceName" value={this.state.serviceName} onChange={this.handleServiceNameChange} />
            <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Image name :</span>
            
            <input type="text" name="imageName" />
            </div>
            <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Port Number :</span>
            <input type="text" name="portNumber"  placeholder="8080:8080"/>
            </div>
            <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Health Check URL:</span>
            <input type="text" name="health" placeholder="http://localhost:8080/patient"/>
            </div>
             <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Number of Replicas :</span>
            <input type="text" name="replica" />
            </div>
            <div >
            <span style = {this.styles} className = "badge badge-primary m-2">Network</span>
            {/* <button onClick = {this.handleNetworkClick}>Plus</button> */}
            <button onClick = {(e) => this.handleAddNetworkOne(e)}> Add Network</button>
            {/* {this.state.networkClick ? (<NetworkComponent></NetworkComponent>) :""} */}
            {
                this.state.networksOne.map((network, index) => {
                    return(
                        <div key={index}>
                            <span style = {this.styles} className = "badge badge-primary m-2">Network 1: </span>
                            <input onChange={(e) => this.handleNetworkOneInput(e, index)} value={network}/>
                            <button onClick={() => this.handleRemoveNetworkOne(index)}>Remove</button>
                        </div>
                    )
                })
            }
            </div>
            <div >
            <span style = {this.styles} className = "badge badge-primary m-2">Config</span>
            <button onClick = {(e) => this.handleAddConfig(e)}> Add Config</button>
            {
                this.state.configs.map((config, index) => {
                    return(
                        <div key={index}>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-2">Source: </span>
                            <input onChange={(e) => this.handleConfigSourceInput(e, index)} value={config.source}/>
                            <button onClick={() => this.handleRemoveConfig(index)}>Remove</button>
                            </div>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-2">Target: </span>
                            <input onChange={(e) => this.handleConfigTargetInput(e, index)} value={config.target}/>
                            </div>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-2">Version: </span>
                            <input onChange={(e) => this.handleConfigVersionInput(e, index)} value={config.version}/>
                            </div>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-2">File: </span>
                            <input onChange={(e) => this.handleConfigFileInput(e, index)} value={config.file}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </label>
            <button onClick= { this.handleSubmit }> Submit </button>
        </React.Fragment>
        );
    }
}
 
export default Compose; 