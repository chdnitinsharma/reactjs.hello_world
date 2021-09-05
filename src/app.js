console.log("App js is running");

// JSX - Javascript XML
const user = { 
    name:"Testing Name", 
    location: "Chandigarh"
};

function getLocation(user){
    if(user.location){
        return <p>Location is exist. </p>;
    }
}

let count = 0;
const addOne = ()=>{
    count += 1;
    if(count>2){
        color =  'green';
    }
    render();
}


var appRoot = document.getElementById("app");
let color = 'red';



const render = ()=>{

    var templateTwo = (
       <div>
       <h1>Hellow World</h1>

       <ul>
       <li>user name: {user.name}</li>
       <li>user location: {user.location}</li>
       </ul>
       {getLocation(user)}
       { user.location && (<p>Testing 'AND' operator location</p>)}
       <p>Count: {count} </p>

       <p style={{color}}>Testing color </p>
       <button onClick={addOne}>click here to increse count value</button>
       </div>
    );
    
    ReactDOM.render(templateTwo, appRoot );
    
};


render();