<template>
    <div class="h-200" ref="chartRef"></div>
</template>

<script setup lang="ts">
import echarts from '@/echarts'
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption } from 'echarts/charts'
import type { DatasetComponentOption, TimelineComponentOption, PolarComponentOption, TitleComponentOption } from 'echarts/components'

type Option = ComposeOption<
    BarSeriesOption |
    DatasetComponentOption |
    TimelineComponentOption |
    PolarComponentOption |
    TitleComponentOption
>

interface Props {
    title: string;
    value: number;
    color: string;
}

const props = defineProps<Props>();

const chartRef = ref<HTMLDivElement>();
const chart = shallowRef<echarts.ECharts>();

onMounted(() => {
    chart.value = echarts.init(chartRef.value);
    chart.value.setOption<Option>({
        title: [
            {
                id: 'progress',
                text: "0%",
                left: 'center',
                top: '34%',
                textStyle: {
                    fontSize: "40",
                    color: props.color,
                    fontWeight: 700
                },
            },
            {
                text: props.title,
                left: 'center',
                top: '55%',
                textStyle: {
                    fontSize: "16",
                    color: "#A8D6FF",
                    fontWeight: 400
                },
            }
        ],
        polar: {
            center: ['50%', '50%'],
            radius: ['90%', '50%']
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: false
        },
        series: {
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            coordinateSystem: "polar",
            itemStyle: {
                color: props.color
            },
        },
    })
})

watchEffect(() => {
    chart.value?.setOption<Option>({
        title: [
            {
                id: 'progress',
                text: props.value + '%',
            },
        ],
        dataset: {
            source: [
                [props.title, props.value]
            ],
        }
    })
})

chartResize(chart);
</script>

<style scoped></style>