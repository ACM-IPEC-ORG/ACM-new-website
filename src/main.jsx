import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthProvider } from "./Context/AuthContext.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID=import.meta.env.VITE_GOOGLE_CLIENT_ID

ReactDOM.render(
    <ThemeProvider>
        <AuthProvider>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <App />
            </GoogleOAuthProvider>
        </AuthProvider>
    </ThemeProvider>
    , document.getElementById('root'))
