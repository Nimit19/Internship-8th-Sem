"use client";
import { oAuthSignIn } from "@/app/actions/auth/oauth-signin";
import GithubIcon from "@/svgs/GithubIcon";
import GoogleIcon from "@/svgs/GoogleIcon";
import { Provider } from "@supabase/supabase-js";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "google",
      displayName: "Google",
      icon: <GoogleIcon />,
    },
    {
      name: "github",
      displayName: "GitHub",
      icon: <GithubIcon />,
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider) => (
        <button
          className="border rounded-lg py-2 w-full flex items-center justify-center gap-2 hover:border-primary "
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
        >
          {provider.icon}
          &nbsp;Login with {provider.displayName}
        </button>
      ))}
    </>
  );
}
