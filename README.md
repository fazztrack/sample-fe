# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# How to Run
- create `.env.local` file, you can copy from `.env.example`
- fill VITE_API_URL with your api url
- dont forget to install package `npm install`
- run app `npm run dev`

# Note
- this app using API from https://jsonplaceholder.typicode.com, and use `posts` endpoint
- if you want edit endpoint just go to file services/api.js, and change the endpoint