class Route {
  path: string;

  title: string;

  description: string;

  constructor(path: string, title: string, description: string) {
    this.path = path;
    this.title = title;
    this.description = description;
  }
}

class Routes {
  HOME = new Route('/', 'Home page', 'Home - Page');

  // auth
  REGISTER = new Route('/auth/register', 'Account creation page', 'Register - Page');
  LOGIN = new Route('/auth/login', 'Sign in page', 'Login - Page');
  FORGOT_PWD = new Route('/auth/forgot_pwd', 'Forgot Password page', 'Forgot Password - Page');
  RESET_PWD = new Route('/auth/reset_pwd/:id', 'Reset Password page', 'Reset Password - Page');
}

const ROUTES = new Routes();
export default ROUTES;
