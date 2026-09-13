# 🕵️ GitHub Profile Finder

A responsive GitHub profile search application built with **React**. Search for any GitHub username and instantly view public profile information using the official **GitHub REST API**.

The application displays essential profile data including the user's avatar, name, bio, account creation date, public repositories, followers, following, location, company, and social links.

---

## 🚀 Live Demo

🔗 **[View Live Demo](https://githubfinder-pro.vercel.app/)**

---

## ✨ Features

* 🔍 Search for any GitHub user by username
* 👤 Display public GitHub profile information
* 🖼️ Show avatar, name, username, and bio
* 📊 Display public repositories, followers, and following
* 📍 Show location information when available
* 🏢 Display company information
* 📅 Show account creation date
* 🔗 Support social profile links
* ⚠️ Handle users that do not exist
* 🛡️ Provide fallback values for missing profile information
* 📱 Fully responsive layout for desktop and mobile devices

---

## 🛠️ Tech Stack

| Technology              | Purpose                                              |
| ----------------------- | ---------------------------------------------------- |
| ⚛️ **React 19**         | Building the user interface with reusable components |
| 🌐 **Axios**            | Making HTTP requests to the GitHub REST API          |
| 🎨 **React Icons**      | Displaying interface and social media icons          |
| 💅 **CSS**              | Styling and responsive design                        |
| 📦 **Create React App** | Development and build tooling                        |
| ▲ **Vercel**            | Application deployment                               |

---

## 📚 What I Learned

This project helped me practice and apply several important React concepts.

### 🧠 State Management

Using `useState` to manage:

* 🔎 Search input
* 👤 Profile data
* ⚠️ Error states

### 📝 Forms and User Input

* 🎯 Creating controlled inputs
* ⌨️ Handling user input with `onChange`
* 📤 Handling form submission with `onSubmit`
* 🚫 Preventing default browser behavior with `e.preventDefault()`

### 🌐 API Integration

* 📡 Making asynchronous HTTP requests with Axios
* ⏳ Using `async/await`
* 🔗 Fetching data from the GitHub REST API
* 📥 Processing API responses

### 🛡️ Error Handling

* Using `try/catch` for API requests
* Detecting invalid or non-existent GitHub usernames
* Displaying user-friendly error messages

### 🔄 Conditional Rendering

* 👤 Rendering profile information only when data is available
* ⚠️ Displaying errors when a user cannot be found
* 🧩 Handling optional GitHub profile fields

### 🧩 Props and Fallback Values

Using fallback values when profile information is missing:

```js
profile.name || profile.login
```

```js
profile.bio || "No bio provided."
```



### ⚛️ React Best Practices

* Using `React.StrictMode`
* 🧱 Organizing the application into reusable components
* 🎨 Separating component logic and styling

---

## 📁 Project Structure

```text
github-profile-finder/
│
├── 📁 public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── GithubSearch.js
│   │   └── GithubSearch.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 📋 Prerequisites

Make sure you have the following installed:

* 🟢 Node.js
* 📦 npm

### 📥 Installation

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/Nidal15-ds/github-profile-finder.git
```

#### 2️⃣ Navigate to the project directory

```bash
cd github-profile-finder
```

#### 3️⃣ Install dependencies

```bash
npm install
```

#### 4️⃣ Start the development server

```bash
npm start
```

The application will run at:

🔗 `http://localhost:3000`

The page will automatically reload when you make changes.

---

## 💻 Available Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| 🚀 `npm start`     | Runs the application in development mode |
| 📦 `npm run build` | Creates an optimized production build    |
| 🧪 `npm test`      | Runs the test suite                      |

---

## 🌐 API

This project uses the official **GitHub REST API** to retrieve public user profile information.

### 🔗 API Endpoint

```text
https://api.github.com/users/{username}
```

### 📊 Available Data

The API provides publicly available information such as:

* 👤 Profile details
* 🖼️ Avatar
* 📝 Bio
* 📁 Public repositories
* 👥 Followers
* 🤝 Following
* 📍 Location
* 🏢 Company
* 📅 Account creation date
* 🔗 Social profile information

---

## ☁️ Deployment

The application is deployed on **Vercel**.

🚀 **[View Live Application](https://githubfinder-pro.vercel.app/)**

---

## 👨‍💻 Author

**Nidal**

🐙 **GitHub:** [@Nidal15-ds](https://github.com/Nidal15-ds)

---

## 📄 License

This project was created for **learning and portfolio purposes**.
