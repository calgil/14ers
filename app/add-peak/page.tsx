import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const addPeak = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const elevation = formData.get("elevation") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("peaks")
      .insert({ name, elevation: +elevation })
      .select();

    if (error) {
      console.log({ error });
    }
    console.log({ data });
  };
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={addPeak}
      >
        <h1 className="mb-4 text-center text-2xl">Add New Peak</h1>
        <label className="text-md" htmlFor="name">
          Name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="name"
          placeholder="New Peak"
        />
        <label className="text-md" htmlFor="elevation">
          Elevation
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="number"
          name="elevation"
          placeholder="14,000"
        />
        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Add
        </button>
      </form>
    </div>
  );
}
