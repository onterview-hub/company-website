import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm space-y-2">
      <div className="flex justify-center gap-4">
        <Link href="/privacy" className="hover:text-amber-400 transition">
          개인정보처리방침
        </Link>
      </div>
      <p>© {new Date().getFullYear()} SKETCH ON. All rights reserved.</p>
      <Link
        href="/admin"
        className="inline-block text-white/20 hover:text-white/50 transition text-xs"
      >
        admin
      </Link>
    </footer>
  );
}