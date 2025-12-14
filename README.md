# Ứng Dụng Nông Nghiệp Hữu Cơ - Vite

Ứng dụng web hướng dẫn chi tiết về nông nghiệp hữu cơ cho người mới bắt đầu.

## 🚀 Công nghệ

- **Vite** - Build tool
- **React 18** - UI framework
- **TailwindCSS v4** - Styling
- **lucide-react** - Icons
- **localStorage** - Data persistence

## 📦 Cài đặt

```bash
# Clone project
cd huuco-vite

# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build
```

## 🎯 Tính năng

### 1. Cây trồng & Lịch chăm sóc
- 7 loại cây trồng: Cà chua, Dưa leo, Măng tây, Bơ, Chuối, Cà phê, Sầu riêng
- Lịch trình chăm sóc chi tiết từng ngày
- Thông tin sâu bệnh và cách xử lý
- Hướng dẫn thu hoạch

### 2. Kiến thức cơ bản
- Chuẩn bị đất và phân bón
- Nguyên tắc nông nghiệp hữu cơ
- Vi sinh vật có ích

### 3. Công thức hữu cơ
- Thuốc bảo vệ thực vật tự làm
- Phân bón lá hữu cơ
- Hướng dẫn chi tiết từng bước

### 4. Máy tính nông nghiệp
- Tính diện tích và số lượng cây
- Tính lượng phân bón
- Tính lượng nước tưới

## 📱 Mobile-First Design

Ứng dụng được thiết kế ưu tiên cho mobile:
- Responsive breakpoints: mobile (default), tablet (md: 768px), desktop (lg: 1024px)
- Touch-friendly buttons (min 44x44px)
- Horizontal scroll tabs trên mobile
- Optimized typography và spacing

## 📁 Cấu trúc Project

```
src/
├── components/
│   ├── layout/          # Header, Footer, TabNavigation
│   ├── common/          # Card, Button
│   └── features/
│       ├── crops/       # Crop components
│       ├── knowledge/   # Knowledge components
│       ├── formulas/    # Formula components
│       └── calculator/  # Calculator components
├── data/
│   ├── crops.json       # Crop data
│   ├── knowledge.json   # Knowledge data
│   ├── formulas.json    # Formula data
│   └── constants.js     # Constants
├── hooks/
│   └── useLocalStorage.js
├── utils/
│   ├── dateUtils.js
│   └── calculators.js
├── App.jsx
└── index.css
```

## 🎨 Customization

Màu sắc chính được định nghĩa trong `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    // ...
  }
}
```

## 📝 License

MIT
