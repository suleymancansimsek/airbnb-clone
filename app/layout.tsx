import { Nunito } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal/>
          <RegisterModal/>
        <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
