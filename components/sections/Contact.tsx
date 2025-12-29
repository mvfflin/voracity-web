import {
  MessageSquare,
  ExternalLink,
  Bell,
  Gift,
  LifeBuoy,
  Users,
  Clock,
} from "lucide-react";

export default function Contact() {
  const discordLink = "https://discord.gg/Qh5afaCpyh";
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-zinc-900 to-[#050505] border border-yellow-400/20 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group shadow-[0_0_50px_rgba(250,204,21,0.05)]">
          {/* Background Icon Glow */}
          <MessageSquare className="absolute -bottom-10 -right-10 w-64 h-64 text-yellow-400/5 rotate-12 transition-transform group-hover:scale-110 duration-700" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter italic mb-8">
                Join our <br />{" "}
                <span className="text-yellow-400">Community.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 font-medium leading-relaxed">
                Bergabunglah dengan 300+ pemain lainnya di discord kami, agar
                kalian mendapatkan teman baru dan jika kalian perlu bantuan,
                hubungi team staff kami lewat discord ini!
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                    <Bell size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-zinc-300">
                    Updates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                    <Clock size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-zinc-300">
                    Fast Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                    <Gift size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-zinc-300">
                    Giveaways
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                    <Users size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-zinc-300">
                    Critics and suggestions
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-12 bg-white/[0.03] border border-white/5 rounded-[3rem] backdrop-blur-sm">
              <div className="mb-8 p-6 bg-yellow-400 rounded-[2rem] shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                <MessageSquare size={48} className="text-black" />
              </div>
              <p className="text-white font-black text-2xl uppercase mb-2">
                Siap untuk bergabung?
              </p>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10 text-center">
                Tekan tombol dibawah ini!
              </p>
              <a
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] text-center hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-3 group/btn shadow-xl"
              >
                Join Discord
                <ExternalLink
                  size={14}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
