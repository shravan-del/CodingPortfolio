'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsGraphProps {
  skills: Skill[];
}

export const SkillsGraph: React.FC<SkillsGraphProps> = ({ skills }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !skills.length) return;

    const margin = { top: 20, right: 30, bottom: 40, left: 120 };
    const width = 800 - margin.left - margin.right;
    const height = skills.length * 40;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(skills.map(d => d.name))
      .range([0, height])
      .padding(0.3);

    const colorScale = d3
      .scaleOrdinal<string>()
      .domain(Array.from(new Set(skills.map(d => d.category))))
      .range(d3.schemeCategory10);

    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('text-anchor', 'middle');

    // Add Y axis
    svg
      .append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .style('text-anchor', 'end');

    // Add bars
    svg
      .selectAll('rect')
      .data(skills)
      .enter()
      .append('rect')
      .attr('y', d => yScale(d.name)!)
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colorScale(d.category))
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('x', 0)
      .attr('width', 0)
      .transition()
      .duration(1000)
      .attr('width', d => xScale(d.level));

    // Add value labels
    svg
      .selectAll('.value-label')
      .data(skills)
      .enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('x', d => xScale(d.level) + 5)
      .attr('y', d => (yScale(d.name)! + yScale.bandwidth() / 2))
      .attr('dy', '0.35em')
      .text(d => `${d.level}%`)
      .style('fill', '#666')
      .style('font-size', '12px')
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .style('opacity', 1);

    // Add legend
    const categories = Array.from(new Set(skills.map(d => d.category)));
    const legendSpacing = 20;
    const legendRectSize = 15;

    const legend = svg
      .selectAll('.legend')
      .data(categories)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(0,${i * legendSpacing - margin.top})`);

    legend
      .append('rect')
      .attr('x', width - legendRectSize)
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .style('fill', d => colorScale(d));

    legend
      .append('text')
      .attr('x', width - legendRectSize - 5)
      .attr('y', legendRectSize / 2)
      .attr('dy', '0.35em')
      .style('text-anchor', 'end')
      .text(d => d);
  }, [skills]);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        className="w-full h-auto min-w-[800px]"
        style={{ maxHeight: `${skills.length * 40 + 60}px` }}
      />
    </div>
  );
}; 