import {
  mkfile, mkdir, isDirectory, isFile, map,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('nodejs-package', [mkfile('Makefile'), mkfile('README.md'), 
mkdir('dist'), 
mkdir('__tests__'), [mkfile('half.tests.js')], mkfile('babel.config.js'), 
mkdir('node_modules'), [mkdir('@babel'), [mkdir('cli'), mkfile('LICENSE')]]]);

const callbackFn = (node) => {
  const { name } = node;
  const newName = name;
  return {...node, name: newName}
};

console.log(map(callbackFn, tree))

console.log(JSON.stringify(tree, null, 2))