'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 85, category: 'Languages' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'Languages' },
  { name: 'C++', level: 80, category: 'Languages' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Flask', level: 80, category: 'Backend' },
  { name: 'Machine Learning', level: 75, category: 'AI/ML' },
  { name: 'NLP', level: 70, category: 'AI/ML' },
  { name: 'AWS', level: 65, category: 'Cloud' },
  { name: 'Docker', level: 70, category: 'DevOps' },
];

export default function SkillsGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;
    const margin = { top: 40, right: 120, bottom: 40, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, innerWidth]);

    const yScale = d3.scaleBand()
      .domain(skills.map(d => d.name))
      .range([0, innerHeight])
      .padding(0.2);

    // Create color scale for categories
    const colorScale = d3.scaleOrdinal()
      .domain(Array.from(new Set(skills.map(d => d.category))))
      .range(d3.schemeSet3);

    // Add bars
    svg.selectAll('.bar')
      .data(skills)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => yScale(d.name)!)
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colorScale(d.category))
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('x', 0)
      .on('mouseover', function(event, d) {
        d3.select(this).attr('opacity', 0.8);
        tooltip.style('opacity', 1)
          .html(`${d.name}<br>${d.level}% Proficiency<br>${d.category}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 1);
        tooltip.style('opacity', 0);
      })
      .transition()
      .duration(1000)
      .attr('width', d => xScale(d.level));

    // Add labels
    svg.selectAll('.label')
      .data(skills)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('y', d => yScale(d.name)! + yScale.bandwidth() / 2)
      .attr('x', -10)
      .attr('text-anchor', 'end')
      .attr('alignment-baseline', 'middle')
      .text(d => d.name)
      .style('fill', 'currentColor');

    // Add axes
    const xAxis = d3.axisBottom(xScale).ticks(5).tickFormat(d => d + '%');
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis);

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${innerWidth + 20}, 0)`);

    const categories = Array.from(new Set(skills.map(d => d.category)));
    
    legend.selectAll('.legend-item')
      .data(categories)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0,${i * 20})`)
      .call(g => {
        g.append('rect')
          .attr('width', 12)
          .attr('height', 12)
          .attr('fill', d => colorScale(d));
        
        g.append('text')
          .attr('x', 20)
          .attr('y', 10)
          .text(d => d)
          .style('fill', 'currentColor');
      });

    // Add tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background-color', 'rgba(0,0,0,0.8)')
      .style('color', 'white')
      .style('padding', '8px')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('pointer-events', 'none');

  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        className="mx-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
} 