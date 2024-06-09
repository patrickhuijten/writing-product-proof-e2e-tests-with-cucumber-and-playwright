import { redirect } from "next/navigation";
import styles from "./workshopForm.module.css";

interface WorkshopFormProps {
  active: boolean;
  workshopId: number | null;
}

export default function WorkshopForm({
  active,
  workshopId,
}: WorkshopFormProps) {
  async function signUp(formData: FormData) {
    "use server";

    if (!workshopId) {
      throw new Error("No workshop ID provided");
    }

    const rawFormData = {
      workshopId,
      customerId: formData.get("fname"),
      amount: formData.get("lname"),
      status: formData.get("email"),
    };

    console.log("User signed up with the following data:", rawFormData);
    redirect(`/workshops?signedUp=true&signedUpWorkshopId=${workshopId}`);
  }

  return (
    <form className={styles.form} data-active={active} action={signUp}>
      <label>
        First name*
        <input
          required
          disabled={!active}
          type="text"
          id="fname"
          name="fname"
          placeholder="Please enter your first name or initial."
        />
      </label>
      <label>
        Last name*
        <input
          required
          disabled={!active}
          type="text"
          id="lname"
          name="lname"
          placeholder="Please enter your last name."
        />
      </label>
      <label>
        Email*
        <input
          required
          disabled={!active}
          type="email"
          name="email"
          id="email"
          placeholder="Please enter your email address."
        />
      </label>
      <button type="submit" disabled={!active}>
        <h3>Sign up</h3>
      </button>
    </form>
  );
}
