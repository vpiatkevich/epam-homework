const fs = require('fs-extra');

fs.ensureDirSync('dir1')
fs.ensureDirSync('dir2')
fs.ensureDirSync('dir3')
fs.ensureFileSync('dir1/hello.txt')
fs.moveSync('dir1/hello.txt', 'dir2/hello.txt')
fs.copySync('dir2/hello.txt', 'dir3/hello.txt')
fs.removeSync('dir3/hello.txt')
fs.removeSync('dir2/hello.txt')
fs.removeSync('dir1')
fs.removeSync('dir2')
fs.removeSync('dir3')