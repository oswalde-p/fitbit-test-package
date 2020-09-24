import { settingsStorage } from 'settings'

const doThing = function() {
    console.log('Inside the companion function')
    console.log(typeof settingsStorage)
}

export {
    doThing
}