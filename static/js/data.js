/* ========================================
   DATA — فقط داده‌ی اصلی (بدون State / Logic)
   تصاویر نمونه از picsum هستند؛ با مسیر تصاویر واقعی جایگزین شوند.
   ساختار: هر دسته‌بندی یک تصویر دارد، هر محصول یک آرایه images.
   ======================================== */

const categories = [
    { title: "گردنبند", image: "static/images/category/cat-neckless.jpg" },
    { title: "گوشواره", image: "static/images/category/cat-gosh.jpg" },
    { title: "دستبند", image: "static/images/category/cat-dast.jpg" },
    { title: "آویز", image: "static/images/category/cat-aviz.jpg" },
    { title: "حلقه", image: "static/images/category/cat-hal.jpg" }
]

// فیلتر «جنس»
const materials = ["چوب", "استیل"]

// فیلتر «نوع کار»
const workTypes = ["نقاشی", "چاپ عکس"]

const products = [
    { id: 1, title: "گردنبند تایتانیکی", desc: "طرح کشتی تایتانیک روی چوب گردو با نقاشی دستی.", price: 320000, category: "گردنبند", material: "چوب", workType: "نقاشی", images: ["static/images/products/p1-1.jpg"] },
    { id: 2, title: "گوشواره رزین‌چوب", desc: "", price: 280000, category: "گوشواره", material: "چوب", workType: "نقاشی", images: ["static/images/products/p2-1.jpg"] },
    { id: 3, title: "دستبند کشتی", desc: "دستبند استیل ضدزنگ با کنده‌کاری ظریف.", price: 450000, category: "دستبند", material: "استیل", workType: "چاپ عکس", images: ["static/images/products/p3-1.jpg"] },
    { id: 4, title: "آویز قلب", desc: "آویز قلبی چوبی با طرح قطب‌نما.", price: 240000, category: "آویز", material: "چوب", workType: "نقاشی", images: ["static/images/products/p4-1.jpg"] },
    { id: 5, title: "گردنبند عکس", desc: "چاپ عکس دلخواه شما روی چوب.", price: 340000, category: "گردنبند", material: "چوب", workType: "چاپ عکس", images: ["static/images/products/p5-1.jpg"] },
    { id: 6, title: "حلقه تایتانیکی", desc: "", price: 520000, category: "حلقه", material: "استیل", workType: "چاپ عکس", images: ["static/images/products/p6-1.jpg"] },
    { id: 7, title: "آویز قطب‌نما", desc: "قطب‌نمای نقاشی‌شده روی چوب با پوشش ضدآب.", price: 290000, category: "آویز", material: "چوب", workType: "نقاشی", images: ["static/images/products/p7-1.jpg"] },
    { id: 8, title: "گردنبند طرح‌دار", desc: "گردنبند استیل با طرح اختصاصی.", price: 380000, category: "گردنبند", material: "استیل", workType: "نقاشی", images: ["static/images/products/p8-1.jpg"] },
    { id: 9, title: "گوشواره موج", desc: "گوشواره استیل با چاپ عکس دریا.", price: 260000, category: "گوشواره", material: "استیل", workType: "چاپ عکس", images: ["static/images/products/p9-1.jpg"] },
    { id: 10, title: "دستبند چوبی ناخدا", desc: "", price: 310000, category: "دستبند", material: "چوب", workType: "نقاشی", images: ["static/images/products/p10-1.jpg"] },
    { id: 11, title: "حلقه چوبی لنگر", desc: "حلقه چوبی سبک با نقش لنگر.", price: 270000, category: "حلقه", material: "چوب", workType: "نقاشی", images: ["static/images/products/p11-1.jpg"] },
    { id: 12, title: "آویز عکس استیل", desc: "آویز استیل با چاپ عکس خاطره‌انگیز شما.", price: 350000, category: "آویز", material: "استیل", workType: "چاپ عکس", images: ["static/images/products/p12-1.jpg"] }
]
