import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Icon from "@/components/Icon";

export const viewport: Viewport = {
  themeColor: "#171717",
  colorScheme: "dark",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export const metadata: Metadata = {
  title: "The Silly Empire",
  description: "",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-square70x70logo": "/mstile-icon-128.png",
    "msapplication-square150x150logo": "/mstile-icon-270.png",
    "msapplication-square310x310logo": "/mstile-icon-558.png",
    "msapplication-wide310x150logo": "/mstile-icon-558-270.png",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "196x196",
      url: "/favicon-196.png",
    },
    { rel: "apple-touch-icon", url: "/apple-icon-180.png" },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2048-2732.jpg",
      media:
        "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2732-2048.jpg",
      media:
        "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1668-2388.jpg",
      media:
        "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2388-1668.jpg",
      media:
        "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1536-2048.jpg",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2048-1536.jpg",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1488-2266.jpg",
      media:
        "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2266-1488.jpg",
      media:
        "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1640-2360.jpg",
      media:
        "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2360-1640.jpg",
      media:
        "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1668-2224.jpg",
      media:
        "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2224-1668.jpg",
      media:
        "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1620-2160.jpg",
      media:
        "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2160-1620.jpg",
      media:
        "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1320-2868.jpg",
      media:
        "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2868-1320.jpg",
      media:
        "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1206-2622.jpg",
      media:
        "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2622-1206.jpg",
      media:
        "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1290-2796.jpg",
      media:
        "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2796-1290.jpg",
      media:
        "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1179-2556.jpg",
      media:
        "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2556-1179.jpg",
      media:
        "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1284-2778.jpg",
      media:
        "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2778-1284.jpg",
      media:
        "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1170-2532.jpg",
      media:
        "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2532-1170.jpg",
      media:
        "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1125-2436.jpg",
      media:
        "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2436-1125.jpg",
      media:
        "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1242-2688.jpg",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2688-1242.jpg",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-828-1792.jpg",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1792-828.jpg",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1242-2208.jpg",
      media:
        "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-2208-1242.jpg",
      media:
        "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-750-1334.jpg",
      media:
        "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1334-750.jpg",
      media:
        "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-640-1136.jpg",
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/apple-splash-1136-640.jpg",
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white antialiased container mx-auto min-h-screen">
        <div className="z-10 min-h-[calc(env(safe-area-inset-top)+env(safe-area-inset-bottom))] pt-[env(safe-area-inset-top)] pl-[calc(var(--spacing)+env(safe-area-inset-left))] pr-[calc(var(--spacing)+env(safe-area-inset-right))] sticky top-0 bg-gradient-to-b backdrop-blur from-neutral-900 flex">
          <Link href={"/"} className="w-full hover:opacity-50">
            <span>
              <Image
                src="/logo.svg"
                width={48}
                height={48}
                alt="logo"
                className="inline w-[var(--text-base)] h-[--text-base--line-height]"
              />{" "}
              <span>The Silly Empire </span>
              <span className="text-xs opacity-60">barebone™</span>
            </span>
          </Link>

          <Link href={"/credits"} className="hover:opacity-50">
            <Icon name="circle-info" />
          </Link>
        </div>

        <div className="p-1">{children}</div>
      </body>
    </html>
  );
}
