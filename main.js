var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {

  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");

  let fuk = function(){
    var a=1;
    var b=2;
    console.log(a+b);
    
  }
  d3.csv('cars.csv').then(data =>{
    console.log(data);
  })
  
  // Load the data set from the assets folder:

};
