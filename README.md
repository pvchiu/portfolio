# Phạm Văn Chiêu — Portfolio

Website portfolio tông trắng, điểm nhấn xanh dương. Nội dung dựa trên CV được cung cấp.

## Xem trên máy

Chạy từ thư mục portfolio:

```powershell
python -m http.server 4867 --bind 127.0.0.1 --directory dist
```

Mở http://127.0.0.1:4867/ trong trình duyệt.

## Chỉnh sửa

- dist/index.html: giới thiệu, dự án, kinh nghiệm, học vấn, kỹ năng và liên hệ.
- dist/styles.css: màu sắc, kiểu chữ và bố cục responsive.
- dist/script.js: chi tiết dự án, menu điện thoại và sao chép email.
- dist/Pham-Van-Chieu-CV.pdf: CV tải xuống.

Các bảng minh họa dự án mô tả chức năng từ CV, không phải ảnh chụp sản phẩm. Liên kết GitHub dẫn đến hồ sơ được ghi trong CV; không tự tạo liên kết repository hoặc demo chưa được cung cấp.

Phông Be Vietnam Pro tải từ Google Fonts, với Arial dự phòng. Không cần cài dependency hoặc build.

Site hiện chưa được triển khai lên mạng. Bản xem trước chạy trên máy. Đăng ký Sites đã được tạo ở chế độ riêng tư; bước gửi mã nguồn và CV đang chờ người dùng cho phép.


## Ngôn ngữ và giao diện

Thanh đầu trang có nút VI/EN và nút chuyển sáng/tối. Nội dung trang và chi tiết dự án đều có bản dịch. Lựa chọn được lưu bằng localStorage khi trình duyệt cho phép; mặc định là tiếng Việt và giao diện trắng. Trạng thái ngôn ngữ, nhãn truy cập và màu thanh trình duyệt thay đổi theo lựa chọn.

