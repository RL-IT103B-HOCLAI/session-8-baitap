# README

Phân tích lỗi

Lỗi 1: Dùng `pop()` sai nghiệp vụ

Code hiện tại:

const xeVaoSac = hangDoiXeCho\.pop\(\);

`pop()` lấy **phần tử cuối mảng**:

30A\-98765
29B\-12345
51C\-45678 ← pop\(\)

Như vậy xe `51C-45678` vào sạc trước, sai quy tắc **FIFO**\.

Phải dùng:

const xeVaoSac = hangDoiXeCho\.shift\(\);

`shift()` lấy phần tử đầu tiên:

30A\-98765 ← shift\(\)
29B\-12345
51C\-45678

---

Lỗi 2: Duyệt mảng bằng `<=`

Code hiện tại:

for \(let i = 0; i \<= hangDoiXeCho\.length; i\+\+\)

Nếu mảng có `3` phần tử thì index hợp lệ chỉ là:

0, 1, 2

Nhưng `<=` khiến vòng lặp chạy thêm lần `i = 3`\.

Khi đó:

hangDoiXeCho\[3\]

có giá trị:

undefined

nên LED xuất hiện:

STT 4: Xe undefined

Phải sửa thành:

for \(let i = 0; i \< hangDoiXeCho\.length; i\+\+\)

---

Bảng Test Cases 



