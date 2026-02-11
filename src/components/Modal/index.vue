<template>
  <dialog
    :id="modalId"
    class="modal z-10"
    @cancel="onCancel"
    @click.self="onBackdrop"
  >
    <div class="bg-gray-300 dark:bg-customGray_shallow modal-box" :class="{ 'bg-white': white, 'rounded-none': unRounded, 'pb-0 pt-[1rem]': noPb }">
      <!-- 只在 noClose 为 false 时渲染关闭按钮 -->
      <form v-if="!noClose" method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">
          ✕
        </button>
      </form>

      <span class="text-3xl font-bold">
        <slot name="title" />
      </span>
      <div class="my-20 text-lg">
        <slot />
      </div>
      <div class="modal-action flex justify-end gap-10" :class="[centerBtn ? 'flex justify-center' : undefined]">
        <slot name="action" />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  centerBtn?: boolean;
  modalId: string;
  white?: boolean;
  unRounded?: boolean;
  noPb?: boolean;
  noClose?: boolean;
}>();

/** 背景点击处理：当 noClose 为 true 时阻止关闭 */
const onBackdrop = (e: Event) => {
  if (props.noClose && e.target === e.currentTarget) {
    e.preventDefault();
    e.stopPropagation();
  }
};

/** cancel 事件处理：根据 noClose 决定是否阻止 */
const onCancel = (e: Event) => {
  if (props.noClose) {
    e.preventDefault();
    e.stopPropagation();
  }
};


</script>