import { computed } from 'vue';

export default {
    name: 'Logo',

    props: {
        to: {
            type: String,
            default: '/',
        },
        src: {
            type: String,
            default: 'caitlin-hawley-light.svg',
        },
        width: {
            type: Number,
            default: 155,
        },
        height: {
            type: Number,
            default: 70,
        },
        alt: {
            type: String,
            default: '',
        },
    },

    setup(props) {
        const srcPath = computed<string>(() => {
            return require(`~/assets/images/logo/${props.src}`);
        });

        return {
            srcPath,
        };
    },
};
