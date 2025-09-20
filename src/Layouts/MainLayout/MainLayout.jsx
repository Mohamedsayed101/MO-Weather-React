import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header className=""/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
