<template>
    <UCard title="班级间对比">
        <div class="pt-14 text-(#fff 14)">
            <div class="grid-(~ cols-[3fr_2fr]) bg-gradient-(to-t from-#1C3B68 to-#2F3D52/9)">
                <div class="px-12 py-9">指标</div>
                <div class="py-9 text-center">名次</div>
            </div>
            <div v-for="(item, index) of list" :key="index" class="grid-(~ cols-[3fr_2fr])">
                <div class="b-(1 solid #465A64 t-transparent) px-12 py-14.2">{{ item.name }}</div>
                <div class="b-(1 solid #465A64 t-transparent l-transparent) py-14.2 text-center">{{ item.value }}
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
interface Item {
    name: string;
    value: number;
}

const list = ref<Item[]>([
    {
        name: '对话数',
        value: 3
    },
    {
        name: '用户数',
        value: 3
    },
    {
        name: '好评数',
        value: 3
    },
    {
        name: '差评数',
        value: 3
    },
])
</script>

<style scoped></style>