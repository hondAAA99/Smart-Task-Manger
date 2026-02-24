import fs from 'fs'

export function deleteed(id){
    let data = new Array();
    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));

    let json ;
    for ( let e = 0 ; e<data.length ; e++ ){
        if ( data[e].id == id){
            json = e ;
        }
    }   
    
    data.splice(json,1);


    fs.writeFileSync('./data/data.json',JSON.stringify(data,null , 2.5));
    

}


export default {deleteed}