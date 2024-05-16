import { Button } from "@/components/ui/button";
import InputWithLabel from "@/components/TextFields/InputFields";
import PasswordField from "@/components/TextFields/PasswordField";
import Link from "next/link";
import { AppRoute } from "@/routes/routes";
import { findErrorMessage } from "@/utils/findErrorMessage";
import { errorToast } from "@/utils/toast";
import { OAuthButtons } from "@/app/(auth)/auth/oauth-signin";

const AuthForm = ({ state, formAction, mode }: any) => {
  const emailErrors = findErrorMessage("email", state.errors);
  const passwordErrors = findErrorMessage("password", state.errors);
  const serverError = findErrorMessage("AuthApiError", state.errors);

  if (serverError) {
    serverError.length > 0 && errorToast(serverError.join(", "));
  }

  return (
    <div className="max-w-[600px]  mx-5 sm:m-auto bg-gray-50 p-5 sm:p-16 flex flex-col gap-8 rounded-lg shadow-lg">
      <form className="flex flex-col gap-8 ">
        <InputWithLabel
          type="email"
          name="email"
          label="Email Address"
          helperText={emailErrors.join(", ") || null}
        />

        <PasswordField
          label="Password"
          placeholder="Enter password"
          name="password"
          showValidation={mode === "signup"}
          helperText={passwordErrors.join(", ") || null}
        />

        <div className="flex justify-between items-center ">
          <div className="flex gap-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link href={AppRoute.FORGOT_PASSWORD}>Forgot Password?</Link>
        </div>

        <div className="flex flex-col">
          <Button formAction={formAction}>
            {mode === "login" ? "Log In" : "Sign Up"}
          </Button>
        </div>
      </form>

      <div className="flex items-center justify-center sm:justify-between gap-5">
        <div className="hidden sm:block border w-[30%]"></div>
        <div>Or continue with</div>
        <div className="hidden sm:block border w-[30%]"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 sm:justify-between">
        <OAuthButtons />
      </div>
      <div>
        {mode === "login" && (
          <p>
            Don't you have an account?&nbsp;
            <Link
              href={AppRoute.SIGN_UP}
              className="text-indigo-600 font-semibold"
            >
              Sign up here
            </Link>
          </p>
        )}

        {mode === "signup" && (
          <p>
            Already have an account?&nbsp;
            <Link
              href={AppRoute.LOG_IN}
              className="text-indigo-600 font-semibold"
            >
              Log in here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
