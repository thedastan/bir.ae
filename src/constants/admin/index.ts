export const IS_CLIENT = typeof window !== "undefined";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const PHONE_NUMBER = "971545272111";
export const WHATSAPP_NUMBER = PHONE_NUMBER;

export const EMAIL_ADDRESS = "birdigital@gmail.com";
export const INSTAGRAM = "1digital.ae";
export const TELEGRAM = "@dastan_mukeev";

/// links/

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.split(" ").join(
  ""
)}`;
export const EMAIL_ADDRESS_LINK = `mailto:${EMAIL_ADDRESS}`;
export const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM}/`;
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM}`;

// mailto:birdigital@gmail.com
