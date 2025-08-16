'use client';

import { useEffect, useRef, useState } from 'react';
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
        
        // Ensure minimum width for legend visibility
        if (newWidth < 500) {
          newWidth = Math.max(newWidth, 400); // Minimum width to accommodate legend
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
    
    // Create data for chart first (needed for margin calculation)
    const chartData = data.labels.map((label, i) => ({
      label,
      value: data.values[i],
      color: data.colors?.[i] || 'hsl(var(--primary))'
    }));
    
    // Calculate required left margin for Y-axis labels
    const getLongestLabelWidth = () => {
      const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const tempText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      tempText.setAttribute('font-size', '10px');
      tempText.setAttribute('font-family', 'system-ui, -apple-system, sans-serif');
      tempSvg.appendChild(tempText);
      document.body.appendChild(tempSvg);
      
      let maxWidth = 0;
      chartData.forEach(item => {
        tempText.textContent = item.label;
        const bbox = tempText.getBBox();
        maxWidth = Math.max(maxWidth, bbox.width);
      });
      
      document.body.removeChild(tempSvg);
      return maxWidth;
    };
    
    const longestLabelWidth = getLongestLabelWidth();
    const requiredLeftMargin = Math.max(isMobile ? 80 : 50, longestLabelWidth + 20); // Add padding
    
    // Responsive margins - prioritize Y-axis labels
    const margin = { 
      top: isMobile ? 40 : 50, 
      right: isMobile ? 60 : 120,
      bottom: isMobile ? 40 : 50, 
      left: requiredLeftMargin
    };
    
    const innerWidth = chartWidth - margin.left - margin.right;
    const innerHeight = chartHeight - margin.top - margin.bottom;
    
    // If the chart becomes too narrow, adjust margins to ensure minimum chart width
    const minChartWidth = isMobile ? 200 : 300;
    if (innerWidth < minChartWidth) {
      const adjustedLeftMargin = chartWidth - minChartWidth - margin.right;
      margin.left = Math.max(adjustedLeftMargin, longestLabelWidth + 10); // Still ensure labels fit
    }

    if (isMobile) {
      // Horizontal bar chart for mobile
      const chart = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // Create scales for horizontal bars
      const xScale = d3.scaleLinear()
        .domain([0, d3.max(chartData, d => d.value) || 0])
        .range([0, innerWidth])
        .nice();

      const yScale = d3.scaleBand()
        .domain(chartData.map(d => d.label))
        .range([0, innerHeight])
        .padding(0.2);

      // Add gradient definitions
      const defs = svg.append('defs');
      
      chartData.forEach((item, i) => {
        const gradient = defs.append('linearGradient')
          .attr('id', `mobile-gradient-${i}`)
          .attr('gradientUnits', 'userSpaceOnUse');
        
        gradient.append('stop')
          .attr('offset', '0%')
          .attr('stop-color', item.color)
          .attr('stop-opacity', 0.8);
        
        gradient.append('stop')
          .attr('offset', '100%')
          .attr('stop-color', item.color)
          .attr('stop-opacity', 1);
      });

      // Add horizontal bars
      chart.selectAll('.bar')
        .data(chartData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', 0)
        .attr('y', d => yScale(d.label) || 0)
        .attr('width', d => Math.min(xScale(d.value), innerWidth)) // Ensure bar doesn't exceed chart width
        .attr('height', yScale.bandwidth())
        .attr('fill', (d, i) => `url(#mobile-gradient-${i})`)
        .attr('rx', 8)
        .attr('ry', 8)
        .style('transition', 'all 0.3s ease')
        .style('filter', 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))')
        .on('mouseover', function() {
          d3.select(this)
            .attr('transform', 'scale(1.02)')
            .style('filter', 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))');
        })
        .on('mouseout', function() {
          d3.select(this)
            .attr('transform', 'scale(1)')
            .style('filter', 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))');
        });

      // Add value labels on bars
      if (innerHeight > 100) {
        chart.selectAll('.bar-label')
          .data(chartData)
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
          .text(d => `${d.value} (${((d.value / d3.sum(chartData, d => d.value)) * 100).toFixed(1)}%)`);
      }

      // Add axes
      const xAxis = d3.axisBottom(xScale).ticks(3);
      const yAxis = d3.axisLeft(yScale);

      // X-axis
      chart.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .call(xAxis)
        .selectAll('text')
        .attr('font-size', '10px')
        .attr('font-weight', '500')
        .attr('fill', 'hsl(var(--muted-foreground))')
        .style('font-family', 'system-ui, -apple-system, sans-serif');

      // Y-axis with improved label handling
      chart.append('g')
        .call(yAxis)
        .selectAll('text')
        .attr('font-size', '10px')
        .attr('font-weight', '500')
        .attr('fill', 'hsl(var(--muted-foreground))')
        .style('font-family', 'system-ui, -apple-system, sans-serif')
        .text(d => {
          // Truncate labels if they're too long for the available space
          const maxLength = Math.floor(margin.left / 8); // Approximate characters per pixel
          return d.length > maxLength ? d.substring(0, maxLength - 3) + '...' : d;
        });

      // Style axis lines
      chart.selectAll('.domain')
        .attr('stroke', 'hsl(var(--border))')
        .attr('stroke-width', 1);

      chart.selectAll('.tick line')
        .attr('stroke', 'hsl(var(--border))')
        .attr('stroke-width', 0.5)
        .attr('stroke-dasharray', '2,2');

    } else {
      // Pie chart for desktop
      const radius = Math.min(innerWidth, innerHeight) / 2;

      // Create chart group
      const chart = svg.append('g')
        .attr('transform', `translate(${chartWidth / 2}, ${chartHeight / 2})`);

      // Create pie generator
      const pie = d3.pie<{ label: string; value: number; color: string }>()
        .value(d => d.value)
        .sort(null);

      // Create arc generator
      const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number; color: string }>>()
        .innerRadius(radius * 0.5) // Donut chart
        .outerRadius(radius * 0.8);

      // Add gradient definitions
      const defs = svg.append('defs');
      
      chartData.forEach((item, i) => {
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
        .data(pie(chartData))
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

      // Add percentage labels in the center of each slice (only if there's enough space)
      if (radius > 50) {
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
          .text(d => `${((d.data.value / d3.sum(chartData, d => d.value)) * 100).toFixed(1)}%`);
      }

      // Add enhanced legend (only if there's enough space)
      if (chartWidth > 400) {
        // Calculate legend position more carefully to prevent cutoff
        const legendX = Math.min(chartWidth - margin.right + 20, chartWidth - 30); // Ensure legend doesn't go off-screen
        const legend = svg.append('g')
          .attr('transform', `translate(${legendX}, ${margin.top + 20})`);

        const legendItems = legend.selectAll('.legend-item')
          .data(chartData)
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
            // Truncate label more aggressively if space is limited
            const maxLabelLength = chartWidth < 600 ? 8 : 12;
            const label = d.label.length > maxLabelLength ? d.label.substring(0, maxLabelLength) + '...' : d.label;
            // Use more compact format for smaller screens
            const text = chartWidth < 500 ? `${label}` : `${label} (${d.value})`;
            return text;
          });
      }

      // Add total in center (only if there's enough space)
      if (radius > 30) {
        const total = d3.sum(chartData, d => d.value);
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
      }
    }

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
