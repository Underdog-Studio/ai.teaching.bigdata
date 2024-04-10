<template>
    <UCard title="对话排行TOP10" v-model:tab="tab" :tabs="tabs">
        <div class="mt-12 grid-(~ cols-[1fr] gap-y-12)">
            <div class="p-(y8 x12) bg-[rgba(255,255,255,.1)] grid-(~ cols-[4fr_4fr_1fr]) text-(14 #bbbec5)">
                <span>智能助教名称</span>
                <span>对话术</span>
                <span>排名</span>
            </div>
            <div v-for="(item, index) of list" class="b-(1 solid transparent) bg-gradient-(to-b from-#18FEFE to-#00A6FF)">
                <div class="p-(y8 x12) grid-(~ cols-[4fr_4fr_1fr]) bg-#040E27 text-(14 #fff)">
                    <div class="flex-(~ items-center)">
                        <img class="mr-8" src="@/assets/images/i_robot.svg" />
                        <span>{{ item.name }}</span>
                    </div>
                    <span>{{ item.value }}</span>
                    <div>{{ index + 1 }}</div>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import type { Tab } from '@/components/UCard.vue'

const tabs: Tab[] = [
    { key: 'all', value: '全部' },
    { key: 'pre', value: '上月' }
];
const tab = ref('all');

const list = [
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
    {
        name: 'Java机器人',
        value: 42146
    },
]
</script>

<style scoped></style>