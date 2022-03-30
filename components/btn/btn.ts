export default {
    name: 'btn',

    props: {
        // Use tailwind bg-color class
        status: {
            type: String,
            default: 'blush',
        },
        size: {
            type: String,
            default: 'md',
        },
        icon: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        outlined: {
            type: Boolean,
            default: false,
        },
        isFullWidth: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, context) {
        const buttonClasses = computed(function () {
            return [
                'btn-' + this.size,
                { ['btn-' + this.status]: this.status },
                { 'has-icon': !!this.icon },
                { 'w-full': !!this.isFullWidth },
                { 'btn-outlined': !!this.outlined },
            ];
        });

        return {
            buttonClasses,
        };
    },
};
