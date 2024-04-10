<template>
    <UCard title="昨日数据">
        <div class="h-300 flex-(~ justify-center items-center)">
            <div class="relative flex-(~ col items-center) mr-55">
                <!-- 进度盘 -->
                <div class="relative flex-(~ justify-center items-end)">
                    <!-- 进度条 -->
                    <div class="w-184 h-93 bg-#bae7ff rd-(tl-93 tr-93)"></div>
                    <div class="
                    absolute
                    w-174 
                    h-88 
                    rd-(tl-88 tr-88)
                    bg-gradient-(conic [from_-90deg_at_bottom,#3279d5_25deg,#38c8c8_35deg_145deg,#f95757_155deg_180deg])
                "></div>
                    <div class="absolute w-138 h-70 bg-#040e27 rd-(tl-70 tr-70)"></div>

                    <!-- 刻度 -->
                    <div class="absolute left--25 bottom--5 text-(12 #fff)">0%</div>
                    <div class="absolute left--5 bottom-64 text-(12 #fff)">25%</div>
                    <div class="absolute left-82 bottom-95 text-(12 #fff)">50%</div>
                    <div class="absolute right--5 bottom-64 text-(12 #fff)">75%</div>
                    <div class="absolute right--35 bottom--5 text-(12 #fff)">100%</div>

                    <!-- 指针 -->
                    <div class="absolute flex-(~ col justify-end items-center) transition-1000 transform-(origin-bottom)"
                        :style="{ transform: `rotate(${value * 1.8 - 90}deg)` }">
                        <div class="absolute bottom--10 w-20 h-20 rd-50% bg-[rgba(255,255,255,.4)]"></div>
                        <div class="text-1 b-(b-(80em solid #fff) l-(4em solid transparent) r-(4em solid transparent))"></div>
                        <div class="absolute bottom--5 w-8 h-5 bg-#fff rd-(bl-5 br-5)"></div>
                    </div>
                </div>
                <!-- 数值 -->
                <div class="mt-18 mb-5 text-(36 #17FCFE)">{{ value }}%</div>
                <!-- 标题 -->
                <div class="relative z-1 text-(12 #fff)">日满意度</div>
                <!-- 托盘 -->
                <div class="relative bottom-12 flex-(~ justify-center items-center)">
                    <div
                        class="w-137 h-22 rd-50% shadow-[inset_0_0_10px_rgba(36,156,255,0.58)] animate-(ping duration-1.5s ease-linear)">
                    </div>
                    <div class="absolute w-137 h-22 rd-50% shadow-[inset_0_0_10px_rgba(36,156,255,0.58)]"></div>
                    <div class="absolute w-183 h-36 rd-50% shadow-[inset_0_0_8px_rgba(36,156,255,0.58)] "></div>
                </div>
            </div>
            <div class="flex-(~ col gap-y-20) text-14 mb-50">
                <div>
                    <span class="text-#fff">日对话数：</span>
                    <span class="text-#17FCFE">154</span>
                </div>
                <div>
                    <span class="text-#fff">日用户数：</span>
                    <span class="text-#17FCFE">452</span>
                </div>
                <div>
                    <span class="text-#fff">日差评数：</span>
                    <span class="text-#17FCFE">3</span>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
const value = ref(0);

setTimeout(() => { value.value = 75 }, 1000)
</script>

<style scoped></style>