import Sidebar from "@/components/ui/Sidebar";
import type { ReactNode } from "react";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {

  const loggedIn = { firstName: 'Yehan', lastName: 'Fernando'}

  return (
    <main className = "flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <div>
            <MobileNav user={loggedIn}/>

          </div>
        </div>
          {children}
      </div>
      
    </main>
  );
}
