import browserEnv from 'browser-env';

global.navigator = {
    userAgent: 'node.js'
};

browserEnv(['window', 'document']);