# 🏍️ Unique KTM Spares - E-commerce Platform

A modern, feature-rich e-commerce platform for KTM motorcycle spare parts with integrated service booking system.

## 🚀 Features

### ✅ Implemented (Phase 1 & 2)
- **Modern Homepage** with bike model selector and hero section
- **Product Listing** with advanced filters (category, model, price, stock)
- **Trust Badges** showcasing value propositions
- **Category Grid** for easy navigation
- **Featured Products** showcase
- **Service Packages** display with CTAs
- **Responsive Design** - Mobile, Tablet, Desktop optimized
- **KTM Branding** - Orange/Black theme with racing aesthetics

### 🔜 Coming Soon
- Product detail pages with 360° views
- Shopping cart & checkout
- User authentication & dashboard
- Service booking calendar
- Payment integration (Razorpay)
- Admin dashboard
- AR preview feature
- Real-time inventory management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: MongoDB (ready to integrate)
- **Payments**: Razorpay (ready to integrate)

## 📦 Installation

1. **Clone/Navigate to the project**:
   ```bash
   cd "d:\KIRN'S FOLDER\Startup\Unique KTM Spares"
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Product listing
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/              # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   └── ServiceCTA.tsx
│   └── products/          # Product components
│       ├── ProductGrid.tsx
│       ├── ProductCard.tsx
│       └── FilterSidebar.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors
- **Primary (KTM Orange)**: `#FF6600`
- **Secondary (Black)**: `#1A1A1A`
- **Accents**: Orange gradients

### Typography
- **Display Font**: Rajdhani (Headers, Titles)
- **Body Font**: Inter (Content, UI)

### Components
All components follow KTM's racing aesthetic with:
- Smooth animations
- Hover effects
- Gradient accents
- Shadow effects

## 🔑 Key Pages

### Homepage (`/`)
- Hero section with bike model selector
- Trust badges (Genuine, Fast Delivery, 24/7 Support, Warranty)
- Category grid (6 main categories)
- Featured products carousel
- Service packages with pricing

### Products (`/products`)
- Advanced filtering (Category, Model, Price Range, Stock)
- Grid/List view toggle
- Sorting options (Featured, Price, Rating)
- Responsive product cards
- Real-time filter results

## 🚧 Next Development Phases

### Phase 3: Product Details & Cart
- Individual product pages
- Image galleries
- Add to cart functionality
- Cart management

### Phase 4: Service Booking
- Calendar integration
- Real-time slot availability
- Booking confirmation

### Phase 5: User Features
- Authentication (NextAuth.js)
- User dashboard ("My Garage")
- Order tracking
- Maintenance reminders

### Phase 6: Payment & Checkout
- Razorpay integration
- Order processing
- Email confirmations

### Phase 7: Admin Dashboard
- Product management
- Order fulfillment
- Analytics & reports

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- Next.js Image Optimization
- Code splitting
- Lazy loading
- Font optimization
- Tailwind CSS purging

## 🤝 Contributing

This is a startup project for Unique KTM Spares. Future enhancements welcome!

## 📄 License

Proprietary - Unique KTM Spares © 2025

---

**Ready to Race! 🏁**
