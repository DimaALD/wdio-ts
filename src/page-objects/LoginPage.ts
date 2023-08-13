export const LoginPage = {
  selector: ".login_wrapper-inner",
  url: "https://www.saucedemo.com/",
  name: "Login",
  children: {
    username: { selector: "[data-test=username]" },
    password: { selector: "[data-test=password]" },
    submit: { selector: "[data-test=login-button]" },
  },
};
