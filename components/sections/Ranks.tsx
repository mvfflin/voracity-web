import { Crown } from "lucide-react";
import RankCard from "../ui/RankCard";

export default function Ranks() {
  return (
    <section id="ranks" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Crown
            className="text-yellow-400 mb-6 mx-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            size={48}
          />
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic">
            RANKS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RankCard
            name="Elder"
            price="IDR 10.000,00"
            perks={[
              "Akses command /suicide, /craft, /hat",
              "2 Player Vaults",
              "5 Sethomes",
              "Elder kit",
              "6 Claims, 20k Claim blocks",
              "Premium Rewards",
            ]}
            color="bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text"
          />
          <RankCard
            name="Warden"
            price="IDR 20.000,00"
            perks={[
              "Keuntungan Elder",
              "Akses command /pweather, /ptime",
              "3 Player Vaults",
              "6 Sethomes",
              "8 Claims, 40k Claim blocks",
              "Warden kit",
            ]}
            color="bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text"
          />
          <RankCard
            name="Arcanist"
            price="IDR 30.000,00"
            perks={[
              "Keuntungan Warden",
              "4 Player Vaults",
              "7 Sethomes",
              "10 Claims, 60k Claim blocks",
              "Arcanist kit",
            ]}
            color="bg-gradient-to-r from-pink-500 to-white text-transparent bg-clip-text"
          />
          <RankCard
            name="Guardian"
            price="IDR 50.000,00"
            perks={[
              "Keuntungan Arcanist",
              "Akses command /ec, /feed, /fix, /heal",
              "5 Player Vaults",
              "8 Sethomes",
              "25 Claims, 80k Claim blocks",
              "Guardian Kit",
              "Custom Tags",
              "$100k/hari",
              "5 Rare key/hari",
            ]}
            color="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text"
          />
          <RankCard
            name="High Lord"
            price="IDR 80.000,0"
            perks={[
              "Keuntungan Guardian",
              "Akses command /anvil, /smithingtable, /nick",
              "6 Player Vaults",
              "9 Sethomes",
              "30 Claims, 120k Claim blocks",
              "Highlord Kit",
              "$250k/hari",
              "5 Epic key/hari",
              "2 Random Custom Enchantments/hari",
            ]}
            color="bg-gradient-to-r from-cyan-500 to-green-500 text-transparent bg-clip-text"
            featured
          />
          <RankCard
            name="Archon"
            price="IDR 100.000,00"
            perks={[
              "Keuntungan High Lord",
              "Akses command /changeheight, /glow",
              "6 Player Vaults",
              "10 Sethomes",
              "40 Claims, 160k Claim blocks",
              "Archon Kit",
              "$500k/hari",
              "5 Epic key/hari",
              "4 Random Custom Enchantments/hari",
            ]}
            color="bg-gradient-to-r from-pink-500 to-red-800 text-transparent bg-clip-text"
          />
          <RankCard
            name="Celestial"
            price="IDR 200.000,00"
            perks={[
              "Keuntungan Archon",
              "Akses command /itemlore, /itemname, /smite, /tphere, /tp, /fly",
              "10 Player Vaults",
              "20 Sethomes",
              "50 Claims, 1 Juta Claim blocks",
              "Celestial Kit",
              "$1M/hari",
              "5 ALL TIER key/hari",
              "5 Custom Enchantments/minggu",
            ]}
            color="bg-gradient-to-r from-cyan-500 to-white text-transparent bg-clip-text"
          />
        </div>
      </div>
    </section>
  );
}
