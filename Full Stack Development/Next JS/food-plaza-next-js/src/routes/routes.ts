export interface AppRouteType {
  LOG_IN: string;
  SIGN_UP: string;
  RESET_PASSWORD: string;
  FORGOT_PASSWORD: string;
  MENU_PAGE: string;
  CART_PAGE: string;
  HOME_PAGE: string;
  ORDER_PAGE: string;
}
export const AppRoute: AppRouteType = {
  // Auth routes
  LOG_IN: "/auth?mode=login",
  SIGN_UP: "/auth?mode=signup",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/forgot-password",

  // Restaurant Routes
  MENU_PAGE: "/menu",

  // Cart Routes
  CART_PAGE: "/cart",

  // Home Routes
  HOME_PAGE: "/",

  // Order Routes
  ORDER_PAGE: "/order",
};
