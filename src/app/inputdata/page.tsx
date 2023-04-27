import AppMainLayout from "@/features/app/components/layout/AppMainLayout";
import MerhantIndex from "@/features/merchant/ui/MerchantIndex";

function Home() {
  return (
    <main>
      <AppMainLayout>
        <MerhantIndex />
      </AppMainLayout>
    </main>
  );
}

export default Home;
