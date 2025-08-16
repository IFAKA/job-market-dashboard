'use client';

import { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(width);
  const [chartHeight, setChartHeight] = useState(height);

  // Responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        
        // Responsive sizing based on screen size
        let newWidth = Math.min(containerWidth - 32, 800); // Max width with padding
        let newHeight = Math.min(containerHeight - 32, 500); // Max height with padding
        
        // Mobile adjustments
        if (window.innerWidth < 768) {
          newWidth = containerWidth - 16; // Smaller padding on mobile
          newHeight = Math.min(newHeight, 350); // Smaller height on mobile
          
          // Ensure minimum width for mobile charts
          if (newWidth < 300) {
            newWidth = 300;
          }
        }
        
        setChartWidth(newWidth);
        setChartHeight(newHeight);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (!data.labels.length || !svgRef.current || !chartWidth || !chartHeight) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const isMobile = window.innerWidth < 768;
    
    // Responsive margins
    const margin = { 
      top: isMobile ? 40 : 50, 
      right: isMobile ? 60 : 30, // Increased right margin for mobile to accommodate labels
      bottom: isMobile ? 60 : 80, 
      left: isMobile ? 80 : 80 // Increased left margin for mobile to accommodate labels
    };
    
    const innerWidth = chartWidth - margin.left - margin.right;
    const innerHeight = chartHeight - margin.top - margin.bottom;

    // Create scales - horizontal on mobile, vertical on desktop
    let xScale, yScale;
    
    if (isMobile) {
      // Horizontal bars for mobile
      xScale = d3.scaleLinear()
        .domain([0, d3.max(data.values) || 0])
        .range([0, innerWidth])
        .nice();

      yScale = d3.scaleBand()
        .domain(data.labels)
        .range([0, innerHeight])
        .padding(0.2);
    } else {
      // Vertical bars for desktop
      xScale = d3.scaleBand()
        .domain(data.labels)
        .range([0, innerWidth])
        .padding(0.2);

      yScale = d3.scaleLinear()
        .domain([0, d3.max(data.values) || 0])
        .range([innerHeight, 0])
        .nice();
    }

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
    if (isMobile) {
      // Horizontal bars for mobile
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
        .attr('x', 0)
        .attr('y', d => yScale(d.label) || 0)
        .attr('width', d => Math.min(xScale(d.value), innerWidth)) // Ensure bar doesn't exceed chart width
        .attr('height', yScale.bandwidth())
        .attr('fill', d => `url(#${d.gradientId})`)
        .attr('rx', 8)
        .attr('ry', 8)
        .style('transition', 'all 0.3s ease')
        .style('filter', 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))')
        .on('mouseover', function() {
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

      // Add value labels on horizontal bars
      if (innerHeight > 100) {
        chart.selectAll('.bar-label')
          .data(data.labels.map((label, i) => ({ label, value: data.values[i] })))
          .enter()
          .append('text')
          .attr('class', 'bar-label')
          .attr('x', d => Math.min(xScale(d.value) + 8, innerWidth - 5)) // Ensure label doesn't go off chart
          .attr('y', d => (yScale(d.label) || 0) + yScale.bandwidth() / 2)
          .attr('text-anchor', 'end') // Right-align text
          .attr('dominant-baseline', 'middle')
          .attr('fill', 'hsl(var(--foreground))')
          .attr('font-size', '10px')
          .attr('font-weight', '700')
          .attr('font-family', 'system-ui, -apple-system, sans-serif')
          .text(d => d.value.toLocaleString());
      }
    } else {
      // Vertical bars for desktop
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
        .attr('height', d => innerHeight - yScale(d.value))
        .attr('fill', d => `url(#${d.gradientId})`)
        .attr('rx', 8)
        .attr('ry', 8)
        .style('transition', 'all 0.3s ease')
        .style('filter', 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))')
        .on('mouseover', function() {
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

      // Add value labels on vertical bars
      if (innerHeight > 100) {
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
      }
    }

    // Add axes with better styling
    if (isMobile) {
      // Horizontal axes for mobile
      const xAxis = d3.axisBottom(xScale).ticks(isMobile ? 3 : 5);
      const yAxis = d3.axisLeft(yScale);

      // X-axis (bottom)
      chart.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .call(xAxis)
        .selectAll('text')
        .attr('font-size', '10px')
        .attr('font-weight', '500')
        .attr('fill', 'hsl(var(--muted-foreground))')
        .style('font-family', 'system-ui, -apple-system, sans-serif');

      // Y-axis (left)
      chart.append('g')
        .call(yAxis)
        .selectAll('text')
        .attr('font-size', '10px')
        .attr('font-weight', '500')
        .attr('fill', 'hsl(var(--muted-foreground))')
        .style('font-family', 'system-ui, -apple-system, sans-serif');
    } else {
      // Vertical axes for desktop
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).ticks(5);

      // X-axis
      chart.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
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
    }

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
      .attr('x', chartWidth / 2)
      .attr('y', isMobile ? 20 : 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', isMobile ? '14px' : '16px')
      .attr('font-weight', '700')
      .attr('fill', 'hsl(var(--foreground))')
      .style('font-family', 'system-ui, -apple-system, sans-serif')
      .text(title);

    // Add subtitle (only if there's enough space)
    if (chartHeight > 80) {
      svg.append('text')
        .attr('x', chartWidth / 2)
        .attr('y', isMobile ? 35 : 45)
        .attr('text-anchor', 'middle')
        .attr('font-size', isMobile ? '10px' : '12px')
        .attr('font-weight', '400')
        .attr('fill', 'hsl(var(--muted-foreground))')
        .style('font-family', 'system-ui, -apple-system, sans-serif')
        .text(`${data.values.reduce((a, b) => a + b, 0).toLocaleString()} total positions`);
    }

  }, [data, title, chartWidth, chartHeight]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-[300px] p-4 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <svg
        ref={svgRef}
        width={chartWidth}
        height={chartHeight}
        className="w-full h-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
