import Navbar from "@/components/dashboard/Navbar";
import Footer from "@/components/home/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default DashboardLayout;
