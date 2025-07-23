import Section from '../Section';
import React from 'react';
import Plot from 'react-plotly.js';

const JumlahKK = () => {
  return (
    <Section
      title={"Jumlah Kepala Keluarga"}
      description={"Perkembangan jumlah kepala keluarga di Desa Sukolilo dari tahun ke tahun"}
      padBot="2rem"
    >
      <div className='pt-10'>
        <Plot
          data={[
            {
              x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
              y: [175, 180, 185, 220, 225, 230, 235, 190, 195, 200, 205, 210, 215],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {
                color: '#2F9CFF',
                size: 8
              },
              line: {
                width: 3
              },
              name: 'Jumlah KK'
            }
          ]}
          layout={{
            width: 1000,
            height: 500,
            margin: { t: 50, r: 50, l: 50, b: 50 },
            xaxis: {
              title: 'Tahun',
              gridwidth: 1
            },
            yaxis: {
              title: 'Jumlah KK',
              gridwidth: 1
            },
            paper_bgcolor: '#EEF8FF',
            plot_bgcolor: '#EEF8FF'
          }}
          config={{
            responsive: true,
            displayModeBar: false
          }}
        />
      </div>
    </Section>
  );
};

export default JumlahKK;