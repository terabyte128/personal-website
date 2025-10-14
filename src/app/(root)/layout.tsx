import { Navigation } from "./_navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      <div className="main-body mx-auto mt-20 mb-12 max-w-4xl px-4 md:px-0">
        {children}
      </div>
    </div>
  );
}
