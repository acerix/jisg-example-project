import {A000045} from 'jisg'

const generator = A000045()

for (let i=0; i<43; i++) {
   console.log(generator.next().value)
}
