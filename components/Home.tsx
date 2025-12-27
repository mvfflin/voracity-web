import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomeSection() {
  const [serverData, setSData] = useState<any>("");

  const fetchServer = async (ip: string) => {
    const res = await fetch(`https://api.mcsrvstat.us/3/${ip}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setSData(data);
    }
  };

  useEffect(() => {
    fetchServer("play.voracity.my.id");
    console.log(serverData.hostname);
  }, []);

  return (
    <main className="h-screen flex">
      <div className="m-auto w-max">
        <div className="w-max mx-auto">
          <Image
            src={"/voracity.png"}
            alt="server-icon"
            width={225}
            height={225}
            className="rounded-md"
          />
        </div>
        <h1 className="text-3xl lg:text-5xl justify-center top-5 p-5 font-bold text-yellow-300">
          play.voracity.my.id
        </h1>
        <h1 className="text-xl font- text-center lg:text-2xl mt-2 bg-white text-black rounded-md p-2">
          Join other{" "}
          {serverData.players ? serverData.players.online : "Loading..."}{" "}
          players!
        </h1>
      </div>
    </main>
  );
}
