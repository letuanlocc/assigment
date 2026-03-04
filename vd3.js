function fetchData(url,data,callback){
    fetch(url,
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }
    )
        .then(response => {
            if(!response.ok){
                throw new Error('Lỗi khi thêm dữ liệu vào API');
            }
            return response.json();
        })
        .then(data => {
            callback(null,data);
        })
        .catch(error => {
            callback(error,null);
        });
}

function handle(error,data){
    if(error){
        console.error("ERROR",error.message);
    }else{
        console.log("Data: ",data);
    }
}
const apiUrl = 'https://656d3ffbbcc5618d3c22e91.mockapi.io/product';
const newData = {
    name: "Tuấn Lộc",
}
fetchData(apiUrl,newData,handle);