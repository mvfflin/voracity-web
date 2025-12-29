import { Info, Scroll, Sword, Sparkles, TrendingUp } from "lucide-react";
import CardSmall from "../ui/SmallCard";

export default function Description() {
  return (
    <section
      id="about"
      className="py-32 px-6 border-y border-white/5 relative z-10 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Server Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-yellow-400 mb-6">
              <Info size={18} />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">
                Description
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-8">
              Classic Survival,
              <br /> <span className="text-yellow-400">Deep Mechanics.</span>
            </h2>
            <div className="space-y-6 text-zinc-500 font-medium leading-relaxed text-lg">
              <p>
                Voracity bukan hanya sekedar server survival biasa, kami
                menambahkan <span className="text-zinc-200">Sistem RPG</span>{" "}
                untuk memberikan pengalaman bermain yang lebih menyenangkan!
              </p>
              <p>
                Tidak peduli kamu seorang builder, seorang pembunuh mob, atau
                seseorang yang suka grinding untuk mendapatkan item khusus,
                world akan tetap permanen{" "}
                <span className="text-yellow-400/80">
                  Tidak ada reset world.
                </span>
              </p>
            </div>
            <div className="mt-10 flex gap-6">
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter italic">
                  30K+
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">
                  World Border
                </span>
              </div>
              <div className="h-10 w-px bg-white/5" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter italic">
                  2025
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">
                  Established
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: RPG Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardSmall
              icon={<Scroll className="text-yellow-400" />}
              title="Skills"
              desc="Kuasai beragam kemampuan yang dapat membantumu dalam petualanganmu."
            />
            <CardSmall
              icon={<Sword className="text-yellow-400" />}
              title="Custom Enchantments"
              desc="Enchantments baru yang lebih beragam dan lebih kuat untuk membantumu berprogres."
            />
            <CardSmall
              icon={<Sparkles className="text-yellow-400" />}
              title="Massive Features"
              desc="Nikmati bermain survival dengan fitur paling lengkap. Kamu bisa menjual item, mendapat item langka, dan semacamnya."
            />
            <CardSmall
              icon={<TrendingUp className="text-yellow-400" />}
              title="Economy"
              desc="Ekonomi yang digerakkan oleh player dan fitur trading untuk memberi pengalaman terbaik dalam transaksi."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
