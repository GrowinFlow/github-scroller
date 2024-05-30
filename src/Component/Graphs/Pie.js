import React, { useRef, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function Pie() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const svgElement = chartRef.current.querySelector('svg');
      // Manipulate the viewBox here
      svgElement.setAttribute('viewBox', '0 0 150 200'); // Change the viewBox
    }
  }, []);

  const data = [
    { id: 0, label: 'Js', value: 30 },
    { id: 1, label: 'C++', value: 80 },
    { id: 2, label: 'Py', value: 20 },
    { id: 3, label: 'R', value: 10 },
  ];

  return (
    <>

    <div ref={chartRef}>
      <PieChart
    series={[
      {
        data,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        type: 'pie',
        arcLabel: 'label',
      }
    ]}
    sx={{
      '& .MuiPieArcLabel-root': {
        fill: 'white', // Change label text color
        fontWeight: 'bold', // Apply font weight
      }
    }}
    slotProps={{legend: {hidden: true}}}
    width={250}
    height={200}
      />
    </div>
    </>
  );
}

export default Pie;
