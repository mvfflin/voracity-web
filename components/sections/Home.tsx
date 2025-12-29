import {
  Flame,
  Check,
  Copy,
  Users,
  Globe,
  Zap,
  Gamepad2,
  Laptop,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import StatusRow from "../ui/StatusRow";

export default function HomeSection() {
  const [serverData, setSData] = useState<any>("");
  const [copiedIP, setCopiedIP] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const serverIP = "play.voracity.my.id";
  const bedrockPort = "19364";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const copyPort = () => {
    navigator.clipboard.writeText(bedrockPort);
    setCopiedPort(true);
    setTimeout(() => setCopiedPort(false), 2000);
  };

  const fetchServer = async () => {
    const res = await fetch(`https://api.mcsrvstat.us/3/${serverIP}`);
    if (res.ok) {
      const data = await res.json();
      setSData(data);
    }
  };

  useEffect(() => {
    fetchServer();
  }, []);

  return (
    <header className="pt-56 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-yellow-400">
                <Flame size={14} className="fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Cross-Play Active
                </span>
              </div>
              <div className="flex gap-2 text-zinc-600">
                <Laptop size={16} /> <Smartphone size={16} />{" "}
                <Gamepad2 size={16} />
              </div>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] uppercase mb-10 tracking-tighter italic">
              VORACITY <br />{" "}
              <span className="text-yellow-400 drop-shadow-[0_10px_30px_rgba(250,204,21,0.3)]">
                SEASON 3.
              </span>
            </h1>

            <p className="text-lg text-zinc-500 font-medium mb-12 max-w-lg leading-relaxed">
              Join server menggunakan IP Address dibawah, sertakan port jika
              kamu bermain di bedrock edition!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* IP Copy */}
              <div
                onClick={copyIP}
                className="group flex items-center bg-zinc-900/50 border-2 border-white/5 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all cursor-pointer shadow-2xl active:scale-95"
              >
                <div className="px-8 py-5">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase mb-1 tracking-widest">
                    Server IP
                  </p>
                  <p className="font-mono text-white text-xl md:text-2xl">
                    {serverIP}
                  </p>
                </div>
                <div className="px-6 py-8 bg-zinc-800 group-hover:bg-yellow-400 transition-colors">
                  {copiedIP ? (
                    <Check size={24} className="text-emerald-400" />
                  ) : (
                    <Copy
                      size={24}
                      className="text-yellow-400 group-hover:text-black"
                    />
                  )}
                </div>
              </div>

              {/* Port Copy (Highlighted for Bedrock Users) */}
              <div
                onClick={copyPort}
                className="group flex items-center bg-zinc-900/50 border-2 border-white/5 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all cursor-pointer shadow-2xl active:scale-95"
              >
                <div className="px-8 py-5">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase mb-1 tracking-widest">
                    Bedrock Port
                  </p>
                  <p className="font-mono text-white text-xl md:text-2xl">
                    {bedrockPort}
                  </p>
                </div>
                <div className="px-6 py-8 bg-zinc-800 group-hover:bg-yellow-400 transition-colors">
                  {copiedPort ? (
                    <Check size={24} className="text-emerald-400" />
                  ) : (
                    <Copy
                      size={24}
                      className="text-yellow-400 group-hover:text-black"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="lg:col-span-5 bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 md:p-12 shadow-3xl relative overflow-hidden transition-transform hover:-translate-y-2 duration-500">
            <h3 className="text-white font-black text-2xl uppercase mb-12 flex items-center gap-4 italic">
              <div className="w-1.5 h-8 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]" />{" "}
              Dashboard
            </h3>
            <div className="lg:absolute lg:top-10 lg:right-10 flex items-center gap-2.5 px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">
                Live Status
              </span>
            </div>
            <div className="space-y-8">
              <StatusRow
                label="Players"
                value={`${serverData.players?.online} / ${serverData.players?.max}`}
                icon={<Users className="text-yellow-400" />}
              />
              <StatusRow
                label="Latency"
                value="20ms"
                icon={<Globe className="text-yellow-400" />}
              />
              <StatusRow
                label="Stability"
                value="20.0 TPS"
                icon={<Zap className="text-yellow-400" />}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
