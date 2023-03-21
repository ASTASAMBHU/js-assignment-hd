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
    // {
    //     "id": 7,
    //     "name": "Reva",
    //     "isActive": false 
    // },
    // {
    //     "id": 123,
    //     "name": "RAM",
    //     "isActive": true 
    // },
    // {
    //     "id": 222,
    //     "name": "SAM",
    //     "isActive": false 
    // },
    // {
    //     "id": 333,
    //     "name": "DAM",
    //     "isActive": true 
    // },
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
    const arr = [];
    data.filter((val,i)=>{
        if(val.isActive == true){
            let data = "Index No:" +(i+1) + " -- " + val.name;
            arr.push(data);            
        }
    })
    // console.log(arr.join(','));
    // console.log(arr);
    let output = arr.reduce((accum,current,indexNum)=>{
        let outputString = accum;
        
        outputString += current;
        if(indexNum<arr.length-2){
            outputString += ' , ';
        }else if(indexNum<arr.length-1){
            outputString += ' and ';
        }

        return outputString;
    },'');

    console.log(output);
    
});


