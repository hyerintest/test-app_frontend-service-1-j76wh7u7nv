const requireComponent = require.context(
    '.',
    false,
    /[A-Z]\w+\.(vue|js)$/
);

const register = (app) => {
    requireComponent.keys().forEach((fileName) => {
        const componentConfig = requireComponent(fileName);
        const componentName = fileName
            .split('/')
            .pop()
            ?.replace(/\.\w+$/, '');
        app.component(componentName, componentConfig.default || componentConfig);
    });
};

export default {
    register
};
