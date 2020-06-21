import React from 'react';
import Input from './inputItem';



class Main extends React.Component{
    constructor(props){
        super(props)
this.state={
    level:0,
    range: 100,
    listItems: [ {
        range: 100,level: 0
    }
    
    ]


}
    }
success= () => {

  
let newRange=this.state.range+100;
   let newlevel= this.state.level + 1;
    let newList= this.state.listItems;
    newList.push({range: newRange,level:newlevel})
    this.setState({
       range: newRange,
        level:newlevel,
      listItems:newList,
    })
    console.log(this.state)
}


    render(){
       let list=this.state.listItems.map(item=>{
            return(
                <Input range ={item.range} key={item.level} success={this.success}/>
            )
        })
        return (
            <div className="container">
                <h1>You are on level {this.state.level + 1}</h1>
                
                    {list}
            </div>
        )
    }
}

export default Main;