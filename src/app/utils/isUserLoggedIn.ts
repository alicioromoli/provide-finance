import { CONSTANTS } from "../constants";

export const isUserLoggedIn = () => {
  if (typeof window !== "undefined") {
    return document.cookie.split(";").some((cookie) => {
      const [key, value] = cookie.trim().split("=");
      return key === CONSTANTS.USER_LOGGED_IN && value === "true";
    });
  }
};
