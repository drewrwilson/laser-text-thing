

function drawBottomRectangle () {
  d3.select('svg')
    .append("rect")
      .attr("fill", '#16161d')
      .attr("x", "0.25in")
      .attr("y", "1in")
      .attr("width", "100%")
      .attr("height", ".10in")

}

function resizeToTwoInchesTall () {
  d3.select('svg')
    .each(function() {
        bbox = this.getBBox();
        this.setAttribute("viewBox", bbox.x  + " " + bbox.y + " " + bbox.width + " " + bbox.height)
            // this.setAttribute("height", bbox.height)
        this.setAttribute("height", "2in")
        this.setAttribute("viewBox", bbox.x  + " " + bbox.y + " " + bbox.width + " " + bbox.height)
      });
};

function addName (content) {
  d3.select('svg')
    .append('text')
      .attr("x", '0.25in')
      .attr("y", '1in')
      .text(content)
      .attr("font-family", "font-family: 'Open Sans', sans-serif;")
      .attr("font-weight", "800")
      .style("text-transform", "uppercase")
      .style("letter-spacing", "-5px")
      .attr("font-size", "95")
      .attr("fill", "#16161d");
      // .attr("fill", "#5EB5E2");
}

function createSVG () {
  d3.select("body")
    .append("svg")
    .attr("height", '2in')
    .style("background", '#fff')
}


//create an svg
createSVG();
//write text to svg
addName('Drew Wilson');
//resize to correct width
resizeToTwoInchesTall();
//add an underline
drawBottomRectangle();
//union of paths
//remove fill, add stroke
//bonus points:
//place it on a sheet of 24x12
