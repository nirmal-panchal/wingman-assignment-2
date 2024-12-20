import HomeContent from "@/components/home-content";
import LayoutProvider from "@/providers/layout-provider";

export default function Home() {
  return (
    <LayoutProvider>
      <HomeContent />
    </LayoutProvider>
  );
}
