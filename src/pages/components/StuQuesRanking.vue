<template>
    <UCard title="学生提问排行榜">
        <div class="pt-14 text-(#fff 14)">
            <div class="grid-(~ cols-[2fr_1fr_1fr]) bg-gradient-(to-t from-#1C3B68 to-#2F3D52/9)">
                <div class="px-12 py-9">学生姓名</div>
                <div class="py-9 text-center">对话数</div>
                <div class="py-9 text-center">排行</div>
            </div>
            <div v-for="(item, index) of list" :key="index" class="grid-(~ cols-[2fr_1fr_1fr])">
                <div class="b-(1 solid #465A64 t-transparent l-transparent) px-12 py-14.2">{{ item.name }}</div>
                <div class="b-(1 solid #465A64 t-transparent l-transparent) py-14.2 text-center">{{ item.value }}</div>
                <div class="b-(1 solid #465A64 t-transparent l-transparent r-transparent) py-14.2 text-center">
                    {{ index + 1 }}
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
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    },
    {
        name: '张伟己',
        value: 3124
    }
])
</script>

<style scoped></style>