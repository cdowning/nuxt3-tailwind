<template>
    <button :class="['btn', ...buttonClasses]" :disabled="disabled">
        <slot />
        <q-icon v-if="icon" :icon="icon" />
    </button>
</template>

<script src="./btn.ts"></script>
<style src="./btn.scss" lang="scss" scoped></style>
