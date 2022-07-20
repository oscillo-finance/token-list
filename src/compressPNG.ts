import { compress } from 'compress-images/promise'
import { join } from 'path'
import rimraf from 'rimraf'


(async () => {
    const source = join(__dirname, '../src/raw/**/*.png')
    const destination = join(__dirname, '../images/')
    
    rimraf(destination, async () => {
        const result = await compress({
            compress_force: false, statistic: true, autoupdate: true,
            source, destination,
            enginesSetup: {
                png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] }
            }
        })
        console.log(result)
    })
})()
