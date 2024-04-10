<template>
    <UCard title="对话时长">
        <div class="h-300" ref="chartRef"></div>
    </UCard>
</template>

<script setup lang="ts">
import echarts from '@/echarts'
import type { ComposeOption } from 'echarts/core'
import type { PieSeriesOption } from 'echarts/charts'
import type { GridComponentOption, DatasetComponentOption, TooltipComponentOption, LegendComponentOption } from 'echarts/components'

type Option = ComposeOption<
    PieSeriesOption |
    GridComponentOption |
    TooltipComponentOption |
    LegendComponentOption |
    DatasetComponentOption
>

const chartRef = ref<HTMLDivElement>();
const chart = shallowRef<echarts.ECharts>();

onMounted(() => {
    chart.value = echarts.init(chartRef.value);
    chart.value.setOption<Option>({
        tooltip: {
            trigger: 'item'
        },
        legend: {
            width: 70,
            right: '10%',
            top: '30%',
            itemGap: 20,
            itemWidth: 12,
            itemHeight: 12,
            textStyle: {
                color: '#fff'
            }
        },
        series: {
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['35%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false,
            }
        },
        dataset: {
            source: [
                ['0-6时', 60],
                ['6-12时', 45],
                ['12-18时', 30],
                ['18-24时', 20]
            ]
        }
    })
})

chartResize(chart);
</script>

<style scoped></style>