declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
declare module '*.svg' {
    // DON'T DECLARE THIS INSIDE GLOBAL MODULE
    import { VNode } from 'vue';
    type Svg = VNode;

    const content: Svg;
    export default content;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
