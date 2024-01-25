import { PeakCard } from "@/components/PeakCard";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: peaks } = await supabase.from("peaks").select();
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl">Colorado 14ers</h1>
      <Link
        className="block w-fit my-4 bg-green-800 px-2 py-1 rounded duration-300 hover:bg-green-500 hover:scale-105"
        href="/add-peak"
      >
        Add Peak
      </Link>
      <div className="mt-4 flex flex-wrap gap-4">
        {peaks?.map((peak) => (
          <PeakCard key={peak.id} id={peak.id} name={peak.name} />
        ))}
      </div>
    </div>
  );
}
