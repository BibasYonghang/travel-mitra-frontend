### 🔒 autoComplete="new-password"

- Originally intended for password fields to prevent autofill suggestions.
- Commonly used as a workaround in `type="text"` inputs (e.g., search bars).
- Helps disable browser autocomplete/autosuggest when `autoComplete="off"` fails.
- Useful for custom suggestion systems (like YouTube-style search bars).
- ⚠️ Not a standard use for text inputs — may become unreliable in future browser updates.


### 📝 AutoComplete Best Practices for Password Fields

- **Signup Form**  
  - Username: `autoComplete="username"`  
  - Password: `autoComplete="new-password"` *(new password being created)*

- **Login Form**  
  - Username: `autoComplete="username"`  
  - Password: `autoComplete="current-password"` *(existing password to log in)*

- **Reset/Change Password Form**  
  - Current Password: `autoComplete="current-password"`  
  - New Password: `autoComplete="new-password"`

> **Rule:**  
> - Use `new-password` when **creating a new password** (signup/reset).  
> - Use `current-password` when **logging in or verifying identity**.



### Clickable Elements: `<button>` vs `<a>`

- Use `<a>` when the element **navigates to another page or URL**.  
- Use `<button>` when the element **triggers an action on the current page** (e.g., form submission, toggling UI, search).  
- Avoid using `<div>` or `<span>` for clickable elements unless adding proper accessibility (not recommended).  
- Both `<a>` and `<button>` are inherently accessible and keyboard-friendly.  

# Toggling State with React `useState`

- `useState` holds a state value and provides a function to update it.
- To toggle a boolean state (e.g., show/hide), use the updater function form:

  setState(prev => !prev);
Here’s what it means:

prev is the current state value before update.

!prev flips the boolean value:

If prev is true, !prev becomes false.

If prev is false, !prev becomes true.

This toggles the state between true and false.

Using the function form ensures you always get the latest state value, which is important because React state updates are asynchronous and may be batched.

prev is a parameter representing the previous state value, and the function you pass to setState uses it to compute the new state.

So when you write prev => !prev, you are taking that parameter and returning its opposite, effectively toggling the boolean state.


### 🔒 Preventing Browser Autofill in Input Fields

Browsers often show saved suggestions (autofill) based on the `name` attribute, even if `autoComplete="off"` is set. To prevent this:

- Use a unique, non-standard `name` (e.g., `searchQuery_no_save`) to avoid triggering autofill.
- Still set `autoComplete="off"` for consistency.
- Avoid common names like `search`, `email`, `username`, which browsers recognize.

Example:
<input type="search" name="searchQuery_no_save" autoComplete="off" />


## sticky and top-0 is used in the navbar for best 


## NPM Scripts

- Scripts are commands in `package.json` under `scripts`.
- Run with: `npm run <script-name>`.
- Example:
  ```json
  "scripts": {
    "dev:backend": "nodemon index.js",
    "dev:frontend": "vite",
    "start": "node index.js"
  }
Use npm run dev:backend to start backend dev server,
and npm run dev:frontend for frontend.


## `npm run dev` Usage

- Vite projects have `dev` script by default (`"dev": "vite"`).
- Backend projects need you to add it manually (`"dev": "nodemon index.js"`).
- Run `npm run dev` to start dev server in both cases.


### Centering in Tailwind
- **text-center** → centers text inside a full-width element.
- **mx-auto** → centers the whole element horizontally, works only if the element’s width is smaller than its parent (not `w-full`).
- **my-auto** → vertically centers a flex/grid child when parent has extra height.
# React Props — Notes

- Props are data passed **from parent to child** components.
- You **cannot pass props to the same component internally**.
- Props are **read-only** inside child components.
- To access props, use:
  - `props.propName` or
  - Destructure in function args: `function Comp({ propName })`
- To share state between components, pass:
  - State value as prop
  - Setter function as prop (callback)
- Always pass props explicitly when rendering child components, e.g.:
  <Child propName={value} />


  - **Inline elements** (e.g., `<a>`, `<span>`, `<strong>`) do not respect `width` and `height`.
- Their size depends on:
  - Text content
  - `line-height`
  - `padding` (only adds space, not set width/height)
- To apply custom width/height:
  - Use `display: block` or `display: inline-block`
  - Example: `<a class="block w-32 h-10">Link</a>`
- # NPM Scripts for Vite


- `"dev": "vite"` → run with `npm run dev`  
- `"start": "vite"` → run with `npm start`

`npm start` is a shortcut for `"start"`, no `run` needed.


### Inline vs Block Elements (Width & Height)

- **Inline elements** (e.g., `<a>`, `<span>`) **don't respect `width` and `height`** by default.  
  - They only grow to fit their content.
  - Example: `<a class="h-10 w-20">Text</a>` ❌ *won't work.*

- **Solution:** Use `inline-block` or `block` to make them respect dimensions.
  ```html
  <a class="inline-block h-10 w-20 bg-red-500">Link</a> ✅
