<template>
  <div class="rounded mx-5 mt-30">
    <div class="flex justify-between">
      <div class="flex-col">
        <div class="flex items-center gap-20">
          <span class="lg:text-xl md:text-md">{{ serial_num }}</span>
          <span class="lg:text-xl md:text-md flex gap-5 items-center">
            {{ title }}
            <el-tag type="primary" class="ml-5">填空</el-tag>
            <el-tag type="warning" v-if="!required">选答</el-tag>
            <el-tag type="danger" v-if="unique">唯一</el-tag>
          </span>
        </div>
        <div class="flex items-center mt-15 ml-10">
          <pre class="text-sm text-gray-500 break-all">{{ describe }}</pre>
        </div>
      </div>
      <div class="flex-col justify-center items-center"></div>
    </div>
    <div class="divider my-5"></div>
    <div class="flex-col p-5 h-auto">
      <input
          class="input input-bordered w-full dark:bg-customGray_more_shallow"
          :placeholder="pal"
          v-model="localAnswer"
          @blur="validateInput"
      />
      <p v-if="errorMessage" class="text-red-400 mt-5 text-sm">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  serial_num: Number,
  title: String,
  required: Boolean,
  reg: String,
  unique: Boolean,
  describe: String,
  answer: String,
});

const emits = defineEmits(['update:answer']);

const localAnswer = ref(props.answer);
const errorMessage = ref('');
watch(localAnswer, (newAnswer) => {
  emits('update:answer', newAnswer);
});

const validateInput = () => {
  if (props.reg && !new RegExp(props.reg).test(localAnswer.value as string)) {
    console.log(props.reg)
    errorMessage.value = '输入不符合要求';
  } else {
    errorMessage.value = '';
  }
};

const pal = computed(() => {
  if (props.reg === '^1[3456789]\\d{9}$') return '电话';
  else if (props.reg === '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') return '邮箱';
  else if (props.reg === '^\\d{12}$') return '学号';
  else if (props.reg === '^.*$') return '';
  else if (props.reg === "^[0-9]{1}$") {
    const num = props.reg?.[7];
    return num + '位数';
  }else return '请看题目规则'
});
</script>

<style scoped>
</style>
