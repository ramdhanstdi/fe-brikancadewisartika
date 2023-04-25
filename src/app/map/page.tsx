import AppMainLayout from "@/features/app/components/layout/AppMainLayout";
import MapIndex from "@/features/map/ui/MapIndex";

function Home() {
  return (
    <main>
      <AppMainLayout>
        <MapIndex />
      </AppMainLayout>
    </main>
  );
}

export default Home;
