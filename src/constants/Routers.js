const ROUTERS = {
  HOME: "/",
  CUSTOM_STICKER: "/custom-sticker",
  CHOOSE_SIZE_QUANTITY: "/products",
  UPLOAD_STICKER: "/upload-sticker",
  CART: "/cart",
  CHECKOOUT: "/checkout",
  SUCCESS: "/success",
  FAQ: "/faq",
  HELP: "/help",
  STATUS: "/status",
  TERMSOFSERVICE: "/terms-of-service",
  PRIVACYPOLICY: "/privacy-policy",
  REFUNDPOLICY: "/refund-policy",
}

export const NAVBAR_ROUTERS = [
  { title: "HOME", path: ROUTERS.HOME },
  { title: "FAQ", path: ROUTERS.FAQ },
  { title: "STATUS", path: ROUTERS.STATUS },
  { title: "HELP", path: ROUTERS.HELP },
]

export default ROUTERS
