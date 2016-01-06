/*eslint-disable */

var meta = require('./package.json');
fis.config.set('name', meta.name);
fis.config.set('version', meta.version);
fis.config.set('project.exclude', ['node_modules/**', 'output/**', 'dist/**', 'fis-conf.js']);

fis.seo(meta.name);
fis.config.set('framework.comboPattern', '/co??%s');

fis.config.set('roadmap.path', [
  {
    reg: 'map.json',
    release: 'config/manifest.json'
  },
  {
    reg: /\/app\/(components|views)(?=\/).*\/_[^\/]+\.tpl$/,
    isHtmlLike: true,
    isJsLike: false,
    isSwig: true,
    release: false
  },
  {
    reg: /\/app\/(components|views)(?=\/).*\/_[^\/]+$/,
    release: false
  },
  {
    reg: /\/readme\.md$/i,
    release: false
  },
  {
    reg: /^\/app\/components\/(.*\.tpl)$/i,
    id: 'components/$1',
    isHtmlLike: true,
    isJsLike: false,
    isSwig: true,
    useMap: true,
    useDomain: false,
    url: 'c/$1',
    release: '/app/views/c/$1'
  },
  {
    reg: /^\/app\/components\/(.*)$/i,
    id: 'components/$1',
    isMod: true,
    useSprite: true,
    url: '/public/c/$1',
    release: '/app/public/c/$1'
  },
  {
    reg: /^\/app\/views\/(.*\.tpl)$/i,
    id: 'views/$1',
    isHtmlLike: true,
    useMap: true,
    isSwig: true,
    useDomain: false,
    url: '$1',
    release: '/app/views/$1'
  },
  {
    reg: /^\/app\/views\/(.*)$/i,
    id: 'views/$1',
    useSprite: true,
    url: '/public/v/$1',
    release: '/app/public/v/$1'
  },
  {
    reg: '**',
    useMap: false,
    useHash: false,
    useCompile: false
  }
]);
