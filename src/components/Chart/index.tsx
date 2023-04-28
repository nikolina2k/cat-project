import React, { useRef, useEffect, useState, useContext, useLayoutEffect }  from 'react'
import { createChart, ColorType, MouseEventHandler, MouseEventParams } from 'lightweight-charts';
import { ConfigProvider } from 'antd';

var formatters = {
	Dollar: function(price: number) { return '$' + price.toFixed(2); },
	Pound: function(price: number) { return '\u00A3' + price.toFixed(2); },
};

function Chart({ title, data, width=0, histogram=false }) {
    const chartHeight = 300
    const resizeTimerInterval = 100

    const chartRef = useRef(null)
    const toolTipRef = useRef(null)
    const [price, setPrice] = useState(0)
    const [dateStr, setDateStr] = useState('')
    const [chartCreated, setChartCreated] = useState(null)
    const theme = useContext(ConfigProvider.ConfigContext).theme
    let resizeTimer = null;

    useEffect(() => {
        const chart = createChart(chartRef.current, { 
                width: width, 
                height: chartHeight, 
                rightPriceScale: {
                    scaleMargins: {
                        top: histogram ? 0.3 : 0.35,
                        bottom: 0,
                    },
                    borderVisible: false,
                },
                timeScale: {
                    borderVisible: false,
                },
                localization: {
                    priceFormatter: formatters['Dollar'],
                },
                layout: {
                    background: {
                        color: 'transparent',
                    },
                },
            }
        );
        setChartCreated(chart)
        
        const series = histogram ? 
            chart.addHistogramSeries({
                color: theme.token.colorPrimary,
            }) 
                :
            chart.addAreaSeries({
                topColor: theme.token.colorPrimary + "50",
                bottomColor: theme.token.colorPrimary + "00",
                lineColor: theme.token.colorPrimary,
                lineWidth: 3
            });

        series.setData(data);

        function onCrosshairMove(param: MouseEventParams): MouseEventHandler {
            if (param === undefined || param.time === undefined || param.point.x < 0 || 
                param.point.x > chartRef.current.width || param.point.y < 0 || 
                param.point.y > chartRef.current.height ) return;
        
            const dataPoint: any = param.seriesData.get(series);
            setPrice(dataPoint.value !== undefined ? dataPoint.value : dataPoint.close)
            setDateStr(param.time.toString())
        }

        chart.subscribeCrosshairMove(onCrosshairMove)

        const lastPoint = data[data.length - 1]
        console.log(lastPoint)
        setPrice(lastPoint.value)
        setDateStr(lastPoint.time.toString())
    }, [])



    window.addEventListener('resize', () => {
        if (!width && chartRef.current) {
            clearInterval(resizeTimer);
            resizeTimer = setTimeout(
                () => chartCreated?.resize(chartRef.current.offsetWidth, chartHeight), 
                resizeTimerInterval
            );
        }
    });

    return (
        <>
            <div style={{margin: 10}} ref={chartRef}>
                <div ref={toolTipRef} style={{
                	width: "200px",
                	height: "70px",
                    left: "8px",
                    top: "0px",
                	position: "absolute",
                	padding: "8px",
                	fontSize: "12px",
                	color: '#20262E',
                	textAlign: "left",
                	zIndex: 1000,
                	pointerEvents: "none"
                }}>
                    <div style={{fontSize: "24px", margin: "4px 0px", color: "#20262E"}}> 
                        {title}
                    </div>
                    <div style={{fontSize: "22px", margin: "4px 0px", color: "#20262E"}}>
                        {formatters['Dollar'](price)}
                    </div>
                    <div>
                        {dateStr}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart
export const exportedForTesting = {
    formatters
}