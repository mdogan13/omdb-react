import React from 'react';
import Chart from 'react-apexcharts';
import styles from './Metascore.module.scss'

interface MetascoreProps {
    score: number;
}

const Metascore: React.FC<MetascoreProps> = ({ score }) => {
    const getColor = (score: number) => {
        if (score >= 75) return '#28a745';
        if (score >= 50) return '#ffc107';
        return '#dc3545';
    };

    const options = {
        chart: {
            type: 'radialBar' as any,
            height: 140,
        },
        plotOptions: {
            radialBar: {
                hollow: { size: '60%' },
                dataLabels: {
                    show: true,
                    name: { show: false },
                    value: {
                        fontSize: '45px',
                        offsetY: 15,
                        color: getColor(score),
                        formatter: (val: number) => `${val}`
                    },
                },
            },
        },
        fill: {
            colors: [getColor(score)],
        },
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Chart options={options} series={[score]} type="radialBar" height={200} />
            <p className={styles.subtitle}>
                Metascore
            </p>
        </div>
    );
};

export default Metascore;

