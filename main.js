var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {

  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");
  const svg =d3.select('svg');
  //svg.style('background-color','red');
  const width = +svg.attr('width');
  const height = +svg.attr('height');
  
  const render = data => {
    
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d =>d.Dealer_Cost)]);
      console.log(x)
    
    
    svg.selectAll('rect').data(data)
    .enter().append('rect')
            .attr('width',300)
            .attr('height',300)
     
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
    render(data);
  }) 
  
  // Load the data set from the assets folder:

};
