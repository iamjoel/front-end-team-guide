const path = require('path')
const ora = require('ora')

const files = process.argv.slice(2)
// 文件名只能包含字母，数字，中划线
const reg = /^[a-zA-Z][A-Za-z0-9\-]+$/;

const CWD = process.cwd();
const SEP = path.sep;

const lint = () => {
  files.map(file => {
    // 相对路径
    const relativePath = path.relative(CWD, file);
    const { name, dir } = path.parse(relativePath)
    // 路径片段
    const pathFragment = [...dir.split(SEP), name];
    pathFragment.map(path => {
      if (!reg.test(path)) {
        ora().fail('文件或目录名只能包含字母，数字，中划线')
        ora().fail(`${relativePath} > ${path}`)
        process.exit(1)
      }
    })
  })
}

lint();