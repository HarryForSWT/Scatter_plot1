var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {

  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");
 
  d3.csv('cars.csv').then(data =>{
    console.log(data);
  }) 
  
  // Load the data set from the assets folder:

};
