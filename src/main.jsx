import React from 'react'
import ReactDOM from 'react-dom/client' // <--- IMPORTANT: Note '/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthProvider } from "./Context/AuthContext.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root')); // <--- Change to createRoot

// Render the app using the root
root.render( // <--- Use root.render instead of ReactDOM.render
    <React.StrictMode> {/* It's good practice to wrap your app in StrictMode */}
        <ThemeProvider>
            <AuthProvider>
                <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <App />
                </GoogleOAuthProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);