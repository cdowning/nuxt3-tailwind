<template>
    <div class="bg-secondary">
        <h3 class="bg-green-50">{{ welcomeText }} There</h3>

        <Button>Hello</Button>

        <hr />

        <Button
            status="primary"
            :class="['custom-button']"
            icon-position="right"
        >
            <template #icon>
                <Icon icon="envelope" />
            </template>
            Hello There
        </Button>
        <hr />

        <Button status="primary" :class="['custom-button']">
            <template #icon>
                <Icon icon="briefcase" />
            </template>
            Hello There
        </Button>

        <!-- <Button v-slot="slotProps">
            {{ slotProps.icon }} {{ slotProps.color }}
        </Button> -->
    </div>
</template>

<script src="./ts/index.ts"></script>
