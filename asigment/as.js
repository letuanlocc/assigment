const apiUrl = "https://69a77efa2cd1d0552690c46c.mockapi.io/api/assigment/table";

// Gửi dữ liệu lên mock
async function fetchData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Thêm phòng thất bại");
        }

        const result = await response.json();
        alert("Thêm phòng thành công!");
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }
}

// Lấy dữ liệu từ form
function getData() {
    let name = document.getElementById("name_room").value;
    let describe = document.getElementById("describe_room").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("image").value;
    const newData = {
        name,
        describe,
        quantity,
        image
    };

    fetchData(apiUrl, newData);
}

// Gắn sự kiện click
document.getElementById("addRoomBtn")
        .addEventListener("click", getData);