const canvas1 = d3.select("#canvas1");

const ul = canvas1.append("ul");

ul.append("li").text("Item No. 1");


d3.json("https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json").then(data => {

    const width = 700;
    const height = 500;
    const margin = {top: 10, left: 50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas1.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
        .domain([0, 1_000_000])
        .range([0, iwidth]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, iheight])
        .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars.enter().append("rect")
        .attr("class", "bar")
        .style("fill", "steelblue")
        .attr("x", d => x(0))
        .attr("y", d => y(d.name))
        .attr("width", d => x(parseInt(d.value)))
        .attr("height", y.bandwidth())

    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);

    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisLeft(y));

    console.log(data);
});

const canvas2 = d3.select("#canvas2");


d3.json("https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json").then(data => {
    /*{
		"country": "Afghanistan",
		"population": "31889923",    RADIUS
		"lifeexpectancy": "43.8",    Y AXIS
		"purchasingpower": "974.58"  X AXIS
	},*/
    const width = 700;
    const height = 500;
    const margin = {top: 10, left: 50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    // Add X axis
    let x = d3.scaleLinear()
        .domain([0, 35000])
        .range([50, iwidth]);

    const svg = canvas2.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    svg.append("g")
        .attr("transform", "translate(0," + iheight + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 85])
        .range([ iheight, 0]);
    svg.append("g")
        .attr("transform", "translate(50,0)")
        .call(d3.axisLeft(y));

    // Add a scale for bubble size
    var z = d3.scaleLinear()
        .domain([0, 42_000_000])
        .range([ 1, 10]);

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(parseFloat(d.purchasingpower)); } )
        .attr("cy", function (d) { return y(parseFloat(d.lifeexpectancy)); } )
        .attr("r", function (d) { return z(parseFloat(d.population)); } )
        .style("fill", "#69b3a2")
        .style("opacity", "0.7")
        .attr("stroke", "black")

})
/*

const data = [
    {name: "Juan", age: 3},
    {name: "Orlando", age: 39},
    {name: "María", age: 7},
    {name: "Sandra", age: 35},
    {name: "Fernanda", age: 16},
    {name: "Maribel", age: 45},
    {name: "Sofía", age: 6}
];

*/

