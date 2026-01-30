"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Copy, Check, ExternalLink, Coffee } from "lucide-react";
import { SiGooglepay } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import QuickMenu from "@/components/QuickMenu";

export default function SupportPage() {
  const [mounted, setMounted] = useState(false);
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [fromSection, setFromSection] = useState<string | null>(null);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    // Get the section we came from
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    console.log("Support page - from parameter:", from);
    setFromSection(from);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!mounted) {
    return null;
  }

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";
  const cardClass =
    theme === "dark"
      ? "bg-white/5 border-white/20 hover:bg-white/10"
      : "bg-black/5 border-black/20 hover:bg-black/10";

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-blur-in">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => {
                console.log("Back button clicked, fromSection:", fromSection);
                if (fromSection) {
                  const targetUrl = `/#${fromSection}`;
                  console.log("Navigating to:", targetUrl);
                  window.location.href = targetUrl;
                } else {
                  console.log("No fromSection, navigating to base URL");
                  window.location.href = "/";
                }
              }}
              className={`inline-flex items-center justify-center p-1.5 md:p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${
                theme === "dark"
                  ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
                  : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
              }`}
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wider">
              SUPPORT
            </h1>
            <QuickMenu />
          </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* UPI Card */}
          <div
            className={`border rounded-2xl p-6 transition-all duration-300 ${cardClass} ${borderClass}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl ${
                  theme === "dark" ? "bg-white/10" : "bg-black/10"
                }`}
              >
                <SiGooglepay className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold">UPI Payment</h2>
            </div>

            <p className="text-sm opacity-70 mb-4">
              Send payment via any UPI app
            </p>

            <div
              className={`relative p-4 rounded-xl border h-[88px] flex flex-col justify-center ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              <p className="text-sm opacity-60 mb-1">UPI ID</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm md:text-base font-semibold break-all">
                  skakram00zz@oksbi
                </span>
                <button
                  onClick={() => copyToClipboard("skakram00zz@oksbi")}
                  className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                    theme === "dark" ? "hover:bg-white/10" : "hover:bg-black/10"
                  }`}
                  aria-label="Copy UPI ID"
                >
                  {copiedUPI ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <Copy className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs opacity-60">
                ✓ Instant transfer • No fees • India only
              </p>
            </div>
          </div>

          {/* Wise Card */}
          <div
            className={`border rounded-2xl p-6 transition-all duration-300 ${cardClass} ${borderClass}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl ${
                  theme === "dark" ? "bg-white/10" : "bg-black/10"
                }`}
              >
                <FaWallet className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold">International Payment</h2>
            </div>

            <p className="text-sm opacity-70 mb-4">
              Support from anywhere in the world using Wise
            </p>

            <Link
              href="https://wise.com/pay/business/skakram"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full p-4 rounded-xl border transition-all duration-300 h-[88px] flex flex-col justify-center ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
            >
              <p className="text-sm opacity-60 mb-1">Pay via Wise</p>
              <div className="flex items-center justify-between gap-2 text-sm md:text-base">
                <span className="font-semibold break-all">
                  wise.com/pay/business/skakram
                </span>
                <div className={`p-2 flex-shrink-0`}>
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </Link>

            <div className="mt-4 space-y-2">
              <p className="text-xs opacity-60">
                ✓ Global payments • Low fees • Multiple currencies
              </p>
            </div>
          </div>
        </div>

        {/* Buy Me a Coffee */}
        <div
          className={`mt-6 border rounded-2xl p-6 transition-all duration-300 ${cardClass} ${borderClass}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-3 rounded-xl ${
                theme === "dark" ? "bg-white/10" : "bg-black/10"
              }`}
            >
              <Coffee className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold">Buy Me a Coffee</h2>
          </div>

          <p className="text-sm opacity-70 mb-4">
            Support with a quick coffee donation
          </p>

          <Link
            href="https://buymeacoffee.com/akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full p-4 rounded-xl border transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-black/5 border-black/10 hover:bg-black/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-60 mb-1">Visit Coffee Page</p>
                <p className="font-semibold flex items-center gap-2">
                  buymeacoffee.com/akramcodez
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </div>
          </Link>

          <div className="mt-4">
            <p className="text-xs opacity-60">
              ✓ One-time or monthly • Multiple payment methods
            </p>
          </div>
        </div>

        {/* Thank You Message */}
        <div
          className={`mt-8 p-6 rounded-2xl border ${cardClass} ${borderClass} text-center`}
        >
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-sm md:text-base opacity-70 max-w-2xl mx-auto">
            Your support means the world to me and helps me dedicate more time
            to building open-source projects and creating valuable content for
            the community.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs opacity-60">
            © Sk Akram • All payments are voluntary
          </p>
        </div>
      </div>
    </div>
  );
}
