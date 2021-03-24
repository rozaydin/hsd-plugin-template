class HSDPluginTemplate {

    constructor(node) {
        this.node = node;
        this.logger = node.logger.context('WalletExtensionPlugin');
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