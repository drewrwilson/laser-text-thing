function show_svg(evt) {
    var svg = document.getElementById("yo");
    var serializer = new XMLSerializer();
    var svg_blob = new Blob([serializer.serializeToString(svg)],
                            {'type': "image/svg+xml"});
    var url = URL.createObjectURL(svg_blob);

    var svg_win = window.open(url, "svg_win");
}

function drawBottomRectangle () {
  d3.select('svg')
    .append("rect")
      .attr("fill", '#16161d')
      .attr("x", "0.25in")
      .attr("y", ".99in")
      .attr("width", "100%")
      .attr("height", ".10in")

}

function resizeToTwoInchesTall () {
  d3.select('svg')
    .attr('id', 'yo')
    .each(function() {
        bbox = this.getBBox();
        this.setAttribute('viewBox', bbox.x  + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height)
            // this.setAttribute('height', bbox.height)
        // this.setAttribute('height', '2in')
        this.setAttribute('viewBox', bbox.x  + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height)
      });
};

function addText (content) {
  d3.selectAll('.svg-laser-text')
    .remove();
  d3.select('svg')
    .append('text')
      .attr('x', '0.25in')
      .attr('class', 'svg-laser-text')
      .attr('y', '1in')
      .text(content)
      .attr('font-family', "font-family: 'Open Sans', sans-serif;")
      .attr('font-weight', '800')
      .style('text-transform', 'uppercase')
      .style('letter-spacing', '-5px')
      .attr('font-size', '95')
      .attr('fill', '#16161d');
      // .attr('fill', '#5EB5E2');
  if (content == '') {
    addText('Enter Text');
  }
}

function createSVG () {
  d3.select('svg')
    // .attr('height', '2in')
    .style('background', '#fff')
}

function draw(content) {
  //write text to svg

  addText(content);

  // var svg-laser-text = d3.select("text[id='svg-laser-text']");
  // svg-laser-text.parentNode.removeChild(svg-laser-text);

  //resize to correct width
  resizeToTwoInchesTall();
  //add an underline
  drawBottomRectangle();
}

//create an svg
createSVG();
draw('Hello World');
d3.select("#design-text").on("input", function() {
  draw(this.value)

});

//union of paths
//remove fill, add stroke
//bonus points:
//place it on a sheet of 24x12
