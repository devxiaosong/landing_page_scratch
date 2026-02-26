// Nested layout for German (/de) pages.
// Note: To set lang="de" on <html>, a route-group restructure is required.
// Current root layout uses lang="en" as fallback.
export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
