import Link from "next/link";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <div>
        <Navbar />
      </div>
      <div className="pt-40 pb-20 bg-slate-100">{children}</div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
