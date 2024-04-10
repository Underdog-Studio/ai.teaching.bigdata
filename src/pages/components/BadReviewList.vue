<template>
    <div class="h-280">
        <div v-for="(item, index) of list" :key="index" class="mb-12">
            <div class="flex-(~ gap-x-12) mb-12">
                <div class="w-32 h-32 bg-#F6BB42 rd-50% flex-(~ justify-center items-center) text-(#fff 14) font-1000">问
                </div>
                <div class="flex-1 b-(1 solid #17FCFE) p-11 bg-#17FCFE/10 text-(#fff 14)">
                    <div class="line-clamp-2">{{ item.question }}</div>
                </div>
            </div>
            <div class="flex-(~ gap-x-12)">
                <div class="w-32 h-32 bg-#06F7A1 rd-50% flex-(~ justify-center items-center) text-(#fff 14) font-1000">答
                </div>
                <div class="flex-1 b-(1 solid #17FCFE) bg-#17FCFE/10 text-(#fff 14) p-11">
                    <div class="line-clamp-2">{{ item.answer }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Item {
    question: string;
    answer: string;
}

const list = ref<Item[]>([
    {
        question: '请问Java的是什么？',
        answer: 'Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur'
    },
    {
        question: '请问Java的是什么？',
        answer: 'Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur'
    },
])
</script>

<style scoped></style>