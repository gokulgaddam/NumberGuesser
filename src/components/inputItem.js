import React from 'react';
import {Alert} from 'reactstrap';

class InputItem extends React.Component {
constructor(props){
    super(props);
    this.state= {
        guessNumber: Math.floor(Math.random() * (this.props.range - 1 + 1) + 1),
        inputNumber: 0,
        alertVisible: false,
        bgColor: "",
        alertMessage: ""


    }

}

handleChange = (e) => {
    this.setState({
        inputNumber: e.target.value
    })

}

handleSubmit = (e)=> {
    if(this.state.inputNumber < this.props.range && this.state.inputNumber > 1){
        let diff = Math.abs(this.state.inputNumber-this.state.guessNumber);
        if(diff === 0){
            this.setState({
                ...this.state,
                alertVisible: true,
                bgColor:"success",
                alertMessage: "You have won this level lets move on to the next level"
            })
            this.props.success();
        }
        if(diff < 4 && diff> 0){
            this.setState({
                ...this.state,
                alertVisible: true,
                bgColor:"danger",
                alertMessage: "HOT!!!!"
            })
        }
        if(diff > 4 && diff < 15){
            this.setState({
                ...this.state,
                alertVisible: true,
                bgColor:"warning",
                alertMessage: "WARM!"
            })
        }
        if( diff > 15){
            this.setState({
                ...this.state,
                alertVisible: true,
                bgColor:"secondary",
                alertMessage: "COLD"
            })
        }
           
        }
    
    else{
        this.setState({
            ...this.state,
            alertVisible: true,
            bgColor:"danger",
            alertMessage: "Please enter a valid number in the given range"
        })

    }

    e.preventDefault()
}




componentDidMount(){
    //random = Math.floor(Math.random() * (this.props.range - 1 + 1) + min)

}
    render(){




        return(
            <>
            <Alert className="mt-3" color={this.state.bgColor} isOpen={this.state.alertVisible}>{this.state.alertMessage}</Alert>
            <form onSubmit={this.handleSubmit} >
            <div className="input-group row text-center justify-contents-center">
    <p className="col-12 font-weight-bolder ">Enter a number between 1 and {this.props.range}</p>
               <input className="col-8 offset-2" type ="number" placeholder="enter a number" onChange={this.handleChange} value={this.state.inputNumber}/>
               </div>
               <button type="submit" className="btn btn-success btn-block mt-3 col-4 offset-4 ">Guess</button>
         </form>
         </>
        )
    }


}

export default InputItem;