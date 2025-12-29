import { Hammer } from "lucide-react";
import StaffMember from "../ui/StaffMember";

export default function Staff() {
  return (
    <section id="staff" className="py-24 px-6 relative z-10">
      <div className="text-center mb-20">
        <Hammer
          className="text-yellow-400 mb-6 mx-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
          size={48}
        />
        <h2 className="text-5xl font-black text-white uppercase tracking-tight italic">
          Staffs
        </h2>
        <h3 className="text-xl text-zinc-500 mt-5">
          Para staff yang siap membantumu jika kamu memerlukan bantuan!
        </h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8">
        <StaffMember name="yericho" role="Founder" />
        <StaffMember
          name="mvfflin"
          role="Developer"
          icon="https://mc-heads.net/avatar/5b00b6cb175749fd9fd25b9a86471ce5"
        />
        {/* <StaffMember name="DevSteve" role="Co-Founder" /> */}
        <StaffMember
          name="ItzIchaaa"
          role="Helper"
          icon="https://mc-heads.net/avatar/99c24fb41a274f5faf24a60ca0bfa1ad"
        />
      </div>
    </section>
  );
}
