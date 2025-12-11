import fs from 'fs'

function deleteed(id){
    let data = new Array();
    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));

    for ( let e of data ){
        if ( e.id === id ){
            e = {undefined} ;
        }
    }

    fs.writeFileSync(JSON.stringify(data,null,2.5));
}

deleteed(69);