Display Type	Respects Width/Height?
inline	❌ No
inline-block	✅ Yes
block	✅ Yes



# eSewa Payment Integration (MERN)

## 1. Frontend → Backend
- User clicks **Pay**.
- Frontend sends payment info (`amount`, `pid`, etc.) to backend.

## 2. Backend prepares eSewa link
- Backend generates:
  - `amt` (amount)
  - `pid` (unique transaction id)
  - `scd` (merchant ID)
  - `su` (success URL)
  - `fu` (failure URL)
- Backend sends the link (or auto-submit form) to frontend.

## 3. Frontend → eSewa
- Frontend redirects user to eSewa page or app.
- User sees pre-filled payment details and completes payment.

## 4. eSewa → Backend
- After payment, eSewa redirects user to backend success/failure URL.
- Backend receives query params (`amt`, `pid`, `refId`) and verifies payment with eSewa API.

## 5. Backend → Frontend
- Backend sends verified payment status (success/failure) to frontend.
- Frontend updates UI:
  - ✅ Payment successful
  - ❌ Payment failed
- **Loading page/spinner** should be shown while backend verification is in progress to reassure the user.

## ✅ Key Points
- Backend must **verify payment**; frontend should not trust eSewa redirect alone.
- Show **loading indicator** to avoid confusion or panic during verification.
- Frontend displays **final payment result** after backend confirmation.

The process is the same for almost all payment gateways:

Frontend → Backend: Collect payment info.

Backend → Gateway: Generate payment request (link, token, or form).

Frontend → Gateway: Redirect user to gateway page/app.

Gateway → Backend: Callback/webhook after payment.

Backend Verification: Confirm payment via gateway API.

Backend → Frontend: Send payment status.

Frontend Update: Show success/failure, optionally with a loading indicator.

The differences between gateways are usually:

API endpoints and parameters (pid, refId, merchant ID, etc.).

UI/UX of the payment page (bank page, wallet app).

Optional features like recurring payments, EMI, or wallets.

So the flow stays the same, just the implementation details change.


Frontend is never secure for verifying payments.

Users can modify frontend code in the browser, intercept requests, or fake success messages.

If you rely only on frontend verification, someone could trick your app into thinking a payment succeeded.

Backend verification is mandatory:

Backend receives the callback or query params from the payment gateway.

Backend calls the gateway’s API to confirm the payment (amount, transaction ID, status).

Only after backend confirmation does your frontend show success or unlock services.

Rule of thumb:

“Never trust the client for financial operations. Always verify on the server side.”

This is the standard practice for all payment gateways, whether it’s eSewa, Stripe, PayPal, Razorpay, or banks.


# Postman & API Testing (Short Notes)

- **Postman** is a tool to **test APIs** without a frontend.
- It **sends HTTP requests** (GET, POST, PUT, DELETE) directly to the backend.
- **Frontend is optional**; Postman simulates what the frontend does (like clicking buttons).
- **Backend must be running** to receive requests from Postman.
- You can test:
  - Request headers (`Content-Type`, `Authorization`, etc.)
  - Request body (JSON, form-data, etc.)
  - Response from the server
- Typical workflow:
  1. Open Postman → **New → HTTP Request**
  2. Select **method** (GET/POST/etc.)
  3. Enter **backend URL**
  4. Add **headers** if needed
  5. Add **body** for POST/PUT
  6. Click **Send** → View **response**
- Analogy:  
  - Frontend button → triggers backend request  
  - Postman → simulates button click **without UI**  
  - Backend → processes request and returns response