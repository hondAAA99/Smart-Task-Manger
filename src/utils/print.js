import fs from 'node:fs'
import { backup } from 'node:sqlite';

export function print(){
    try {
    let data = new Array() ;
    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));
    if (data == [] ) throw e; 
    } catch (e){
        if (e){

            data = backup();
            console.log("the data have been imported from back_up file ");
            
        }
    }
    
    return JSON.stringify(data , null );
    
}

export function printByid(id){

    let data = new Array() ;
    try {
    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));
    if ( data == [] ) throw e ;
    } catch (e){
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
