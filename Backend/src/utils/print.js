import fs from 'node:fs'
import { backup, DatabaseSync } from 'node:sqlite';

export function print(){
    let data = new Array() ;
    try {
    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));
    if (data == [] ) throw e; 
    } catch (e){
        if (e){
            data = backup();
            console.log("the data have been imported from back_up file ");
        }
    }

    // return data ;
    try {
    return JSON.stringify(data , null , 2.5);
    } catch (e) {
        return "404" ;
    }
    
}


export function printByid(id){
    
    let data = new Array() ;
    try {
        data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));
    if ( data == [] ) throw e ;
    } catch (e) {
        if (e){


            data = backup();
            console.log("the data have been imported from back_up file ");
            
        }

    for ( let e of data ){
        if ( e.id == id ){
            return JSON.stringify(e);
        }
    }
    
}
}


export default { print , printByid }
