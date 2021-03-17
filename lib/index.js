class HSDPluginTemplate {

    constructor(node) {
        console.log('type of node i am inited with is: %o', node);
        this.logger = node.logger.context('PluginTemplate');
    }

    async open() {
        console.log('open called!');
    }

    async close() {
        console.log('close called!');
    }

}

const plugin = exports;
plugin.id = 'HSDPluginTemplate';
plugin.init = (node) => {
    return new HSDPluginTemplate(node);
};