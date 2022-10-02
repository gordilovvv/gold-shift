import { onBeforeUpdate } from 'vue';

export function useTemplateRefs() {
    let templateRefs = {};

    onBeforeUpdate(() => {
        templateRefs = {};
    });

    const handleTemplateRefMount = (key: string, component: any) => {
        templateRefs[key] = component;
    };

    return {
        templateRefs,
        handleTemplateRefMount
    };
}