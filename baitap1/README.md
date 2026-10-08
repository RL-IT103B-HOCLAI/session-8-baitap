# README

1. Phân tích lỗi

Lỗi 1 – Sai cơ chế FIFO

const nextVehicle = waitingQueue\.pop\(\);



pop\(\) lấy phần tử cuối mảng, nên xe được điều phối là:

51K\-678\.99



Trong khi xe đến sớm nhất nằm ở index 0:

29A\-112\.33



Muốn lấy phần tử đầu mảng phải dùng:

const nextVehicle = waitingQueue\.shift\(\);



Lỗi 2 – Vượt quá chỉ số mảng

Mảng có:

length = 4



Các index hợp lệ là:

0, 1, 2, 3



Nhưng code:

for \(let i = 0; i \<= completedSessionsKwh\.length; i\+\+\)



sẽ chạy thêm lần i = 4\.

Khi đó:

completedSessionsKwh\[4\]



là undefined\.

Sau đó:

totalKwh \+= undefined;



làm totalKwh trở thành:

NaN



Phải sửa thành:

for \(let i = 0; i \< completedSessionsKwh\.length; i\+\+\)

Bảng Test Cases 



