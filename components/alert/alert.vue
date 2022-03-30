<template>
    <div :class="['alert', statusClass]">
        <slot />
    </div>
</template>

<script src="./alert.ts"></script>
<style src="./alert.scss" scoped></style>
