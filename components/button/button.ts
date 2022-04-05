import { computed, reactive } from 'vue';

import Icon from '../icon/icon.vue';

export default {
    name: 'Button',
    components: Icon,

    props: {
        // Use tailwind bg-color class
        status: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'md',
        },
        // icon: {
        //     type: String,
        //     default: '',
        // },
        iconPosition: {
            type: String,
            default: 'left',
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
        props = reactive(props);
        // const slots = reactive(context.slots);

        const buttonClasses = computed<object>(() => {
            return [
                'btn-' + props.size,
                { ['btn-' + props.status]: props.status },
                { 'has-icon': !!props.icon },
                {
                    [`icon-${props.iconPosition}`]:
                        props.iconPosition && !!context.slots.icon,
                },
                // hasIcon && iconPosition === 'left' ? 'icon-left' : 'icon-right'
                { 'w-full': !!props.isFullWidth },
                { 'btn-outlined': !!props.outlined },
            ];
        });

        const hasIcon = computed<boolean>(() => {
            return !!context.slots.icon;
        });

        return {
            buttonClasses,
            hasIcon,
        };
    },
};
