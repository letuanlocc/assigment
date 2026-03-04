function fetchData(callback){
    const apiUrl = "";
    fetch(apiUrl)
        .then(reponse => reponse.json())
        .then(data => {
            callback(null,data);
        })
        .catch(error => {
            callback(error,null);
        });
}

function handle(error,data){
    if(error){
        console.log("ERROR",error);
    }else{
        console.log("Data: ",data);
    }
}
fetchData(handle);