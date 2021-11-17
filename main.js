var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {

  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");
 
  const render = data => {
    
     
  };
  
  
  
  d3.csv('cars.csv').then(data =>{
    data.forEach(d =>{
      d.Retail_Price= +d.Retail_Price;
      d.Dealer_Cost = +d.Dealer_Cost;
      d.Engine_Size = +d.Engine_Size;
      d.City_Miles_Per_Gallon =+d.City_Miles_Per_Gallon;
      d.Cyl= +d.Cyl;
      d.Horsepower = +d.Horsepower;
      d.Horsepower= +d.Horsepower;
      d.Highway_Miles_Per_Gallon = +d.Highway_Miles_Per_Gallon;
      d.Weight= +d.Weight;
      d.Wheel_Base= +d.Wheel_Base;
      d.Len = +d.Len;
      d.Width = +d.Width;
    })
    console.log(data);
  }) 
  
  // Load the data set from the assets folder:

};
