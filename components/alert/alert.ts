import { computed } from 'vue';

export default {
    name: 'Alert',
    props: {
        status: {
            type: String,
            default: 'info',
        },
    },
    setup(props, context) {
        const statusClass = computed(() => {
            return props.status ? 'is-' + props.status : '';
        });

        return {
            statusClass,
        };
    },
};
