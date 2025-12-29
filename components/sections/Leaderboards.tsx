import { Trophy, Medal, Clock, TrendingUp } from "lucide-react";
import Leaderboard from "../ui/Leaderboard";

export default function Leaderboards() {
  return (
    <section
      id="leaderboards"
      className="py-24 px-6 relative z-10 bg-[#030303] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <Trophy className="text-yellow-400 mb-4" size={40} />
          <h2 className="text-4xl font-black text-white uppercase tracking-[0.2em] italic">
            Leaderboards
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Leaderboard
            category="Top Voters"
            icon={<Medal size={20} />}
            players={[
              "whysixyericho",
              ".Herobrina91u",
              "Mvlin",
              "uchihavortex123",
              "BackOneUdang",
            ]}
          />
          <Leaderboard
            category="Top Playtime"
            icon={<Clock size={20} />}
            players={[
              "ellcihuy",
              "VLO667",
              ".RANDITZX26110",
              "BackOneUdang",
              "1Wann",
            ]}
          />
          <Leaderboard
            category="Top Wealth"
            icon={<TrendingUp size={20} />}
            players={[
              "ellcihuy",
              "1Wann",
              "BackOneUdang",
              "ItzOverWolf",
              ".FeistyRug3070",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
