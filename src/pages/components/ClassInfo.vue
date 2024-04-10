<template>
    <UCard title="班级信息">
        <div class="pt-14 grid-(~ gap-11 cols-[repeat(2,1fr)] rows-[repeat(2,27.25rem)])">
            <div v-for="(item, index) of list" :key="index"
                class="bg-gradient-(to-b from-#4192D9 via-#4192D9/30 to-#4192D9) p-2">
                <div class="relative bg-#040E27 h-full p-10 box-border">
                    <div class="text-(14 #5CDAEC) mb-4">{{ item.name }}：</div>
                    <div class="w-80 h-2 bg-gradient-(to-r from-#4192D9 to-#4192D9/10) mb-24"></div>
                    <div class="text-#DEF0FF">
                        <span class="text-24 font-bold mr-4">{{ item.value }}</span>
                        <span class="text-18">{{ item.unit }}</span>
                    </div>
                    <img :src="item.img" class="w-48 absolute top-12 right-12">
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import illusChatNum from '@/assets/images/illus_chat-num.svg'
import illusUserNum from '@/assets/images/illus_user-num.svg'
import illusLikeNum from '@/assets/images/illus_like-num.svg'
import illusQuesNum from '@/assets/images/illus_ques-num.svg'

interface Item {
    name: string;
    img: string;
    value: number;
    unit: string;
}

const list = ref<Item[]>([
    {
        name: '对话数',
        img: illusChatNum,
        value: 1422,
        unit: '次'
    },
    {
        name: '用户数',
        img: illusUserNum,
        value: 2642,
        unit: '人'
    },
    {
        name: '满意度',
        img: illusLikeNum,
        value: 80,
        unit: '%'
    },
    {
        name: '提问率',
        img: illusQuesNum,
        value: 92,
        unit: '%'
    }
])
</script>

<style scoped></style>