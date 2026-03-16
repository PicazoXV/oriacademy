export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function isValidPhone(phone: string) {
  const normalized = normalizePhone(phone);
  const digitsOnly = normalized.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}
