<template>
    <UCard title="近一年使用情况">
        <div class="h-300 relative top--25" ref="chartRef"></div>
    </UCard>
</template>

<script setup lang="ts">
import echarts from '@/echarts'
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption, LineSeriesOption } from 'echarts/charts'
import type { GridComponentOption, DatasetComponentOption, TooltipComponentOption, LegendComponentOption } from 'echarts/components'

type Option = ComposeOption<
    BarSeriesOption |
    LineSeriesOption |
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
        grid: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0,
            containLabel: true
        },
        legend: {
            right: 0,
            itemGap: 20,
            itemWidth: 12,
            itemHeight: 12,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#465A64'
                    }
                },
                axisLabel: {
                    color: '#7d828f'
                }
            },
        ],
        yAxis: [
            {
                id: 'user',
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#465A64'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#465A64'
                    }
                },
                axisLabel: {
                    color: '#7d828f'
                }
            },
            {
                id: 'session',
                type: 'value',
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#465A64'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#7d828f'
                }
            }
        ],
        series: [
            {
                type: 'bar',
                yAxisId: 'user',
                barWidth: 10,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#0EECE4'
                        },
                        {
                            offset: 1,
                            color: '#058FE7'
                        }
                    ])
                }
            },
            {
                type: 'line',
                yAxisId: 'session',
                smooth: true,
                z: 0,
                lineStyle: {
                    width: 4,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(119, 214, 255,.1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(119, 214, 255, 1)'
                        },
                    ])
                },
                showSymbol: false,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(117, 212, 252,.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(117, 212, 252,.1)'
                        }
                    ])
                }
            }
        ],
        dataset: {
            dimensions: ['time', '用户数', '对话数'],
            source: [
                ['23-01', 1500, 1000],
                ['23-02', 2100, 2000],
                ['23-03', 2000, 1000],
                ['23-04', 2100, 1500],
                ['23-05', 200, 3210],
                ['23-06', 3589, 1220],
                ['23-07', 2200, 1790],
                ['23-08', 2100, 1000],
                ['23-09', 2100, 1000],
                ['23-10', 3781, 736],
                ['23-11', 2100, 1000],
                ['23-12', 789, 1700],
            ]
        }
    })
});

chartResize(chart);
</script>

<style scoped></style>