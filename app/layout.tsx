import './globals.css'
import { Providers } from "@/lib/providers";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

export default function RootLayout(  props: React.PropsWithChildren ) {
    return (
      <Providers>
        <html lang="en">
          <body className='bg-light-gray2'>
            <Header />
            <Sidebar />
            <main className='w-full'>
                {props.children}
            </main>
          </body>
        </html>
      </Providers>
    )
}
