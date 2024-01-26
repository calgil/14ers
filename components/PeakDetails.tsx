"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type PeakDetailsProps = {
  peak: {
    id: number;
    name: string;
    elevation: number;
  };
};
export const PeakDetails = ({ peak }: PeakDetailsProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [peakName, setPeakName] = useState(peak.name);
  const [peakElevation, setPeakElevation] = useState(peak.elevation);

  const editPeak = async (e: React.FormEvent) => {
    e.preventDefault();

    const supabase = createClient();

    const { error } = await supabase
      .from("peaks")
      .update({ name: peakName, elevation: peakElevation })
      .eq("id", peak.id)
      .select();
    if (error) console.error({ error });
    setIsEdit(false);
  };

  useEffect(() => {
    console.log({ isEdit });
  }, [isEdit]);

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <button
        type="button"
        onClick={() => setIsEdit(!isEdit)}
        className="mt-5 mb-4 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Edit
      </button>
      {isEdit ? (
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          onSubmit={editPeak}
        >
          <label htmlFor="name">Name</label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="text"
            name="name"
            placeholder={peak.name}
            onChange={(e) => setPeakName(e.target.value)}
          />
          <label htmlFor="elevation">Elevation</label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="number"
            name="elevation"
            placeholder={peak.elevation.toString()}
            onChange={(e) => setPeakElevation(+e.target.value)}
          />
          <button className="mt-5 py-2 px-4 rounded-md no-underline bg-green-800 duration-200 hover:bg-green-600">
            Submit
          </button>
        </form>
      ) : (
        <div className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <h3>{peak.name}</h3>
          <p>{peak.elevation}</p>
        </div>
      )}
    </div>
  );
};
