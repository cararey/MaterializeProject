		var width = 400,
			height = 400,
			offset = 100,
			radius = Math.min(width, height) / 2;
		var color = d3.scale.ordinal()
			.range(['#FFBBCC', '#FFFFCC', '#FFDDCC', '#CCDDFF', '#CCFFDD']);
		var arc = d3.svg.arc()
			.outerRadius(radius)
			.innerRadius(radius - 180);
		/* second arc for labels*/
		var arc2 = d3.svg.arc()
		  .outerRadius(radius)
		  .innerRadius(radius + 2);
		var pie = d3.layout.pie()
			.sort(null)
			.startAngle(1.1*Math.PI)
			.endAngle(3.1*Math.PI)
			.value(function(d) { return d.level; });
		var data = [
		  {skill: '3D Modeling', level: 15},
		  {skill: 'HTML&CSS', level: 30},
		  {skill: 'Customer Service', level: 40},
		  {skill: 'Content Editing', level: 50},
		  {skill: 'Illustration', level: 45}
		];
		var svg = d3.select('body').append('svg')
			.attr('id', 'chart')
			.attr('width', width + offset)
			.attr('height', height + offset)
			.attr('viewBox', '0 0' + width + offset + ''+ height + offset +'')
			.attr('perserveAspectRatio', 'xMinYMid')
		    .append('g')
			.attr('transform', 'translate(' + (width + offset) / 2 + ',' + (height + offset) / 2 + ')');
		d3.select('body')
			.attr('align','center');
		  data.forEach(function(d) {
			d.level = +d.level;
		  });
		  var g = svg.selectAll('.arc')
			  .data(pie(data))
			  .enter().append('g')
			  .attr('class', 'arc');
		  g.append('path')
			  .style('fill', function(d) { return color(d.data.skill); })
			  .transition().delay(function(d, i) { return i * 2000; }).duration(500)
			  .attrTween('d', function(d) {
				 var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
				 return function(t) {
				   d.endAngle = i(t);
				   return arc(d);
				 };
			  });
		  g.append('text')
			  .attr('transform', function(d) { return 'translate(' + arc2.centroid(d) + ')'; })
			  .attr('dy', '.35em')
			  .attr('class', 'd3-label')
			  .style('text-anchor', 'middle')
			  .text(function(d) { return d.data.skill; });
		var aspect = width / height,
			chart = $('#chart');
		$(window).on('resize', function() {
			var targetWidth = Math.min(width + offset, chart.parent().width());
			chart.attr('width', targetWidth);
			chart.attr('height', targetWidth / aspect);
		}).trigger('resize');