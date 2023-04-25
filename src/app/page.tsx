import AppMainLayout from "@/features/app/components/layout/AppMainLayout";
import HomeIndex from "@/features/home/ui/HomeIndex";

function Home() {
  return (
    <main>
      <AppMainLayout>
        <HomeIndex />
      </AppMainLayout>
    </main>
  );
}

export default Home;
