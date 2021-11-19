var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {
  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");
  const svg = d3.select("svg");
  //svg.style('background-color','#311999');
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  
  
  const render = data => {
    const xValue = d => (d.Horsepower);
    const xAxisLabel = "Horsepower";
    const yValue = d => d.Weight;
    const yAxisLabel = "Weight";
    const colorValue = d=>d.Type;
    const margin = { top: 5, right: 20, bottom: 20, left: 200 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    //y "Wertebereich" dateneinstellen
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, xValue))
      .range([0, 760])
      .nice();
    //x "Definitionsbereich" Dateneinstellen
    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([350, 0])
      .nice();

    //const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    //Objekt "g" mit der generellen Translationseinstelleung
    
    const color = d3.scaleOrdinal(data.map(d => d.Type), d3.schemeCategory10);
    const shape = d3.scaleOrdinal(data.map(d => d.Type), d3.symbols.map(s => d3.symbol().type(s)()))
    const g = svg
      .append("g")
      .attr("tranform", `translate(${margin.left},${margin.top})`);

    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(-350)
      .tickPadding(15);

    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(-760)
      .tickPadding(10);

    //y-Achse Zeichnen
    const yAxisG = g
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${innerWidth - 696},0)`);

    yAxisG
      .append("text")
      .attr("class", "axis-label")
      .attr("y", -100)
      .attr("x", -100)
      .text(yAxisLabel)
      .attr("text-anchor", "middle")
      .attr("transform", `rotate(-90)`);
    //yAchse verschwinden 
    yAxisG.selectAll(" .domain").remove();
    

    //x-Achse Zeichnen
    const xAxisG = g
      .append("g")
      .call(xAxis)
      .attr(
        "transform",
        `translate(${innerWidth / 9 + 86},${innerHeight - 125})`
      );
    
     //xAchse verschwinden 
    xAxisG.selectAll(" .domain").remove();
    xAxisG
      .append("text")
      .attr("class", "axis-label")
      .attr("y", 60)
      .attr("x", innerWidth / 2)
      .text(xAxisLabel);

    //Daten in Formen visualisieren
    const nested = d3.nest()
    .key(colorValue)
    .entries(data)
    console.log(nested);
    
   // colorScale.domain(nested.map(d => d.key));
    
    svg
    
    /*
     .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
    
    .attr("cy", d => yScale(yValue(d)))
      .attr("cx", d => xScale(xValue(d)))
      .attr("r", 7)
   
    
   
    */
    
    
     
     .selectAll("path")
    .data(data)
    .join("path")
      .attr("fill", d => color(d.Type))
      .attr("d", d => shape(d.Type))
      //.attr('class','circle-color')
      .attr("transform", d => `translate(${xScale(d.Horsepower)+200},${yScale(d.Weight)})`);
    
      //.attr("stroke",d=>colorScale(d.key))
      //.attr("transform", `translate(${190},0)`)
    ;
    
      
  };
  

  // Load the data set from the assets folder:
  //Dateiverbinden
  d3.csv("cars.csv").then(data => {
    data.forEach(d => {
      d.Retail_Price = +d.Retail_Price;
      d.Dealer_Cost = +d.Dealer_Cost;
      d.Engine_Size = +d.Engine_Size;
      d.City_Miles_Per_Gallon = +d.City_Miles_Per_Gallon;
      d.Cyl = +d.Cyl;
      d.Horsepower = +d.Horsepower;
      d.Highway_Miles_Per_Gallon = +d.Highway_Miles_Per_Gallon;
      d.Weight = +d.Weight;
      d.Wheel_Base = +d.Wheel_Base;
      d.Len = +d.Len;
      d.AWD = +d.AWD;
      d.Width = +d.Width;
            
    });
    render(data);
    
  });
};
