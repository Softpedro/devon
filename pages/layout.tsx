import Header from "@/components/Header/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ backgroundColor: '#272727' }}>
      <Header />
      <div>{children}</div>
    </div>
  )
}
