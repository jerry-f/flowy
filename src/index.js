const fs = requuire('fs')
const path = require('path')

const fileName = path.join(__dirname, 'message.txt')

fs.writeFile(fileName, 'Hello Node.js', 'utf8', function (err) {
    if (err) {
        console.log('文件写入错误');
        return
    }
    console.log('文件写入成功');
});