import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: peaks } = await supabase.from("peaks").select();

  return <pre>{JSON.stringify(peaks, null, 2)}</pre>;
}
