import Tabs from './Tabs.vue';
import UploadBtn from './UploadBtn.vue';
import ToastDialog from './ToastDialog.vue';
const components = {
    Tabs,
    UploadBtn,
    ToastDialog
};
const install = (Vue) => {
    if (install.installed)
        return;
    Object.keys(components).forEach(component => {
        Vue.component(components[component].componentName, components[component]);
    });
    install.installed = true;
};
install.installed = false;
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
    install.installed = true;
}
const Vcomp = {
    ...components,
    install
};
export default Vcomp;
//# sourceMappingURL=index.js.map