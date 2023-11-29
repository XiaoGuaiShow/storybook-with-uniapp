import Popup from '../components/Popup/index.vue';
import PopupImage from '../components/Popup/index.png';
export default {
    title: 'Popup',
    component: Popup,
    tags: ['autodocs']
};
export const 示例 = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Popup },
    template: `<div><Popup /><img src="${PopupImage}" /></div>`,
});