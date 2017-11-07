function show_svg(evt) {
    var svg = document.getElementById("yo");
    var serializer = new XMLSerializer();
    var svg_blob = new Blob([serializer.serializeToString(svg)],
                            {'type': "image/svg+xml"});
    var url = URL.createObjectURL(svg_blob);


    var svg_win = window.open(url, "svg_win");
}

function drawBottomRectangle () {
  d3.selectAll('rect')
    .remove();
  d3.select('svg')
    .append("rect")
      .attr("fill", '#16161d')
      .attr("x", "0.25in")
      .attr("y", ".99in")
      .attr("width", function () {
        return d3.select('#svg-laser-text').attr('width')
      })
      .attr("height", ".20in")
}

function resizeToTwoInchesTall () {
  d3.select('svg')
    .each(function() {
        bbox = this.getBBox();
        this.setAttribute('viewBox', bbox.x  + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height)
        this.setAttribute('height', bbox.height)
        this.setAttribute('height', '1in')
        this.setAttribute('viewBox', bbox.x  + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height)
      });
};

function addText (content) {
  d3.select('#laser-words')
      .selectAll('text')
      .remove();
  d3.select('#laser-words')
      .selectAll('rect')
      .remove();

  d3.select('#svg-laser-text')
    .remove();
  d3.select('svg')
    .append('text')
      .attr('x', '0.25in')
      .attr('id', 'svg-laser-text')
      .attr('y', '1in')
      .text(content)
      .attr('font-family', "Open Sans")
      .style('text-transform', 'uppercase')
      .style('letter-spacing', '-5px')
      .attr('font-size', '95')
      .attr('fill', '#16161d')
      .attr('width', function () {
        return this.getBBox().width;
      });
  if (content == '') {
    addText('Enter Text');
  }
}

function addDownloadLink () {

    var html = d3.select("svg")
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

    d3.select("#downloadbutton")
        .attr("title", "laser-name.svg")
        .attr("href-lang", "image/svg+xml")
        .attr("href", "data:image/svg+xml;base64,\n" + btoa(html))
}

function draw(content) {
  //write text to svg
  addText(content);

  //add an underline
  drawBottomRectangle();


  //resize to correct width
  resizeToTwoInchesTall();

  addDownloadLink();


}



draw('Hello World');
d3.select("#design-text").on("input", function() {
  draw(this.value)

});




//TODO:
//union of paths
//remove fill, add stroke
//bonus points:
//place it on a sheet of 24x12
