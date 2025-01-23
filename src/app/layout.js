import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/auth/AuthProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "NextJS Practice",
	description: "For Job Placement",
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
      <html lang="en">
        <body className="bg-base-100">
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
	);
}
