let data = [
    // {
    //     "id": 1,
    //     "name": "Astasambhu",
    //     "isActive": false 
    // },
    {
        "id": 5,
        "name": "Hariomm",
        "isActive": true 
    },
    // {
    //     "id": 3,
    //     "name": "Vijaya",
    //     "isActive": false 
    // },
    {
        "id": 4,
        "name": "Sashanka",
        "isActive": true 
    },
    // {
    //     "id": 2,
    //     "name": "Arati",
    //     "isActive": false 
    // },
    {
        "id": 6,
        "name": "Mansi",
        "isActive": true 
    },
    {
        "id": 7,
        "name": "Reva",
        "isActive": false 
    },
    {
        "id": 123,
        "name": "RAM",
        "isActive": true 
    },
    // {
    //     "id": 222,
    //     "name": "SAM",
    //     "isActive": false 
    // },
    {
        "id": 333,
        "name": "DAM",
        "isActive": true 
    },
];


let btnSubmit = document.getElementById('submit-btn');
console.log(btnSubmit);

data.map((val,i)=>{
    console.log(val.id);
    console.log(val.name);
    console.log(val.isActive);
    console.log("----------------");
    console.log("Index No-" + (i+1));
    console.log("----------------");
});

btnSubmit.addEventListener('click',function(){
    const arr = data.map((val,i)=>{
       return {...val,position:i+1}
    }).filter((e,i,arr)=>{return i!==arr.length-1}).map((current,indexNum,arr)=>{
        if(indexNum!==arr.length-1){
            return `Q${current.position},`;
        }else{
            return ' and ' + `Q${arr[arr.length-1].position}`
        }
    },'').join(' ')
    // console.log(arr.join(','));
    // console.log(arr);
    // let output = arr.reduce((accum,current,indexNum)=>{
    //     if(indexNum<arr.length-2){
    //         accum += ' , ';
    //     }else if(indexNum<arr.length-1){
    //         accum += ' and ';
    //     }
    //     return accum += current.position;
       
    // },'');

    console.log(arr);
    
});


