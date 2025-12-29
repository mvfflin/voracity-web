export default function CardSmall({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-4xl hover:border-yellow-400/30 hover:bg-yellow-400/2 hover:-translate-y-1 transition-all group">
      <div className="mb-4 transition-transform">{icon}</div>
      <h3 className="text-white font-black uppercase mb-2 text-sm italic tracking-tight">
        {title}
      </h3>
      <p className="text-[11px] text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
