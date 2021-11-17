var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {
  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");
  const svg = d3.select("svg");
  svg.style('background-color','#311999');
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const render = data => {
    const xValue = d => d.Dealer_Cost;
    const yValue = d => d.Name;
    
    
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, xValue)])
      .range([0, width]);
    const yScale = d3
      .scaleBand()
      .domain(data.map(yValue))
      .range([0, height]);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("y", d => yScale(yValue(d)))
      .attr("width", d => xScale(xValue(d)))
      .attr("height", yScale.bandwidth());
  };

  d3.csv("cars.csv").then(data => {
    data.forEach(d => {
      d.Retail_Price = +d.Retail_Price;
      d.Dealer_Cost = +d.Dealer_Cost;
      d.Engine_Size = +d.Engine_Size;
      d.City_Miles_Per_Gallon = +d.City_Miles_Per_Gallon;
      d.Cyl = +d.Cyl;
      d.Horsepower = +d.Horsepower;
      d.Horsepower = +d.Horsepower;
      d.Highway_Miles_Per_Gallon = +d.Highway_Miles_Per_Gallon;
      d.Weight = +d.Weight;
      d.Wheel_Base = +d.Wheel_Base;
      d.Len = +d.Len;
      d.Width = +d.Width;
    });
    render(data);
  });

  // Load the data set from the assets folder:
};
