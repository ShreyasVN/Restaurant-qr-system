# 🍽️ Restaurant QR System

A modern, full-stack restaurant ordering system with QR code menu access, real-time order management, and live admin dashboard. Built with cutting-edge technologies for a seamless dining experience.

![Restaurant QR System](https://img.shields.io/badge/Status-Complete-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.2.30-black)
![NestJS](https://img.shields.io/badge/NestJS-11.0.1-red)
![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-E10098)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)

## 🚀 Project Overview

This is a comprehensive restaurant management system that allows customers to scan QR codes at their tables to access digital menus, place orders, and enables restaurant staff to manage orders in real-time through an admin dashboard.

### ✨ Key Features

- 📱 **QR Code Menu Access** - Customers scan QR codes to access restaurant menus
- 🛒 **Smart Shopping Cart** - Persistent cart with smooth animations and local storage
- ⚡ **Real-time Order Processing** - Live order updates using GraphQL subscriptions
- 👨‍💼 **Admin Dashboard** - Live order management with instant notifications
- 🎨 **Modern UI/UX** - Responsive design with Framer Motion animations
- 🔒 **Type Safety** - Full TypeScript implementation with GraphQL code generation
- 📊 **Professional Architecture** - Scalable backend with clean code structure

## 🏗️ Tech Stack

### Frontend (Next.js)

- **Framework**: Next.js 14.2.30 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth, professional animations
- **State Management**: Zustand for lightweight state management
- **GraphQL Client**: Apollo Client with TypeScript code generation
- **UI Components**: Custom component library with modern design

### Backend (NestJS)

- **Framework**: NestJS 11.0.1 with TypeScript
- **API**: GraphQL with Apollo Server
- **Database**: SQLite with Prisma ORM
- **Real-time**: GraphQL Subscriptions for live updates
- **Validation**: Class-validator and Joi for data validation
- **Testing**: Jest with comprehensive test coverage

### Database Schema

```sql
-- Core restaurant data structure
Restaurant (id, name, description, address, phone, email, logoUrl)
Table (id, tableNumber, qrCode, restaurantId, isActive)
Category (id, name, description, imageUrl, sortOrder, restaurantId)
Product (id, name, description, price, imageUrl, isAvailable, categoryId)
Order (id, orderNumber, status, totalAmount, notes, tableId, restaurantId)
OrderItem (id, quantity, unitPrice, totalPrice, notes, orderId, productId)
```

## 📁 Project Structure

```
restaurant-qr-system/
├── backend/                    # NestJS Backend Application
│   ├── src/
│   │   ├── config/            # Configuration management
│   │   ├── menu/              # Menu & category logic
│   │   ├── order/             # Order processing logic
│   │   ├── restaurant/        # Restaurant management
│   │   ├── prisma/            # Database service
│   │   ├── app.module.ts      # Main application module
│   │   ├── main.ts            # Application entry point
│   │   └── schema.gql         # Generated GraphQL schema
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema definition
│   │   ├── seed.ts            # Database seeding script
│   │   └── dev.db             # SQLite database file
│   ├── test/                  # Test suites
│   ├── package.json           # Backend dependencies
│   └── frontend/              # Next.js Frontend Application
│       ├── src/
│       │   ├── app/           # Next.js 14 App Router
│       │   │   ├── r/[restaurantId]/  # QR menu pages
│       │   │   ├── admin/     # Admin dashboard
│       │   │   ├── menu/      # Menu browser
│       │   │   └── orders/    # Order history
│       │   ├── components/    # Reusable UI components
│       │   │   ├── ui/        # Base UI components
│       │   │   ├── layout/    # Layout components
│       │   │   └── providers/ # Context providers
│       │   ├── generated/     # GraphQL generated types
│       │   ├── graphql/       # GraphQL queries/mutations
│       │   ├── hooks/         # Custom React hooks
│       │   ├── lib/           # Utility libraries
│       │   └── store/         # State management
│       ├── package.json       # Frontend dependencies
│       └── tailwind.config.ts # Tailwind configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Modern web browser with JavaScript enabled

### 1. Clone the Repository

```bash
git clone <repository-url>
cd restaurant-qr-system
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Setup database and seed data
npx prisma db push
npm run prisma:seed

# Start development server
npm run start:dev
```

**Backend will be running at:** http://localhost:4000
**GraphQL Playground:** http://localhost:4000/graphql

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd backend/frontend

# Install dependencies
npm install

# Generate GraphQL types
npm run codegen

# Start development server
npm run dev
```

**Frontend will be running at:** http://localhost:3000 (or 3001 if 3000 is busy)

## 🎯 Demo URLs & Testing

### Customer Experience (QR Menu Simulation)

1. **Pizza Palace Menu:**

   ```
   http://localhost:3000/r/cmdmn1vri0000ngkcj0ckee6a?table=cmdmn1vrf0003ngkcgzwqhsqf
   ```

2. **Burger Barn Menu:**
   ```
   http://localhost:3000/r/cmdmn1vsb000fngkce9cmzrye?table=cmdmn1vsg000jngkcanpwwgjg
   ```

### Admin Dashboard

```
http://localhost:3000/admin
Password: admin123
```

### Additional Pages

- **Menu Browser:** http://localhost:3000/menu
- **Order History:** http://localhost:3000/orders
- **Home Page:** http://localhost:3000/

## 🔧 Development Commands

### Backend Commands

```bash
# Development
npm run start:dev          # Start with hot reload
npm run start:debug        # Start with debugging
npm run start:prod         # Production mode

# Database
npm run prisma:seed        # Seed database with sample data
npm run prisma:reset       # Reset database and reseed
npm run db:setup           # Complete database setup

# Testing
npm run test               # Run unit tests
npm run test:cov           # Test with coverage
npm run test:e2e           # End-to-end tests

# Code Quality
npm run lint               # Lint code
npm run format             # Format code with Prettier
```

### Frontend Commands

```bash
# Development
npm run dev                # Start development server
npm run build              # Build for production
npm run start              # Start production server

# Code Quality
npm run lint               # Next.js linting
npm run codegen            # Generate GraphQL types
```

## 🎨 User Flow & Features

### Customer Journey

1. **QR Code Scan** → Customer scans QR code at their table
2. **Menu Browse** → View categorized menu with beautiful product cards
3. **Add to Cart** → Smooth animations when adding items to cart
4. **Review Order** → Floating cart with quantity management
5. **Place Order** → Secure order submission with real-time feedback
6. **Confirmation** → Order confirmation with animated success message

### Admin Experience

1. **Secure Login** → Password-protected admin access
2. **Live Dashboard** → Real-time order monitoring
3. **Order Management** → View order details, status, and customer info
4. **Notifications** → Browser notifications for new orders
5. **Order Updates** → Real-time order status tracking

## 🚀 Advanced Features

### Real-time Capabilities

- **GraphQL Subscriptions** for live order updates
- **WebSocket connections** for instant admin notifications
- **Optimistic UI updates** for seamless user experience

### Performance Optimizations

- **Server-side rendering** with Next.js
- **Static generation** for menu pages
- **Image optimization** with Next.js Image component
- **Code splitting** for faster page loads
- **Caching strategies** for GraphQL queries

### Security Features

- **Input validation** with class-validator
- **SQL injection protection** with Prisma ORM
- **XSS protection** with proper data sanitization
- **CORS configuration** for secure API access

## 📊 Database Schema Details

### Restaurant Model

```typescript
model Restaurant {
  id          String     @id @default(cuid())
  name        String
  description String?
  logoUrl     String?
  address     String?
  phone       String?
  email       String?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  // Relations
  tables      Table[]
  categories  Category[]
  orders      Order[]
}
```

### Order Processing

```typescript
enum OrderStatus {
  PENDING
  PREPARING
  READY
  COMPLETED
  CANCELLED
}

model Order {
  id           String      @id @default(cuid())
  orderNumber  String      @unique
  status       OrderStatus @default(PENDING)
  totalAmount  Float
  notes        String?
  tableId      String
  restaurantId String
  createdAt    DateTime    @default(now())
  updatedAt    DateTime    @updatedAt

  // Relations
  table        Table       @relation(fields: [tableId], references: [id])
  restaurant   Restaurant  @relation(fields: [restaurantId], references: [id])
  orderItems   OrderItem[]
}
```

## 🎯 GraphQL API Overview

### Key Queries

```graphql
# Get restaurant menu
query GetMenu($restaurantId: ID!) {
  getMenu(restaurantId: $restaurantId) {
    id
    name
    description
    products {
      id
      name
      price
      imageUrl
    }
  }
}

# Get restaurant details
query GetRestaurant($id: ID!) {
  restaurant(id: $id) {
    id
    name
    description
    address
  }
}
```

### Key Mutations

```graphql
# Create new order
mutation CreateOrder($data: CreateOrderInput!) {
  createOrder(data: $data) {
    id
    orderNumber
    status
    totalAmount
    orderItems {
      quantity
      product {
        name
        price
      }
    }
  }
}
```

### Real-time Subscriptions

```graphql
# Subscribe to new orders
subscription NewOrderPlaced {
  newOrderPlaced {
    id
    orderNumber
    totalAmount
    table {
      tableNumber
    }
    orderItems {
      quantity
      product {
        name
      }
    }
  }
}
```

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests** for business logic
- **Integration Tests** for API endpoints
- **E2E Tests** for user workflows
- **Coverage Reports** for code quality

```bash
# Run all tests
npm run test

# Run with coverage
npm run test:cov

# Run e2e tests
npm run test:e2e
```

## 🚀 Deployment

### Production Build

```bash
# Backend
cd backend
npm run build
npm run start:prod

# Frontend
cd backend/frontend
npm run build
npm run start
```

### Environment Variables

#### Backend (.env)

```env
PORT=4000
NODE_ENV=production
DATABASE_URL="file:./production.db"
JWT_SECRET="your-secure-jwt-secret"
ADMIN_PASSWORD="secure-admin-password"
```

#### Frontend (.env.local)

```env
NEXT_PUBLIC_GRAPHQL_URL=https://your-api-domain.com/graphql
NEXT_PUBLIC_APP_URL=https://your-frontend-domain.com
```

### Docker Deployment (Optional)

```dockerfile
# Backend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start:prod"]
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **NestJS** team for the amazing backend framework
- **Next.js** team for the powerful React framework
- **Prisma** team for the excellent ORM
- **Apollo GraphQL** for the robust GraphQL implementation
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations

## 📞 Support

If you have any questions or need help with the project:

1. Check the existing issues
2. Create a new issue with detailed description
3. Provide steps to reproduce any bugs
4. Include system information and logs

---

**Built with ❤️ for the modern restaurant industry**
