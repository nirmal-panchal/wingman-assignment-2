import HomeContent from "@/components/home-content";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import LayoutProvider from "@/providers/layout-provider";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutProvider>
      <HomeContent />
    </LayoutProvider>
  );
}
