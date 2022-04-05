import { computed } from 'vue';

import SvgSprite from '../../assets/sprite/gen/icon-sprite.svg';
// import SvgSprite from '~/assets/sprite/gen/icon-sprite.svg';

export default {
    name: 'Icon',
    props: {
        icon: {
            type: String,
            default: '',
            required: true,
        },
        width: {
            type: Number,
            default: 24,
        },
        height: {
            type: Number,
            default: 24,
        },
        size: {
            type: String, // sm, md, lg.
            default: '',
        },
        // Could use tailwind color classes
        color: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const iconPath = computed<string>(() => {
            return `${SvgSprite}#i-${props.icon}`;
        });

        return {
            iconPath,
        };
    },
};
