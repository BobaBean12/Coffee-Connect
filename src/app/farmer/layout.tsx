export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <h1>Coffee Connect - Farmer Dashboard</h1>
      </nav>
      <main>{children}</main>
    </div>
  );
}
