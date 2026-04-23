import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACCEENT -  TUT-TANK",
};
export default function TuttankPage() {
  return (
    <>
      {/* header */}
      <Header />

      <section className="min-h-screen flex flex-col justify-center items-center">
        <div>
          <h1>TUTTANK PRGRAMME EN DEVELOPPEMENT</h1>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
}
