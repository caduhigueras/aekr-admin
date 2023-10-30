import './globals.css'
import { Providers } from "@/lib/providers";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function RootLayout(  props: React.PropsWithChildren ) {
  return (
      <Providers>
        <html lang="en" className="h-full w-full overflow-hidden">
          <body className="h-full w-full overflow-hidden flex flex-row">
            <Header />
            <Sidebar />
            <main>
                {props.children}
            </main>
          </body>
        </html>
      </Providers>
  )
}
