import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
});

router.get("/google", (req, res) => {
    res.send("Google Auth");  
});

router.get("/logout", (req, res) => {
    res.send("Logging out");
});

export default router;