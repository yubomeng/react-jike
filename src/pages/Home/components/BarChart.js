// 柱状图
import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

// 1.把功能代码都放在这个组件中
// 2.把可变的部分抽象成prop参数
const BarChart = ({ title, xData, sData, style = { width: '400px', height: '300px' } }) => {
    const chartRef = useRef(null)
    useEffect(() => {
        // 1. 图表初始化生成图表实例对象
        const myChart = echarts.init(chartRef.current)
        // 2. 准备图表参数
        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: xData
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: sData,
                    type: 'bar'
                }
            ]
        }
        // 3. 渲染参数
        myChart.setOption(option)
    }, [title, xData,sData])



    return (
        <div ref={chartRef} style={style} />
    )
}

export default BarChart