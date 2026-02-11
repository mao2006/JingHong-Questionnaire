<template>
  <dialog
    :id="modalId"
    class="modal z-10"
    @cancel="onCancel"
    @click.self="onBackdrop"
  >
    <div class="bg-gray-300 dark:bg-customGray_shallow modal-box" :class="{ 'bg-white': white, 'rounded-none': unRounded, 'pb-0 bt-[1rem]': noPb }">
      <!-- 只有当不隐藏关闭按钮时才渲染 form 和 ✕ -->
      <form v-if="!hideClose" method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">
          ✕
        </button>
      </form>

      <span class="text-3xl font-bold">
        <slot name="title" />
      </span>
      <div class="my-20 text-lg flex-warp">
        <slot />
      </div>
      <div class="modal-action flex justify-end gap-10" :class="[centerBtn ? 'flex justify-center' : undefined]">
        <slot name="action" />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  centerBtn?: boolean,
  modalId: string,
  white?: boolean,
  unRounded?: boolean,
  noPb?: boolean,
  hideClose?: boolean, // 是否隐藏右上叉叉并禁止 Esc/背景关闭
}>();

/* 背景点击处理：当 hideClose 为 true 时阻止关闭 */
const onBackdrop = (e: Event) => {
  if (props.hideClose && e.target === e.currentTarget) {
    e.preventDefault();
    e.stopPropagation();
  }
};

/* cancel 事件（form method=dialog 或 Esc 触发），根据 hideClose 决定是否阻止 */
const onCancel = (e: Event) => {
  if (props.hideClose) {
    e.preventDefault();
    e.stopPropagation();
  }
};

// 当 hideClose 为 true 时拦截 Esc（捕获阶段）
let _escHandler: (e: KeyboardEvent) => void;
onMounted(() => {
  _escHandler = (e: KeyboardEvent) => {
    if (!props.hideClose) return;
    if (e.key === "Escape" || e.key === "Esc") {
      const dialog = document.getElementById(props.modalId) as HTMLDialogElement | null;
      if (dialog && dialog.open) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };
  document.addEventListener("keydown", _escHandler, true);
});

onBeforeUnmount(() => {
  if (_escHandler) document.removeEventListener("keydown", _escHandler, true);
});
</script>