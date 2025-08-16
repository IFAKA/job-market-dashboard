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
    const margin = { top: 50, right: 30, bottom: 80, left: 80 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.labels)
      .range([0, chartWidth])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data.values) || 0])
      .range([chartHeight, 0])
      .nice();

    // Create chart group
    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Add gradient definitions
    const defs = svg.append('defs');
    
    data.labels.forEach((label, i) => {
      const gradient = defs.append('linearGradient')
        .attr('id', `gradient-${i}`)
        .attr('gradientUnits', 'userSpaceOnUse');
      
      const color = data.colors?.[i] || 'hsl(var(--primary))';
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', color)
        .attr('stop-opacity', 0.8);
      
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', color)
        .attr('stop-opacity', 1);
    });

    // Add bars with gradients
    chart.selectAll('.bar')
      .data(data.labels.map((label, i) => ({ 
        label, 
        value: data.values[i], 
        color: data.colors?.[i] || 'hsl(var(--primary))',
        gradientId: `gradient-${i}`
      })))
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.label) || 0)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(d.value))
      .attr('fill', d => `url(#${d.gradientId})`)
      .attr('rx', 8)
      .attr('ry', 8)
      .style('transition', 'all 0.3s ease')
      .style('filter', 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('opacity', 0.9)
          .attr('transform', 'scale(1.02)')
          .style('filter', 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2))');
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('opacity', 1)
          .attr('transform', 'scale(1)')
          .style('filter', 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))');
      });

    // Add value labels on bars
    chart.selectAll('.bar-label')
      .data(data.labels.map((label, i) => ({ label, value: data.values[i] })))
      .enter()
      .append('text')
      .attr('class', 'bar-label')
      .attr('x', d => (xScale(d.label) || 0) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.value) - 8)
      .attr('text-anchor', 'middle')
      .attr('fill', 'hsl(var(--foreground))')
      .attr('font-size', '11px')
      .attr('font-weight', '700')
      .attr('font-family', 'system-ui, -apple-system, sans-serif')
      .text(d => d.value.toLocaleString());

    // Add axes with better styling
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    // X-axis
    chart.append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .attr('text-anchor', 'end')
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .attr('fill', 'hsl(var(--muted-foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif');

    // Y-axis
    chart.append('g')
      .call(yAxis)
      .selectAll('text')
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .attr('fill', 'hsl(var(--muted-foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif');

    // Style axis lines
    chart.selectAll('.domain')
      .attr('stroke', 'hsl(var(--border))')
      .attr('stroke-width', 1);

    chart.selectAll('.tick line')
      .attr('stroke', 'hsl(var(--border))')
      .attr('stroke-width', 0.5)
      .attr('stroke-dasharray', '2,2');

    // Add title with better styling
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', '700')
      .attr('fill', 'hsl(var(--foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .text(title);

    // Add subtitle
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 45)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', '400')
      .attr('fill', 'hsl(var(--muted-foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .text(`${data.values.reduce((a, b) => a + b, 0).toLocaleString()} total positions`);

  }, [data, title, height, width]);

  return (
    <div className="apple-watch-card p-6 hover:shadow-xl transition-all duration-300">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </div>
  );
}
