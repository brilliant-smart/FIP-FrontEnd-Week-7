# 🏥 Hospital Management System (State Management with Redux & Context API)

This project is a **Hospital Management System (HMS) Dashboard** built with **React**, using:

- **Redux Toolkit** for **global state management** (patients, appointments, statistics)
- **Context API** for **theme management** (light/dark mode)
- **Bootstrap** for styling

It serves as a practical implementation of **State Management in React**, demonstrating:
✅ **Redux for Complex Global State**  
✅ **Context API for Lightweight State Sharing**  
✅ **Async Actions & State Persistence**

---

## 🎯 **Learning Outcomes**

This project fulfills the **Week 7 Deliverable** on **State Management in React**, covering:

- **Redux Toolkit**
  - Creating a centralized **global state**
  - Managing **patients** and **appointments**
  - Using **reducers and actions** to update state
- **Context API**
  - Creating a **theme provider**
  - Managing **light/dark mode toggle** globally
- **Combining Redux & Context API**
  - **Redux** for handling **patients & appointments**
  - **Context API** for handling **theme settings**
- **Real-world use cases of state management in React**

---

## 🚀 **Features & State Management**

### 🏥 **1. Patients Management (Redux)**

- Patients are **stored globally** in Redux state.
- Add a new patient via form submission.
- Remove a patient from the list.

### 📅 **2. Appointment Management (Redux)**

- Appointments are **managed in Redux state**.
- Schedule a new appointment.
- Remove an existing appointment.

### 📊 **3. Dashboard with Statistics (Redux + Context API)**

- Displays:
  - ✅ **Total Patients** (Redux)
  - ✅ **Total Appointments** (Redux)
  - ✅ **Upcoming Appointments** (Redux)
  - ✅ **Completed Appointments** (Redux)
- Uses **Context API** for:
  - ✅ **Light/Dark Mode Toggle**
  - ✅ Theme persistence across components.

---

## 🛠 **Tech Stack**

- **React** (Built with Vite)
- **Redux Toolkit** (Global State Management)
- **Context API** (Theme Toggle)
- **Bootstrap** (UI Styling)
- **Redux Persist** (State Persistence)

---

## 📌 **How Context API is Used**

### ✅ **1. Creating the `ThemeContext`**

We created a **context provider** to manage **light/dark mode**:

```jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```
