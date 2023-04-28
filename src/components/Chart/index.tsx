import React, { useRef, useEffect, useState, useContext }  from 'react'
import { createChart } from 'lightweight-charts';
import { ConfigProvider } from 'antd';

var formatters = {
	Dollar: function(price: number) { return '$' + price.toFixed(2); },
	Pound: function(price: number) { return '\u00A3' + price.toFixed(2); },
};

const formatterNames = Object.keys(formatters);

function Chart({ title, data, width=0, histogram=false }) {
    const ref = useRef(null)
    const toolTip = useRef(null)
    const [price, setPrice] = useState(0)
    const [dateStr, setDateStr] = useState('')
    const [chartCreated, setChartCreated] = useState(null)
    const antdContext = useContext(ConfigProvider.ConfigContext)
    const theme = antdContext.theme
    const chartHeight = 300

    useEffect(() => {
        const chart = createChart(ref.current, { 
                width: 0, 
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
            }}
        );
        setChartCreated(chart)

        chart.applyOptions({
            localization: {
                priceFormatter: formatters['Dollar'],
            },
        });
        
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

        chart.subscribeCrosshairMove(function(param) {
          if (  param === undefined || param.time === undefined || param.point.x < 0 || 
                param.point.x > ref.current.width || param.point.y < 0 || 
                param.point.y > ref.current.height ) return;

          const dataPoint: any = param.seriesData.get(series);
          setPrice(dataPoint.value !== undefined ? dataPoint.value : dataPoint.close)
          setDateStr(param.time.toString())
        })}
    , [])
    
    //useEffect(() => {
    //    chartCreated && chartCreated.resize(width, chartHeight);
    //}, [width, chartCreated])

    return (
        <>
            <div style={{margin: 10}} ref={ref}>
                <div ref={toolTip} style={{
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