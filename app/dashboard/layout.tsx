import "../../globals.css";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container">
      
      <aside className="sidebar">
        <h2 className="sidebar-logo">MzaziGo</h2>
        <nav>
          <Link href="/dashboard/customer">Customer Dashboard</Link>
          <Link href="/dashboard/driver">Driver Dashboard</Link>
          <Link href="/">Home</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h3>Welcome to MzaziGo</h3>
        </header>

        <div className="dashboard-content">
          {children}
        </div>
      </main>

    </div>
  );
}
