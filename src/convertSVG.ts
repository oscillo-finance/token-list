import { convertFile } from 'convert-svg-to-png'
import { join } from 'path'
import glob from 'glob'


const rootDir = join(__dirname, '../')
glob(join(rootDir, 'src/raw/**/*.svg'), async (err, files) => {
    if (err) return
    
    for (let file of files) {
        const output = await convertFile(file, { width: 36, height: 36 })
        console.log(output)
    }
})
