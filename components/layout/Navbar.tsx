import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 md:px-8 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-transform hover:rotate-12 cursor-pointer">
            <Image
              src={"/voracity.png"}
              alt="Voracity MC"
              width={50}
              height={50}
              className="rounded-xl"
            />
          </div>
          <span className="font-black text-white uppercase tracking-tighter italic text-lg md:text-xl">
            Vora<span className="text-yellow-400">city</span>
          </span>
        </div>

        <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          {["about", "ranks", "leaderboards", "staff"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-yellow-400 transition-colors"
            >
              {id}
            </a>
          ))}
        </div>

        <button className="bg-yellow-400 hover:bg-white text-black px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)]">
          Store
        </button>
      </div>
    </nav>
  );
}
