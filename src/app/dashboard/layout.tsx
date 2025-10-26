import Navbar from "@/components/dashboard/Navbar"

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <main>
            {children}
        </main>
    </div>
  )
}
export default DashboardLayout