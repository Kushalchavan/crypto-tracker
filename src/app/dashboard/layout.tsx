import Navbar from "@/components/dashboard/Navbar";
import Footer from "@/components/home/Footer";
import { SearchProvider } from "@/context/SearchContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SearchProvider>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SearchProvider>
  );
};
export default DashboardLayout;
