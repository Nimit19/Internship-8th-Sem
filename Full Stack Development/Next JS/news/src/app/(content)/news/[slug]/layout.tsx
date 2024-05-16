export default function NewsDetailsPageLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
