const STORAGE_KEY_USER = "hypermarket_user";
const STORAGE_KEY_TOKEN = "hypermarket_token";

export const authClient = {
  auth: {
    async me() {
      const userJson = localStorage.getItem(STORAGE_KEY_USER);
      if (!userJson) return null;
      try {
        return JSON.parse(userJson);
      } catch {
        return null;
      }
    },

    async loginViaEmailPassword(email, password) {
      if (!email || !password) {
        throw new Error("Please enter both email and password.");
      }
      const user = { email, name: email.split("@")[0] };
      const token = "token_" + Math.random().toString(36).substring(2);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      return { user, token };
    },

    loginWithProvider(provider, returnTo = "/") {
      const user = { email: "user@gmail.com", name: "Google User" };
      const token = "token_google_" + Math.random().toString(36).substring(2);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      window.location.href = returnTo;
    },

    async register({ email, password }) {
      if (!email || !password) {
        throw new Error("Please fill in all fields.");
      }
      return { success: true };
    },

    async verifyOtp({ email, otpCode }) {
      if (!otpCode || otpCode.length < 6) {
        throw new Error("Invalid verification code.");
      }
      const user = { email, name: email.split("@")[0] };
      const token = "token_" + Math.random().toString(36).substring(2);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      return { access_token: token, user };
    },

    async resendOtp(email) {
      return { success: true };
    },

    async resetPasswordRequest(email) {
      return { success: true };
    },

    async resetPassword({ resetToken, newPassword }) {
      if (!newPassword) {
        throw new Error("Password is required.");
      }
      return { success: true };
    },

    setToken(token) {
      if (token) {
        localStorage.setItem(STORAGE_KEY_TOKEN, token);
      } else {
        localStorage.removeItem(STORAGE_KEY_TOKEN);
      }
    },

    getToken() {
      return localStorage.getItem(STORAGE_KEY_TOKEN);
    },

    logout(redirectUrl) {
      localStorage.removeItem(STORAGE_KEY_USER);
      localStorage.removeItem(STORAGE_KEY_TOKEN);
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    },

    redirectToLogin(returnTo) {
      const path = returnTo ? `/login?returnTo=${encodeURIComponent(returnTo)}` : "/login";
      window.location.href = path;
    },

    isAuthenticated() {
      return Boolean(localStorage.getItem(STORAGE_KEY_TOKEN));
    },
  },
};
