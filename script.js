import fs from 'node:fs'
import path from 'node:path'

const dir = 'src/assets/icons/components'

fs.readdir(dir, (err, files) => {
  const filtered = files
    .filter(file => !fs.lstatSync(path.join(dir, file)).isDirectory())
    .map(file => file.replace('.tsx', ''))

  console.log(filtered)
})
