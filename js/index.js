import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about-universe", "/pages/about-universe.html")
router.add("/about-exploration", "/pages/about-exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
