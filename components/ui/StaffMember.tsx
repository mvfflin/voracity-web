import { User } from "lucide-react";
import Image from "next/image";

export default function StaffMember({
  name,
  role,
  icon,
}: {
  name: string;
  role: string;
  icon?: string;
}) {
  return (
    <div className="flex items-center gap-5 p-6 bg-zinc-900/30 border border-white/5 rounded-4xl group hover:border-yellow-400/30 hover:bg-zinc-800/50 transition-all duration-300">
      {icon ? (
        <Image
          src={icon}
          alt={name}
          width={24}
          height={24}
          className="w-14 h-14 rounded-2xl flex"
        />
      ) : (
        <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-yellow-400 transition-colors duration-300">
          <User className="text-zinc-500 group-hover:text-black" size={24} />
        </div>
      )}
      <div>
        <p className="text-[15px] font-black text-white uppercase italic">
          {name}
        </p>
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
          {role}
        </p>
      </div>
    </div>
  );
}
