'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ChartData } from '@/types/job';

interface PieChartProps {
  data: ChartData;
  title: string;
  height?: number;
  width?: number;
}

export function PieChart({ data, title, height = 300, width = 400 }: PieChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data.labels.length || !svgRef.current) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const margin = { top: 40, right: 20, bottom: 40, left: 20 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const radius = Math.min(chartWidth, chartHeight) / 2;

    // Create chart group
    const chart = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create pie generator
    const pie = d3.pie<{ label: string; value: number; color: string }>()
      .value(d => d.value)
      .sort(null);

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number; color: string }>>()
      .innerRadius(radius * 0.4) // Donut chart
      .outerRadius(radius);

    // Create data for pie chart
    const pieData = data.labels.map((label, i) => ({
      label,
      value: data.values[i],
      color: data.colors?.[i] || 'hsl(var(--primary))'
    }));

    // Add pie slices
    const slices = chart.selectAll('.slice')
      .data(pie(pieData))
      .enter()
      .append('g')
      .attr('class', 'slice');

    slices.append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color)
      .attr('stroke', 'hsl(var(--background))')
      .attr('stroke-width', 2)
      .style('transition', 'all 0.3s ease')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('transform', 'scale(1.05)')
          .attr('stroke-width', 3);
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('transform', 'scale(1)')
          .attr('stroke-width', 2);
      });

    // Add labels
    const labelArc = d3.arc<d3.PieArcDatum<{ label: string; value: number; color: string }>>()
      .innerRadius(radius * 0.8)
      .outerRadius(radius * 0.8);

    slices.append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('font-weight', '600')
      .attr('fill', 'hsl(var(--foreground))')
      .text(d => d.data.label.length > 10 ? d.data.label.substring(0, 10) + '...' : d.data.label);

    // Add percentage labels
    slices.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', '700')
      .attr('fill', 'hsl(var(--background))')
      .text(d => `${((d.data.value / d3.sum(pieData, d => d.value)) * 100).toFixed(1)}%`);

    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', 'hsl(var(--foreground))')
      .text(title);

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 100}, ${height - 100})`);

    const legendItems = legend.selectAll('.legend-item')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`);

    legendItems.append('rect')
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', d => d.color)
      .attr('rx', 2);

    legendItems.append('text')
      .attr('x', 18)
      .attr('y', 9)
      .attr('font-size', '10px')
      .attr('fill', 'hsl(var(--foreground))')
      .text(d => d.label.length > 15 ? d.label.substring(0, 15) + '...' : d.label);

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
