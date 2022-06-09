//BÀI TẬP 1 : Tính tiền lương cho nhân viên 
/* Mô hình 3 khối :
+ Đầu Vào : Người nhân viên sẽ nhập vào số ngày làm của mình (N)
    Gỉa sử số ngày làm của nhân viên là N = 20 ngày. 
    Tiền lương của 1 ngày làm là 100.000 vnđ
+ Xử Lí : 
    Công thức tính lương cho sẵn : Lương = N*100.000
    Vd : số ngày làm là 20 ngày.
    => Lương = 20*100.000 = 2.000.000vnđ
+ Đầu Ra : Tiền lương của nhân viên
*/
document.getElementById('tinhLuong').onclick = function () {
    var soNgay =Number(document.getElementById('soNgay').value);
    var tienLuong = 0;
    tienLuong = soNgay * 100000;
    document.getElementById('tienLuong').innerHTML = 'Tổng lương là ' + tienLuong.toLocaleString() + ' VNĐ';
}

// BÀI TẬP 2 : Tính giá trị trung bình 
/* Mô hình 3 khối :
+ Đầu vào : Nhập vào 5 số thực ngẫu nhiên 
giả sử 5 số đó là : 
number1 = 1 ; number2 = 3; number3 = 5 ; number4 = 7; number5 = 9;
+ Xử lí : 
Tạo 5 giá trị số thực sau đó tính tổng của 5 số đó rồi chia cho 5
VD : 
number1 = 1 ; number2 = 3; number3 = 5 ; number4 = 7; number5 = 9;
trungbinh = (number1 + number2 + number3 + number4 + number5)/5
=> trungbinh = (1+3+5+7+9)/5 = 5
+ Đầu ra : giá trị trung bình của 5 số thực ngẫu nhiên
 */
document.getElementById('giaTriTrungBinh').onclick = function () {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var number3 = Number(document.getElementById('number3').value);
    var number4 = Number(document.getElementById('number4').value);
    var number5 = Number(document.getElementById('number5').value);
    var trungBinh = 0;
    trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
    document.getElementById('trungBinh').innerHTML = 'Giá trị trung bình của 5 số thực nhập vào là: ' + trungBinh;
}

// BÀI TẬP 3 : Quy đổi tiền
 /* Mô hình 3 khối :
+ Đầu vào : 
 Gía USD hiện tại 23.500 vnđ
 Người dùng nhập vào số USD muốn đổi 
+ Xử lí : 
   Sau khi người dùng nhập vào số USD muốn đổi. 
   Số tiền VNĐ nhận được tính bằng : VND = USD*23.500
   vd : Số USD = 2 => VNĐ = 2*23.500 = 47.000 vnđ
+ Đầu ra : Xuất ra số tiền sau khi quy đổi
*/
document.getElementById('tinhTien').onclick = function () {
    var usd = document.getElementById('usd').value;
    var vnd = 0;
    vnd = usd * 23500;
    document.getElementById('vnd').innerHTML = 'Quy đổi ra: ' + vnd.toLocaleString() + ' VNĐ';
}

// BÀI TẬP 4 : Tính diện tích và chu vi hình chữ nhật
/* Mô hình 3 khối :
+ Đầu vào : Nhập vào chiều dài (cd) và chiều rộng (cr) của hình chữ nhật
+ Xử lí : 
Công thức tính chu vi : C = (chieudai + chieurong)*2
Công thức tính diện tích : S = chieudai * chieurong
+ Đầu ra : Xuất ra chu vi và diện tích của hình chữ nhật
*/
document.getElementById('HCN').onclick = function () {
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    var chuVi = 0;
    var dienTich = 0;
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    document.getElementById('chuVi').innerHTML = 'Chu vi hình chữ nhật là: ' + chuVi + ' m';
    document.getElementById('dienTich').innerHTML = 'Diện tích hình chữ nhật là : ' + dienTich + ' m2';
}

// BÀI TẬP 5 : Tính tổng 2 ký số 
/*
Mô hình 3 khối 
- Đầu vào : nhập vào 1 số bất kì có 2 chữ số bất kì 
- Xử Lí : 
+ tách lấy hàng chục n / 10 => làm tròn số Math.floor(n / 10)
+ tách lấy hàng đơn vị n % 10 => làm tròn số Math.floor(n % 10)
sau đó tính tổng 2 con số chục + đơn vị
vd : n = 68 => 6 + 8 =14
- Đầu Ra :tổng 2 ký số nhập vào
*/
document.getElementById('tinhKySo').onclick = function () {
    var kySo = Number(document.getElementById('kySo').value);
    var donVi = 0;
    var chuc = 0;
    var tinhTongKySo = 0;
    donVi = Math.floor(kySo % 10);
    chuc = Math.floor(kySo / 10);
    tinhTongKySo = donVi + chuc;
    document.getElementById('tongKySo').innerHTML = 'Tổng 2 ký số là: ' + tinhTongKySo;
}