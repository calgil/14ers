import { PeakDetails } from "@/components/PeakDetails";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: peaks } = await supabase
    .from("peaks")
    .select()
    .eq("id", params.id);
  const peak = peaks && peaks[0];
  if (!peak) redirect("/");

  return (
    <div className="container mx-auto mt-10 px-4">
      <PeakDetails peak={peak} />
    </div>
  );
}
