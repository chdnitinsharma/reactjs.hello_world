var appRoot = document.getElementById("app");


class Counter extends React.Component{
    counterInt = 0;

    constructor(props){

        super(props);
        this.addCounter = this.addCounter.bind(this);
        this.descCounter = this.descCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            counter: 1
        }

    }

    addCounter(){
       this.setState((preState)=>{
           const counter = preState.counter 
           if(counter>=3){
            alert("counter can not be greater than 3.")
            return {};
           }

           return {
            counter: counter + 1
           }
       })

    }

    resetCounter(){
        this.setState(()=>{
            return {
             counter: 0
            }
        })
 
     }

    descCounter(){
        this.setState((preState)=>{
            return {
                counter: preState.counter -1 
            }
        })
 
     }

    render(){
       
        return (
            <p>
            <h1>My HEADER react component: {this.state.counter}</h1>
            <button onClick={this.addCounter}>+1</button>
            <button onClick={this.descCounter}>-1</button>
            {
                this.state.counter !=0 && <button onClick={this.resetCounter}>Reset</button>
            
            }
            
            </p>
        );
    }

}




const render = ()=>{
  
    var templateTwo = (
       <div>
         <Counter/>
      </div>
        
      
    );
    
    ReactDOM.render(templateTwo, appRoot );
    
};


render();