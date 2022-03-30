export default {
    name: 'index',

    setup(props, context) {
        const welcomeText = ref('Hello');

        const prefix = computed(function () {
            return `bg-${welcomeText}`;
        });

        return {
            welcomeText,
            prefix,
        };
    },
};
