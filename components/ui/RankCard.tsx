import { ShieldCheck } from "lucide-react";

export default function RankCard({
  name,
  price,
  perks,
  color,
  featured,
}: {
  name: string;
  price: string;
  perks: string[];
  color: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`p-12 rounded-[3.5rem] border transition-all duration-500 hover:-translate-y-3 ${
        featured
          ? "border-yellow-400 bg-yellow-400/[0.03] shadow-[0_0_80px_rgba(250,204,21,0.1)] scale-105 z-20"
          : "border-white/5 bg-zinc-900/30"
      }`}
    >
      <h3 className={`text-4xl font-black uppercase mb-2 italic ${color}`}>
        {name}
      </h3>
      <p className="text-[11px] font-black text-zinc-600 uppercase tracking-widest mb-10">
        {price}
      </p>
      <ul className="space-y-5 mb-12">
        {perks.map((p, i) => (
          <li
            key={i}
            className="flex items-center gap-4 text-[13px] font-bold text-zinc-300"
          >
            <ShieldCheck size={16} className="text-yellow-400" /> {p}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all ${
          featured
            ? "bg-yellow-400 text-black hover:shadow-[0_0_30px_rgba(250,204,21_0.6)]"
            : "bg-white/5 text-white hover:bg-white/10"
        }`}
      >
        Select Tier
      </button>
    </div>
  );
}
