import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"


const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from './routes/user.routes.js'

// agar router alag le gye hian to hume app.get ki jagah app.use krna hota hai use middlewares
// router declartation

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register
export default app;
 