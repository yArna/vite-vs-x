import fs from 'node:fs'

let imports = ``
let renderCode = ``

for (let i = 0; i < 1500; i++) {
  imports += `import { Comp${i} } from './components/comp${i}.jsx'\n`
  renderCode += `<Comp${i}/>\n`
  fs.writeFileSync(
    `src/components/comp${i}.jsx`,
    `
    window.count++
    
    export function Comp${i}() {
    return <div class="comp">hello ${i}</div>
  }`
  )
}

const code = `
 ${imports}
export default function App() {
  return <main>
   ${renderCode}
  </main>
}
`

fs.writeFileSync('src/App.jsx', code)
