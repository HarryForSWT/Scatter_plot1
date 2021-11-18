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
    const xValue = d => d.Dealer_Cost;
    const yValue = d => d.Retail_Price
    const margin = { top: 5, right: 20, bottom: 20, left: 200 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    //y "Wertebereich" dateneinstellen
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth])
      .nice();
    //x "Definitionsbereich" Dateneinstellen
    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([0, height*2/3]);
    
    //Objekt "g" mit der generellen Translationseinstelleung
    const g = svg
      .append("g")
      .attr("tranform", `translate(${margin.left},${margin.top})`);

    const xAxis = d3.axisBottom(xScale)
    .tickSize(-innerHeight);
    
    const yAxis = d3.axisLeft(yScale)
      .tickSize(-innerWidth);
    
    //y-Achse Zeichnen
    g.append("g")
      .call(yAxis)
      .attr("transform", `translate(${innerWidth/2},50)`);
    //.selectAll(' .domain').remove()
    //yAchse verschwinden mit oberer Zeile
    
    //x-Achse Zeichnen
   const xAxisG = g.append("g")
      .call(xAxis)
      .attr("transform", `translate(${innerWidth/2},${innerHeight-108})`);
    
    xAxisG.append('text')
    .attr("class","axis-label")
    .attr("y",+40)
    .attr("x",innerWidth/2)
    .text("Dealer Cost");

    //Daten in Balken visualisieren
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cy", d => yScale(yValue(d)))
      .attr("cx", d => xScale(xValue(d)))
      .attr("r",7)
      .attr("transform", `translate(${innerWidth/2},0)`);
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
      d.Horsepower = +d.Horsepower;
      d.Highway_Miles_Per_Gallon = +d.Highway_Miles_Per_Gallon;
      d.Weight = +d.Weight;
      d.Wheel_Base = +d.Wheel_Base;
      d.Len = +d.Len;
      d.Width = +d.Width;
    });
    render(data);
  });
};
