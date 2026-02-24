import fs from 'node:fs'
import { auto_save } from './auto_save.js';
import { back_up } from "./back_up.js";
import {sort} from './sort.js';

function addTask(addMe){
    let data = new Array() ;

    try {
        data = JSON.parse(fs.readFileSync('./data/data.json','utf-8'));
    } catch (e){

        try {
        if (e) {
        data = back_up();
        console.log("data have been removed and imported from your bback_up file");
        }
    }
        catch (e){
            if (e)
            console.log("there is no data to import from :(");
        }
    }

    let { name } = addMe ;
    let date = new Date(Date.now());
    let status = "not-started";
    let deadline = `${(7-date.getDay()).toString()} days` ;
    let obj = { 
        "id" : Number.parseInt(Math.random()*100) ,
        "name" : name ,
        "date" : date ,
        "status" : status ,
        "deadline" : deadline 
    }

    data.push(obj); 
    data = sort(data);
    auto_save(data);
    fs.writeFileSync('./data/data.json',JSON.stringify(data,null ,2.5))

    return data

}

// console.log(addTask({name:"t1"}));

export default {addTask}


