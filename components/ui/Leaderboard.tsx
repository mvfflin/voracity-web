import { Crown, Medal } from "lucide-react";

export default function Leaderboard({
  category,
  icon,
  players,
}: {
  category: string;
  icon: React.ReactNode;
  players: string[];
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-sm italic">
        <div className="p-3 bg-yellow-400/10 rounded-2xl text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
          {icon}
        </div>
        {category}
      </div>
      <div className="space-y-3">
        {players.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-5 bg-zinc-900/50 border border-white/5 rounded-2xl group hover:border-yellow-400/40 hover:bg-zinc-800/50 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-5">
              <span
                className={`text-xs font-black w-6 ${
                  i === 0
                    ? "text-yellow-400"
                    : i === 1
                    ? "text-zinc-400"
                    : i === 2
                    ? "text-orange-500"
                    : "text-zinc-700"
                }`}
              >
                {i === 0 ? <Crown size={16} /> : i + 1}
              </span>
              <span className="text-[13px] font-bold text-zinc-400 group-hover:text-white transition-colors duration-300">
                {p}
              </span>
            </div>
            {i === 0 && (
              <Medal
                size={16}
                className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
