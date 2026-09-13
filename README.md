🕵️‍♂️ GitHub Profile Finder
React
axios
Vercel
A sleek, dark-themed GitHub Profile Finder built with React. Type any GitHub username and instantly get their profile card — avatar, bio, join date, public repos, followers, following, location, company, and social links — all powered by the official GitHub REST API.
🚀 Live Demo
🔗 https://githubfinder-pro.vercel.app/
🛠️ Tech Stack
- ⚛️ React 19 — component-based UI
- 🌐 axios — HTTP requests to the GitHub API
- 🎨 react-icons — location, company, Twitter & GitHub icons
- 📦 Create React App — build tooling
- ☁️ Vercel — deployment
📚 What I Learned
- useState — managing form input, fetched profile data, and error state
- Controlled inputs — binding input value to state via onChange
- Form handling — onSubmit with e.preventDefault() and async/await
- Async data fetching — calling the GitHub API with axios
- Error handling — try/catch with a friendly "user not found" message
- Conditional rendering — showing loading results/errors only when needed
- Props & fallbacks — profile.name || profile.login, bio || "No bio provided."
- Responsive CSS — clamp(), flexbox, and media queries for mobile
- React StrictMode — best practices via <React.StrictMode>
⬇️ Installation
Clone the project:
git clone https://github.com/Nidal15-ds/github-profile-finder.git
Navigate into the folder and install dependencies:
cd github-profile-finder
npm install
Start the development server:
npm start
The app runs at http://localhost:3000 and reloads automatically on changes.
🗂️ Project Structure
github-profile-finder/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── GithubSearch.js
│   │   └── GithubSearch.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
💻 Available Scripts
Command
npm start
npm run build
npm test
