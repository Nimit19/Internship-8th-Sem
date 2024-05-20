"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { AppRoute } from "@/routes/routes";
import { headers } from "next/headers";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().trim().min(1, { message: "Password must be Required" }),
});

export async function login(prevState: any, formData: FormData) {
  const data: credentialsType = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validatedFields = loginSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return {
      errors: [
        {
          validation: error.name,
          message: error.message,
          path: [error.name],
        },
      ],
    };
  }

  revalidatePath("/", "layout");
  redirect(AppRoute.HOME_PAGE);
}

const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
    .regex(/[0-9]/, { message: "Contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character",
    })
    .trim(),
});

export async function signup(prevState: any, formData: FormData) {
  const data: credentialsType = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validatedFields = signupSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const supabase = await createClient();

  const { error, data: res } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return {
      errors: [
        {
          validation: error.name,
          message: error.message,
          path: [error.name],
        },
      ],
    };
  }

  revalidatePath("/", "layout");
  return {
    errors: [],
    email: formData.get("email"),
    showMessage: true,
  };
}

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export async function forgotPassword(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const validatedFields = forgotPasswordSchema.safeParse({ email });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const origin = headers().get("origin");
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email as string, {
    redirectTo: `${origin}/reset-password`,
  });

  if (error) {
    return {
      errors: [
        {
          validation: error.name,
          message: error.message,
          path: [error.name],
        },
      ],
    };
  }

  return {
    errors: [],
    showMessage: true,
  };
}

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
      .regex(/[0-9]/, { message: "Contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character",
      })
      .trim(),
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export async function resetPassword(prevState: any, formData: FormData) {
  const formFields = {
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const validatedFields = resetPasswordSchema.safeParse(formFields);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: formData.get("newPassword") as string,
  });

  if (error) {
    console.log(error);

    return {
      errors: [
        {
          validation: error.name,
          message: error.message,
          path: [error.name],
        },
      ],
    };
  }

  return redirect(AppRoute.LOG_IN);
}

export async function handleLogout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
