const fs = require('fs')

fs.readFile('./engine/flowy.css', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('readFile ./engine/flowy.css data:', data)
})



try {
    const data = fs.readFileSync('./note.md', 'utf8')
    console.log('readFileSync ./note.md data:', data)
} catch (err) {
    console.error(err)
}