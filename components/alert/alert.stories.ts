import type { Args, ArgType as BaseArgType } from '@storybook/addons';

import Alert from './alert.vue';

const colors = ['', 'error', 'info', 'warning'];

export default {
    title: 'Components/Alert',
    component: Alert,
    // argTypes: {},
    args: {
        status: 'info',
    },
    // https://storybook.js.org/docs/vue/essentials/controls#annotation
    // https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        status: {
            name: 'Status',
            description: 'Color applied to the alert. Defaults to informative.',
            options: colors,
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: {
                type: 'select',
                labels: {
                    error: 'Error',
                    information: 'informative',
                    warning: 'System Message',
                },
            },
        },
    },
};

const Template = (args: Args) => ({
    components: { Alert },
    setup() {
        return {
            args,
        };
    },
    template: '<Alert v-bind="args">Hello There</Alert>',
});

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    label: 'test label',
    status: 'info',
};
