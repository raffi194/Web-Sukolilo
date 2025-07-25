import Section from '../Section';
import React, { useEffect, useState, useMemo } from 'react';
import Plot from 'react-plotly.js';

const JumlahKK = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState([]);

  const chartData = useMemo(() => ({
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    kkCounts: [175, 180, 185, 220, 225, 230, 235, 190, 195, 200, 205, 210, 215]
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const target = document.getElementById('jumlah-kk-chart-container');
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const { years, kkCounts } = chartData;
    const initialData = {
      x: years,
      y: Array(years.length).fill(0),
      type: 'bar',
      marker: { color: '#2F9CFF' },
      name: 'Jumlah KK'
    };

    setAnimatedData([initialData]);

    const animate = () => {
      const increment = 5;
      const duration = 1000;
      const steps = Math.max(...kkCounts) / increment;
      const stepInterval = duration / steps;

      let currentValues = Array(years.length).fill(0);

      const animation = setInterval(() => {
        const newValues = currentValues.map((val, idx) =>
          Math.min(val + increment, kkCounts[idx])
        );

        setAnimatedData([{
          ...initialData,
          y: newValues
        }]);

        currentValues = newValues;

        if (newValues.every((val, idx) => val >= kkCounts[idx])) {
          clearInterval(animation);
          setAnimatedData([{
            ...initialData,
            y: kkCounts
          }]);
        }
      }, stepInterval);

      return () => clearInterval(animation);
    };

    return animate();
  }, [isVisible, chartData]);

  const chartLayout = useMemo(() => ({
    autosize: true,
    margin: { t: 40, r: 30, l: 40, b: 60 },
    xaxis: {
      title: 'Tahun',
      type: 'category',
      automargin: true,
      tickangle: window.innerWidth < 640 ? -30 : -45
    },
    yaxis: {
      title: 'Jumlah KK',
      automargin: true
    },
    paper_bgcolor: '#EEF8FF',
    plot_bgcolor: '#EEF8FF',
    hovermode: 'closest'
  }), []);

  const chartConfig = {
    responsive: true,
    displayModeBar: false,
    scrollZoom: false
  };

  return (
    <Section
      title="Jumlah Kepala Keluarga"
      description="Perkembangan jumlah kepala keluarga di Desa Sukolilo dari tahun ke tahun"
      padBot="2rem"
    >
      <div
        id="jumlah-kk-chart-container"
        className={`pt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {isVisible && animatedData.length > 0 ? (
          <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
            <Plot
              data={animatedData}
              layout={chartLayout}
              config={chartConfig}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 animate-pulse">Memuat data chart...</div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default JumlahKK;
