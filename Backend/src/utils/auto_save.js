import fs from 'node:fs'
export function auto_save(data){
    fs.writeFileSync('./data/back_up.json',JSON.stringify(data,null,2.5));
}

export default {auto_save};