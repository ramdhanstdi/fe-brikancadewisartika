import "./globals.css";
import "leaflet/dist/leaflet.css";
import "react-datepicker/dist/react-datepicker.css";

export const metadata = {
  title: "BRI Kanca Dewi Sartika",
  description: "Report",
  icons: {
    icon: "/images/bri-merchant.png",
  },
};

import { Providers } from "@/features/plugins/redux/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lg:p-2 md:p-1">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
