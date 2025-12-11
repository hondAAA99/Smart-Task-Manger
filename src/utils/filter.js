import fs from 'node:fs'

export function filteredData(filter){
    let data = new Array();

    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));

    let filtered = new Array();

    for ( let e of data ){
        if ( e.status == filter ) filtered.push(e);
    }    

    return JSON.stringify(filtered) ;
    
}

export default {filteredData}