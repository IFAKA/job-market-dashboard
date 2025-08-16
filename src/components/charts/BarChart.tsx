'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ChartData } from '@/types/job';

interface BarChartProps {
  data: ChartData;
  title: string;
  height?: number;
  width?: number;
}

export function BarChart({ data, title, height = 300, width = 400 }: BarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data.labels.length || !svgRef.current) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const margin = { top: 40, right: 20, bottom: 60, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.labels)
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data.values) || 0])
      .range([chartHeight, 0])
      .nice();

    // Create chart group
    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Add bars
    chart.selectAll('.bar')
      .data(data.labels.map((label, i) => ({ label, value: data.values[i], color: data.colors?.[i] || 'hsl(var(--primary))' })))
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.label) || 0)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(d.value))
      .attr('fill', d => d.color)
      .attr('rx', 4)
      .attr('ry', 4)
      .style('transition', 'all 0.3s ease')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('opacity', 0.8)
          .attr('transform', 'scale(1.05)');
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('opacity', 1)
          .attr('transform', 'scale(1)');
      });

    // Add value labels on bars
    chart.selectAll('.bar-label')
      .data(data.labels.map((label, i) => ({ label, value: data.values[i] })))
      .enter()
      .append('text')
      .attr('class', 'bar-label')
      .attr('x', d => (xScale(d.label) || 0) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.value) - 5)
      .attr('text-anchor', 'middle')
      .attr('fill', 'hsl(var(--foreground))')
      .attr('font-size', '12px')
      .attr('font-weight', '600')
      .text(d => d.value);

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    chart.append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .attr('text-anchor', 'end')
      .attr('font-size', '10px')
      .attr('fill', 'hsl(var(--muted-foreground))');

    chart.append('g')
      .call(yAxis)
      .selectAll('text')
      .attr('font-size', '10px')
      .attr('fill', 'hsl(var(--muted-foreground))');

    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', 'hsl(var(--foreground))')
      .text(title);

  }, [data, title, height, width]);

  return (
    <div className="apple-watch-card p-4">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </div>
  );
}
