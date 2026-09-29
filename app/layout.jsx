import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif" });

const title = "Warm × HeyReach · Send website visitors to HeyReach";
const description =
  "Warm finds the people browsing your site. Now send them to a HeyReach list in one click, ready for LinkedIn outreach. Included free with Warm.";

export const metadata = {
  metadataBase: new URL("https://heyreach.getwarmai.com"),
  title,
  description,
  openGraph: { title, description, url: "https://heyreach.getwarmai.com", siteName: "Warm AI", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0C" },
  ],
};

// Sets the colour theme before the page paints, so there is no light/dark flash.
const themeScript = `(function(){try{var s=localStorage.getItem('warm-theme');}catch(e){}var t=s||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
