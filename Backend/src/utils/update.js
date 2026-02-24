import fs from 'node:fs';
export function update(id,update){

    let data = new Array();

    data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));

    let find = data.findIndex((e)=>{
        return e.id == id ;
    });
    
    try {
        if ( !data[find] ) throw e ;
    data[find].status = update ;
    } catch (e){
        if (e) {
            return "there is no task with this id" ;
        }

    }
    

    fs.writeFileSync('./data/data.json',JSON.stringify(data , null , 2.5));
    return "the task have been updated" ;
}




export default {update}