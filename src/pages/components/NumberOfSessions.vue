<template>
    <div class="relative flex-(~ justify-center items-center)">
        <!-- 总对话数 -->
        <div v-for="i of 2" :key="i"
            class="absolute w-300 h-300 rd-50% b-(3 solid #034248) animate-(ping duration-2s ease-linear)"
            :style="{ animationDelay: `${(i - 1) * .5}s` }">
        </div>
        <div class="
            absolute 
            w-418
            h-418
            rd-50%
            bg-gradient-(radial [closest-side_at_center,#034347_0%,transparent_83%,#034347_97%,#0dccd7_100%]) 
            flex-(~ col justify-center items-center)
            animate-(oval duration-3s ease-linear count-infinite)
        ">
        </div>
        <div class="absolute flex-(~ col justify-center items-center)">
            <span class="text-(36 #fff) mb-10">总对话数</span>
            <span class="text-(64 #17FCFE) font-1000">32,455,251</span>
        </div>

        <!-- 随机用户头像 -->
        <div class="relative">
            <img v-for="img of imgs" :key="img" :src="img" class="
                absolute 
                w-72 
                h-72 
                rd-50%
                [&:nth-child(1)]:(w-72 h-72 left--350 top--220)
                [&:nth-child(2)]:(w-72 h-72 left--320 top-100)
                [&:nth-child(3)]:(w-107 h-107 left-320 top--230)
                [&:nth-child(4)]:(w-50 h-50 left-250 top-80)
                [&:nth-child(5)]:(w-107 h-107 left-200 top-200)
                [&:nth-child(4n-3),&:nth-child(4n-2)]:animate-(float-down duration-2s ease count-infinite direction-alternate)
                [&:nth-child(4n),&:nth-child(4n-1)]:animate-(float-up duration-2s ease count-infinite direction-alternate)
                even:animate-delay-1s
            " />
        </div>


        <!-- tooltip -->
        <div class="absolute right-40 top-432 text-(14 #fff)">
            <div class="mb-8">实时用户数</div>
            <div class="flex-(~ justify-center items-center) mb-20">
                <i class="w-10 h-10 bg-#17FCFE rd-50% mr-6"></i>
                <span>大于10</span>
            </div>
            <div class="flex-(~ justify-center items-center) mb-20">
                <i class="w-10 h-10 bg-#FFFFFF rd-50% mr-6"></i>
                <span>小于10</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const imgs = [
    'https://s11.ax1x.com/2024/02/02/pFQlT5d.jpg',
    'https://s11.ax1x.com/2024/02/02/pFQlq2t.jpg',
    'https://s11.ax1x.com/2024/02/02/pFQlXKf.jpg',
    'https://s11.ax1x.com/2024/02/02/pFQlvqS.jpg',
    'https://s11.ax1x.com/2024/02/02/pFQ1p5j.jpg'
];
</script>

<style scoped></style>