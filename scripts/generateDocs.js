// scripts/generateDocs.js

const fs = require('fs');
const path = require('path');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];

const readPath = path.join(__dirname, '../src/components');
const writePath = path.join(__dirname, '../src/stories');

fs.readdir(readPath, function (err, files) {
    if (err) {
        return console.error('无法读取目录：', err);
    }
    files.forEach(function (file) {
        const _path = path.join(__dirname, '../src/components/' + file);
        const componentFiles = fs.readdirSync(_path);
        let imageExtension = '';
        const hasImages = componentFiles.some(componentFile => {
            const ext = path.extname(componentFile).toLowerCase();
            if (imageExtensions.includes(ext)) {
                imageExtension = ext;
                return true;
            }
        });
        componentFiles.forEach(function (componentFile) {
            if (path.extname(componentFile).toLowerCase() === '.vue') {
                // 读取文件内容
                const vueFile = path.join(__dirname, `../src/components/${file}/${componentFile}`);
                fs.readFile(vueFile, 'utf8', function (err, data) {
                    if (err) {
                        return console.error('无法读取文件:', err);
                    }
                    const modifiedContent = data
                        .replace(/<view/g, '<div').replace(/<\/view/g, '</div')
                        .replace(/<image/g, '<img').replace(/<\/image/g, '</img')
                        .replace(/<text/g, '<span').replace(/<\/text/g, '</span');
                    fs.writeFile(vueFile, modifiedContent, 'utf8', function (err) {
                        if (err) {
                            return console.error('无法写入文件:', err);
                        }
                        console.log(`文件 ${file} 内容已修改`);
                    });
                });
            }
        })
        const filePath = path.join(writePath, file + '.stories.js');
        const fileContent = `import ${file} from '../components/${file}/index.vue';
${hasImages ? `import ${file}Image from '../components/${file}/index${imageExtension}';` : ''}
export default {
    title: '${file}',
    component: ${file},
    tags: ['autodocs']
};
export const 示例 = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ${file} },
    template: \`<div><${file} />${hasImages ? `<img src="\${${file}Image}" />` : ``}</div>\`,
});`;

        try {
            const isFileExists = fs.existsSync(path.join(writePath, file + '.stories.js'));
            fs.writeFileSync(filePath, fileContent);
            if (isFileExists) {
                console.log('文件已存在:', filePath);
            } else {
                fs.writeFileSync(filePath, fileContent);
                console.log('文件已生成:', filePath);
            }
        } catch (err) {
            console.error('无法写入文件:', err);
        }
    });
});