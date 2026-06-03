- Playwright là gì: 
    - là 1 framework
    - tiền thân là puppeteer
    - ra đời 31/01/2020
    - version mới nhất v1.56

- Ưu điểm playwright: 
    - cross browser
    - cross platform
    - tính năng auto waiting, auto-retry assertion 
    - report đầy đủ thông tin
    - code gen

- Cấu hình git
    - Config username: git config --global user.name "<tên bạn>"
    - Config email: git config --global user.email "<email của bạn>"
    - config branch default: git config --globant init.defaultBranch main

- Cài đặt Visual studio Code
- Kết nối GitHub sử dụng SSH Key
    - SSH key:
        - Cặp khóa:
            - id_rsa và id_rsa.pub
            - id_rsa: cần giữ bí mật
            - id_rsa.pub: có thể share cho người khác
        - Giúp xác thực đăng nhập trở nên dễ dàng hơn
        - Lưu ở ~/.ssh
        - ~ đại diện cho thư mục home

    - Lệnh tạo SSH keys: ssh-keygen -t rsa -b 4096 -C"your_email@example.com"
    - Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub
    - Cài đặt Playwright: npm init playwright@latest
    - Đưa code lên GitHub: 
        - Khởi tạo repo local: git init
        - Tạo repo GitHub và liên kết tới repo local: git remote add origin <url>
        - Thêm file vào stagin: git add .
        - Commit file: git commit -m"message"
        - Push code: git push origin main 