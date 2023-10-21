import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const Home = () => {
    const chartRef = useRef(null)
    useEffect(() => {
        // 1. 生成实例
        const myChart = echarts.init(chartRef.current)
        // 2. 准备图表参数
        const option = {
            xAxis: { 
                type: 'category',
                data: ['Vue', 'React', 'Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [10,20,50],
                    type: 'bar'
                }
            ]
        }
        // 3. 渲染参数
        myChart.setOption(option)
    }, [])

    return (
        <div>
            <div ref={chartRef} style={{ width: '400px', height: '300px' }} />
        </div >
    )
}

export default Home