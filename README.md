# Store JJ Frontend

React frontend for a MERN e-commerce store. This app provides the customer-facing shopping experience, including product browsing, product details, cart management, checkout, Razorpay payment flow, authentication, email verification, profile, and order history.

The frontend is designed to work with the Express and MongoDB backend in the sibling `backend` directory.

## Overview

Store JJ is built as a modern MERN storefront:

| Layer | Technology |
| --- | --- |
| Frontend | React with Vite |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit and React Redux |
| Routing | React Router |
| API Client | Axios and Fetch |
| Backend | Node.js, Express.js |
| Database | MongoDB |

## Features

### Storefront

- Home page with hero section, category highlights, trust badges, featured products, offers, and customer-focused sections
- Shop page for browsing all products
- Product cards with product image, name, pricing, discount, and navigation
- Product details page with image gallery, price, discount, quantity selector, and add-to-cart action
- Responsive layout with shared navbar and footer

### Cart

- Slide-out cart drawer
- Add products to cart
- Update item quantity
- Remove items from cart
- Cart persistence with `localStorage`
- Subtotal and discounted total display
- Checkout navigation

### Checkout and Payments

- Shipping details form powered by React Hook Form
- Order summary with selected products
- Razorpay checkout integration
- Payment verification flow through the backend
- Order creation after successful payment verification
- Cart clearing after successful order placement
- Order success page navigation

### Authentication

- Signup page
- Login page
- Email verification page
- OTP resend support
- Logout support
- Auth state persistence with `localStorage`
- Toast notifications for user feedback

### Profile and Orders

- Profile page for account information
- My Orders section
- Order date, amount, status, and ordered product display
- Backend-driven order tracking support

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- Tailwind CSS
- Axios
- React Hook Form
- React Toastify
- Lucide React
- React Icons
- Oxlint

## Folder Structure

```text
frontend/
  public/
    favicon.svg
    icons.svg
  src/
    admin/
      auth.js
    assets/
      heroImg.png
      clothing.png
      electronics.png
      shoes.png
      assesories.png
      cart.png
      discount.png
    components/
      Button.jsx
      CartDrawer.jsx
      CustomerReview.jsx
      CustomerSayCard.jsx
      ExclusiveOffer.jsx
      Footer.jsx
      Input.jsx
      Layout.jsx
      LoadingScreen.jsx
      Login.jsx
      MyOrders.jsx
      Navbar.jsx
      ProductCard.jsx
      ProductDetails.jsx
      Profile.jsx
      Signup.jsx
      StoreStats.jsx
      VerifyEmail.jsx
    pages/
      About.jsx
      Chcekout.jsx
      Home.jsx
      Login.jsx
      OrderSuccess.jsx
      Profile.jsx
      Shop.jsx
      Signup.jsx
      Verification.jsx
    store/
      authSlice.js
      cartSlice.js
      productSlice.js
      store.js
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  vite.config.js
```

## Getting Started

### Prerequisites

Make sure you have these installed:

- Node.js
- npm
- The backend server from `../backend`

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the `frontend` directory.

Do not commit real keys or secrets. Frontend environment variables are visible in the browser, so only use public client-side keys here.

```env
VITE_RAZORPAY_API_KEY=
```

`VITE_RAZORPAY_API_KEY` should be the Razorpay public key used by the checkout script.

### Run the Development Server

```bash
npm run dev
```

Vite will start the frontend development server and print the local URL in the terminal.

## Backend Connection

API requests are made under:

```text
/api/v1
```

The Vite config currently proxies `/api` requests to:

```text
http://localhost:5000
```

Make sure this proxy target matches the port used by the backend server. If your backend runs on another port, update `vite.config.js`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/shop` | Product listing |
| `/products/:id` | Product details |
| `/signup` | Create account |
| `/signup/verify-email` | Verify email |
| `/login` | Login |
| `/checkout` | Checkout |
| `/order-success` | Order success |
| `/profile` | User profile |

## State Management

Redux Toolkit is used for shared client state:

| Slice | Purpose |
| --- | --- |
| `authSlice` | Stores logged-in user state and persists user info |
| `cartSlice` | Stores cart items, quantities, totals, and cart persistence |
| `productSlice` | Stores loaded product data for shop and product views |

The Redux store is configured in:

```text
src/store/store.js
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs Oxlint.

## Security Notes

- Do not place backend secrets in the frontend `.env` file.
- Only public client-side keys should use the `VITE_` prefix.
- Keep private Razorpay secrets, JWT secrets, email credentials, MongoDB URI, and Cloudinary secrets in the backend environment only.
- Review the Vite proxy before deployment and use production API URLs through a secure deployment setup.

## Related Project

Backend directory:

```text
../backend
```

Run the backend and frontend together to test the full MERN e-commerce flow.
