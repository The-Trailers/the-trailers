import './globals.css'
import type { Metadata } from 'next'
import { Fjalla_One } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from '@/components/navbar.component'

config.autoAddCss = false

const fjalla = Fjalla_One({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: 'The Trailers',
  description: 'The Trailers is a captivating web application that offers a vast collection of movie trailers, keeping users up-to-date with the latest film releases and enticing them with sneak peeks into upcoming cinematic adventures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fjalla.className}>
        <main className="min-h-screen bg-surface overflow-x-hidden">
          <div className="absolute w-full">
            <div className="container">
              <NavBar className="z-10" />
            </div>
          </div>

          {children}
        </main>
      </body>
    </html>
  )
}
