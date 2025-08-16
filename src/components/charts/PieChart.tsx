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
    const margin = { top: 50, right: 120, bottom: 50, left: 50 };
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
      .innerRadius(radius * 0.5) // Donut chart
      .outerRadius(radius * 0.8);

    // Create data for pie chart
    const pieData = data.labels.map((label, i) => ({
      label,
      value: data.values[i],
      color: data.colors?.[i] || 'hsl(var(--primary))'
    }));

    // Add gradient definitions
    const defs = svg.append('defs');
    
    pieData.forEach((item, i) => {
      const gradient = defs.append('radialGradient')
        .attr('id', `pie-gradient-${i}`)
        .attr('gradientUnits', 'userSpaceOnUse');
      
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', item.color)
        .attr('stop-opacity', 1);
      
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', item.color)
        .attr('stop-opacity', 0.7);
    });

    // Add pie slices with gradients
    const slices = chart.selectAll('.slice')
      .data(pie(pieData))
      .enter()
      .append('g')
      .attr('class', 'slice');

    slices.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => `url(#pie-gradient-${i})`)
      .attr('stroke', 'hsl(var(--background))')
      .attr('stroke-width', 3)
      .style('transition', 'all 0.3s ease')
      .style('filter', 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))')
      .on('mouseover', function() {
        d3.select(this)
          .attr('transform', 'scale(1.05)')
          .attr('stroke-width', 4)
          .style('filter', 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))');
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('transform', 'scale(1)')
          .attr('stroke-width', 3)
          .style('filter', 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))');
      });

    // Add percentage labels in the center of each slice
    const labelArc = d3.arc<d3.PieArcDatum<{ label: string; value: number; color: string }>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.6);

    slices.append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('font-weight', '700')
      .attr('fill', 'hsl(var(--background))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .style('text-shadow', '0 1px 2px rgba(0, 0, 0, 0.5)')
      .text(d => `${((d.data.value / d3.sum(pieData, d => d.value)) * 100).toFixed(1)}%`);

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

    // Add enhanced legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - margin.right + 20}, ${margin.top + 20})`);

    const legendItems = legend.selectAll('.legend-item')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 25})`)
      .style('cursor', 'pointer')
      .on('mouseover', function() {
        d3.select(this).select('rect').attr('opacity', 0.8);
        d3.select(this).select('text').attr('font-weight', '700');
      })
      .on('mouseout', function() {
        d3.select(this).select('rect').attr('opacity', 1);
        d3.select(this).select('text').attr('font-weight', '500');
      });

    legendItems.append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('fill', d => d.color)
      .attr('rx', 3)
      .attr('ry', 3)
      .style('filter', 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))');

    legendItems.append('text')
      .attr('x', 24)
      .attr('y', 12)
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .attr('fill', 'hsl(var(--foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .text(d => {
        const label = d.label.length > 12 ? d.label.substring(0, 12) + '...' : d.label;
        return `${label} (${d.value})`;
      });

    // Add total in center
    const total = d3.sum(pieData, d => d.value);
    chart.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '700')
      .attr('fill', 'hsl(var(--foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .text('Total');

    chart.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .attr('font-size', '20px')
      .attr('font-weight', '900')
      .attr('fill', 'hsl(var(--primary))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .text(total.toLocaleString());

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
