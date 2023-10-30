import './globals.css'
import { Providers } from "@/lib/providers";

export default function RootLayout(  props: React.PropsWithChildren ) {
  return (
      <Providers>
        <html lang="en">
          <body className="">
            {props.children}
          </body>
        </html>
      </Providers>
  )
}
