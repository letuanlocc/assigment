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
const apiUrl = 'https://69a77efa2cd1d0552690c46c.mockapi.io/api/assigment/table';
const newData = {
    name: "Tuấn Lộc",
    link: 'https://example.com/avatar11.jpg'
}
fetchData(apiUrl,newData,handle);