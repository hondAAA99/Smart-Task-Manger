import fs from 'node:fs'

export function back_up(){
    data = JSON.parse(fs.readFileSync('./data/back_up.json','utf-8'));

    return data ;
}

export default {back_up}