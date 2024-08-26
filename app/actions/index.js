'use server'
import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "" });
}

export async function doLogout() {
  await signOut({ redirectTo: "" });
}

export async function doCredentialLogin(formData) {
  console.log("doCREDENTIALlOGIN", formData);

  const email= formData.get("email")
  const password = formData.get("password")
  

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("RESPONSE", response)
    return response;
  } catch (err) {
    throw err;
  }
}