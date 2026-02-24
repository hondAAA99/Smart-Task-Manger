

export function sort (data){

    for ( let e = 0 ; e<data.length ; e++ ){
        let min = e ;
        for ( let a = e ; a<data.length-1 ; a++ ){
            if ( data[e].id > data[a].id ) min = a
        }
        [data[e],data[min]] = [data[min],data[e]]
    }

    return data ;
}

// console.log(sort([{
//     "id": 51,
//     "name": "t1",
//     "date": "2025-12-11T12:14:45.476Z",
//     "status": "not-started",
//     "deadline": "3 days"
//   },{
//     "id": 75,
//     "name": "t1",
//     "date": "2025-12-11T12:33:33.532Z",
//     "status": "not-started",
//     "deadline": "3 days"
//   }]));


export default {sort};