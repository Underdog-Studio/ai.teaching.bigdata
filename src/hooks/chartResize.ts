import echarts from '@/echarts'

export function chartResize(chart: Ref<echarts.ECharts| undefined>) {
    onMounted(() => {
        window.addEventListener('resize', () => {
            chart.value?.resize();
        })
    })
}