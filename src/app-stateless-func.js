var appRoot = document.getElementById("app");

const User = (props)=>{

    return (
        <div>
        <h1>TEsting my stateless function</h1>

        <p>Welcome to {props.code} function</p>
        </div>
    );

}


ReactDOM.render(<User code="Hello World" />, appRoot );