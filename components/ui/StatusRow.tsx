export default function StatusRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 hover:border-yellow-400/30 hover:bg-white/[0.07] transition-all duration-300 group cursor-default">
      <div className="flex items-center gap-5">
        <div className="p-2.5 bg-black/40 rounded-xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="text-[11px] font-black uppercase text-zinc-500 tracking-widest">
          {label}
        </span>
      </div>
      <span className="text-base font-black text-white group-hover:text-yellow-400 transition-colors duration-300">
        {value}
      </span>
    </div>
  );
}
