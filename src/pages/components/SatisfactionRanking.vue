<template>
    <UCard title="满意度排行榜" v-model:tab="tab" :tabs="tabs">
        <div v-for="(item, index) of list" :key="index">
            <div class="flex items-center py-12 text-(14 #fff)">
                <span class="ml-18 mr-8">No.{{ index + 1 }}</span>
                <span>{{ item.name }}</span>
                <span class="ml-auto">{{ item.value }}</span>
                <span class="text-#566276">%</span>
            </div>
            <div class="relative h-8 bg-[rgba(255,255,255,.1)]">
                <div class="absolute h-full bg-gradient-(to-r from-#1890FF to-#1EE7E7) bg-clip-(border,padding)"
                    :style="{ width: `${item.value}%` }">
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
    { name: 'Java程序设计', value: 98 },
    { name: 'Java程序设计', value: 88 },
    { name: 'Java程序设计', value: 80 },
    { name: 'Java程序设计', value: 78 },
    { name: 'Java程序设计', value: 64 },
    { name: 'Java程序设计', value: 55 },
    { name: 'Java程序设计', value: 46 },
    { name: 'Java程序设计', value: 43 },
    { name: 'Java程序设计', value: 32 },
    { name: 'Java程序设计', value: 30 }

]

</script>

<style scoped></style>