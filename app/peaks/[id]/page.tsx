import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: peaks } = await supabase
    .from("peaks")
    .select("id, name, elevation")
    .eq("id", params.id);
  const peak = peaks && peaks[0];
  if (!peak) redirect("/peaks");

  return (
    <div className="container mx-auto mt-10 px-4">
      <h3>{peak.name}</h3>
      <p>{peak.elevation}</p>
      <button className="mt-5 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Edit
      </button>
    </div>
  );
}
