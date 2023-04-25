import React, { useRef, useEffect, useState }  from 'react'
import { createChart } from 'lightweight-charts';

function Chart({ title, data, histogram=false }) {
    const ref = useRef(null)
    const toolTip = useRef(null)
    const [price, setPrice] = useState(0)
    const [dateStr, setDateStr] = useState('')

    useEffect(() => {
        const chart = createChart(ref.current, { 
                width: 0, 
                height: 300, rightPriceScale: {
                scaleMargins: {
                    top: 0.35,
                    bottom: 0.2,
                },
                borderVisible: false,
            },
            timeScale: {
            borderVisible: false,
            }}
        );
        
        const series = histogram ? 
            chart.addHistogramSeries({
                color: 'rgba(19, 40, 153, 1.0)',
            }) 
                :
            chart.addAreaSeries({
                topColor: 'rgba(19, 68, 193, 0.4)',
                bottomColor: 'rgba(0, 120, 255, 0.0)',
                lineColor: 'rgba(19, 40, 153, 1.0)',
                lineWidth: 3
            });

        series.setData(data);

        toolTip.current.style.display = 'block';
        toolTip.current.style.left = 3 + 'px';
        toolTip.current.style.top = 3 + 'px';

        chart.subscribeCrosshairMove(function(param) {
          if (  param === undefined || param.time === undefined || param.point.x < 0 || 
                param.point.x > ref.current.width || param.point.y < 0 || 
                param.point.y > ref.current.height ) return;

          const dataPoint: any = param.seriesData.get(series);
          setPrice(dataPoint.value !== undefined ? dataPoint.value : dataPoint.close)
          setDateStr(param.time.toString())
        })}
    , [])

    return (
        <>
            <div style={{margin: 10}} ref={ref}>
                <div ref={toolTip} style={{
                	width: "200px",
                	height: "70px",
                	position: "absolute",
                	padding: "8px",
                	fontSize: "12px",
                	color: '#20262E',
                	backgroundColor: "rgba(255, 255, 255, 0.23)",
                	textAlign: "left",
                	zIndex: 1000,
                	pointerEvents: "none"
                }}>
                    <div style={{fontSize: "24px", margin: "4px 0px", color: "#20262E"}}> 
                        {title}
                    </div>
                    <div style={{fontSize: "22px", margin: "4px 0px", color: "#20262E"}}>
                        {(Math.round(price * 100) / 100).toFixed(2)}
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