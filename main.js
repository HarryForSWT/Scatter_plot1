var d3; // Minor workaround to avoid error messages in editors

// Waiting until document has loaded
window.onload = () => {
  // YOUR CODE GOES HERE
  console.log("YOUR CODE GOES HERE");
  const svg = d3.select("svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const render = data => {
    const xValue = d => d.Horsepower;
    const xAxisLabel = "Horsepower";
    const yValue = d => d.Weight;
    const yAxisLabel = "Weight";
    const colorValue = d => d.Type;
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
    //3.Dimension: jeder Typ Auto hat jede eigene Farbe
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    //4.Dimension: AWD je nachdem 1 oder 0 haben die Daten eigene Form.
    const shape = d3.scaleOrdinal(d3.symbols.map(s => d3.symbol().type(s)()));

    //Objekt "g" mit der generellen Translationseinstelleung
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

    svg
      .selectAll("path")
      .data(data)
      .join("path")
      .attr("fill", d => color(d.Type))
      .attr("d", d => shape(d.AWD))
      //.attr('class','circle-color')
      .attr(
        "transform",
        d => `translate(${xScale(d.Horsepower) + 185},${yScale(d.Weight)})`
      );
  };

  svg
    .select("body")
    .append("svg")
    .attr("width", 1100)
    .attr("height", 300);

  var circle = svg
    .append("circle")
    .attr("cx", 50)
    .attr("cy", height - 95)
    .attr("r", 6)
    .attr("fill", "steelblue")
    .attr("stroke", "steelblue")
    .attr("opacity", 0.5)
    .attr("stroke-width", 2);

  var AWD0 = svg
    .append("text")
    .text("AWD=0")
    .attr("y", height - 90)
    .attr("x", 65);
  
  var cross = svg.append("polygon")
  .attr("points","2,0 4,0 4,2")
  .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
  .;
  
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
