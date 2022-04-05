<template>
    <button
        :class="['btn flex items-center', ...buttonClasses]"
        :disabled="disabled"
    >
        <span
            v-if="hasIcon"
            :class="[
                'button-icon',
                iconPosition === 'left'
                    ? 'order-first mr-3'
                    : 'order-last ml-3',
            ]"
        >
            <slot name="icon"></slot>
        </span>
        <span class="button-text"><slot /></span>
    </button>
</template>

<script src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
