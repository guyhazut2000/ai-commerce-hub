export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
