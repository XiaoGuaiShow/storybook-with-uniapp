import Empty from '../components/Empty/index.vue';

export default {
    title: 'Empty',
    component: Empty,
    tags: ['autodocs']
};
export const 示例 = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Empty },
    template: `<div><Empty /></div>`,
});