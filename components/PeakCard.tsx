import Link from "next/link";

type PeakCardProps = {
  name: string;
  id: number;
};
export const PeakCard = ({ id, name }: PeakCardProps) => {
  return (
    <Link
      className="p-6 bg-slate-600 rounded ease-out duration-150 hover:scale-105"
      href={`/peaks/${id}`}
    >
      <h3>{name}</h3>
    </Link>
  );
};
