"use client";

import { ReactNode, FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/features/plugins/redux/store";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
        <Toaster
          toastOptions={{ style: { height: "60px", fontSize: "24px" } }}
        />
      </PersistGate>
    </Provider>
  );
};
