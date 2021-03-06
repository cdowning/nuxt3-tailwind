import type { Args, ArgType as BaseArgType } from '@storybook/addons';

import Button from './button.vue';
import Icon from '../icon/icon.vue';

const colors = ['primary', 'secondary'];
const sizes = ['sm', 'md', 'lg', 'xl'];

const IconSlot = {
    template: `<Icon name="icon" icon="envelope" />`,
};

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Buttons',
    component: Button,
    args: {
        status: 'primary',
        size: 'md',
        disabled: false,
        outlined: false,
        isFullWidth: false,
        // slots
        default: 'hello',
        icon: 'envelope',
    },
    argTypes: {
        // Slots
        default: {
            description: 'Text',
            table: {
                category: 'Slots',
                type: { summary: 'text' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        icon: {
            description: 'Text',
            table: {
                category: 'Slots',
                type: { summary: 'text' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        // Props
        status: {
            description: 'Color of the button',
            options: colors,
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'primary' },
            },
            control: { type: 'select' },
        },
        size: {
            description: 'Size of the button',
            options: sizes,
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'md' },
            },
            control: { type: 'select' },
        },
        outlined: {
            description: 'Outline button style',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: { type: 'boolean' },
        },
        disabled: {
            description: 'If the button is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: { type: 'boolean' },
        },
    },
};

export const Template = (args: Args, { argTypes }: BaseArgType) => ({
    props: Object.keys(argTypes),
    components: { Button },
    setup() {
        return {
            args,
        };
    },

    template: `<Button v-bind="args">
        {{ args.default }}
        <template #icon>
            ${args.slotTemplate}
        </template>
    </Button>`,
});

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    text: 'hello there',
};

export const Seondary = Template.bind({});
Seondary.args = {
    slotTemplate: IconSlot.template,
};
console.log(IconSlot.template);

// import type { Args, ArgType as BaseArgType } from '@storybook/addons';

// import Btn from './btn.vue';

// const colors = ['primary', 'secondary'];
// const sizes = ['sm', 'md', 'lg', 'xl'];

// // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
// export default {
//     title: 'Components/Button',
//     component: Btn,
//     args: {
//         status: 'primary',
//         size: 'md',
//         icon: '',
//         outlined: false,
//         disabled: false,
//     },
//     // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
//     argTypes: {
//         status: {
//             description: 'Color of the button',
//             options: colors,
//             table: {
//                 type: { summary: 'text' },
//                 defaultValue: { summary: 'primary' },
//             },
//             control: { type: 'select' },
//         },
//         size: {
//             description: 'Size of the button',
//             options: sizes,
//             table: {
//                 type: { summary: 'text' },
//                 defaultValue: { summary: 'md' },
//             },
//             control: { type: 'select' },
//         },
//         outlined: {
//             description: 'Outline button style',
//             table: {
//                 type: { summary: 'boolean' },
//                 defaultValue: { summary: false },
//             },
//             control: { type: 'boolean' },
//         },
//         disabled: {
//             description: 'If the button is disabled',
//             table: {
//                 type: { summary: 'boolean' },
//                 defaultValue: { summary: false },
//             },
//             control: { type: 'boolean' },
//         },
//     },
// };

// const Template = (args: Args, { argTypes }: BaseArgType) => ({
//     props: Object.keys(argTypes),
//     components: { Btn },
//     template: `<btn :status="status" :size="size" :disabled="disabled" :outlined="outlined">Hello</btn>`,
// });

// export const Primary = Template.bind({});
