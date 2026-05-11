export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808] text-[#f0f0f0] overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-md bg-[#080808]/80">
        <div className="flex items-center gap-2">
          <GhostIcon className="w-7 h-7 text-green-400" />
          <span className="text-lg font-semibold tracking-tight">GhostChat</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#rooms" className="hover:text-white transition-colors">Rooms</a>
          <a
            href="https://github.com/sndwchmkr/ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[120px]" />
        </div>

        <div className="animate-float mb-8">
          <GhostIcon className="w-24 h-24 text-green-400 drop-shadow-[0_0_30px_rgba(134,239,172,0.4)]" />
        </div>

        <h1 className="animate-fade-up delay-1 text-6xl sm:text-7xl font-bold tracking-tight leading-none mb-4">
          Chat without<br />
          <span className="text-green-400">a trace.</span>
        </h1>

        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg text-white/50 leading-relaxed">
          No phone number. No email. No server storing your messages.
          Your device generates your identity. You own your keys, you own your history.
        </p>

        <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-center gap-3 mt-10">
          <button className="animate-glow px-7 py-3.5 rounded-full bg-green-400 text-black font-semibold text-sm hover:bg-green-300 transition-colors">
            Join the waitlist
          </button>
          <a
            href="https://github.com/sndwchmkr/ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full border border-white/10 text-sm font-medium hover:border-white/30 transition-colors"
          >
            View source
          </a>
        </div>

        <p className="animate-fade-up delay-4 mt-6 text-xs text-white/20 font-mono">
          Open source. GPL-3.0. Built for everyone, owned by no one.
        </p>
      </section>

      {/* Trust bar */}
      <div className="border-y border-white/5 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs text-white/30 font-mono uppercase tracking-widest">
          {["End-to-end encrypted", "Peer-to-peer", "No phone required", "Open source", "Zero data collection"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-green-400/60" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Built different.</h2>
          <p className="text-center text-white/40 mb-16 max-w-md mx-auto">
            Every design decision was made to protect you, not monetize you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-green-400/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">How it works.</h2>
          <p className="text-center text-white/40 mb-16">Simple for you. Impossible to surveil.</p>
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-6 pb-12 last:pb-0 relative">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center text-green-400 font-mono text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-green-400/20 to-transparent mt-3" />
                  )}
                </div>
                <div className="pt-1.5 pb-2">
                  <h3 className="font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Chat Rooms</span>
            <h2 className="text-3xl font-bold mt-3 mb-4">Discord for cypherpunks.</h2>
            <p className="text-white/40 leading-relaxed mb-6">
              Public and private rooms, no moderation by any company.
              The room creator holds the mod key. Share a QR code or a short link
              and anyone can join. No accounts. No servers. No logs.
            </p>
            <ul className="flex flex-col gap-3">
              {roomFeatures.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <RoomMockup />
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Your identity</span>
          <h2 className="text-3xl font-bold mt-3 mb-4">You are your key.</h2>
          <p className="text-white/40 leading-relaxed mb-12 max-w-xl mx-auto">
            Your device generates a keypair. Your public key is your address.
            Share it as a short string or a QR code. No usernames to register,
            no servers to trust.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/[0.02] font-mono text-sm">
            <GhostIcon className="w-5 h-5 text-green-400" />
            <span className="text-white/30">ghost:</span>
            <span className="text-green-400">8xK2mP9qTzR4nJwL</span>
            <button className="ml-2 text-white/20 hover:text-white/60 transition-colors text-xs border border-white/10 rounded px-2 py-0.5">
              copy
            </button>
          </div>
          <p className="mt-4 text-xs text-white/20">
            Lose your key, lose your history. Optional recovery via email or phone.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <GhostIcon className="w-14 h-14 text-green-400/60 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to disappear?</h2>
          <p className="text-white/40 mb-8">
            GhostChat is in active development. Get early access when we launch.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm placeholder:text-white/20 focus:outline-none focus:border-green-400/40 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-green-400 text-black font-semibold text-sm hover:bg-green-300 transition-colors shrink-0"
            >
              Notify me
            </button>
          </form>
          <p className="mt-4 text-xs text-white/20">
            We store nothing. This email is used once, then deleted.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <div className="flex items-center gap-2">
            <GhostIcon className="w-4 h-4 text-green-400/50" />
            <span>GhostChat - GPL-3.0</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/sndwchmkr/ghost" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">GitHub</a>
            <span>Open source. No trackers. No analytics.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GhostIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C7.03 2 3 6.03 3 11v9l3-3 3 3 3-3 3 3 3-3v-9c0-4.97-4.03-9-9-9zm-3.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function RoomMockup() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
      <div className="border-b border-white/5 px-4 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-sm font-mono text-white/60">#cypherpunks-general</span>
        <span className="ml-auto text-xs text-white/20">312 online</span>
      </div>
      <div className="p-4 flex flex-col gap-4 font-mono text-xs">
        {mockMessages.map((m, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-[10px] shrink-0">
              {m.avatar}
            </div>
            <div>
              <span className="text-green-400/70">{m.name}</span>
              <span className="text-white/20 ml-2">{m.time}</span>
              <p className="text-white/50 mt-0.5 leading-relaxed">{m.msg}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 px-4 py-3 flex items-center gap-2">
        <input
          className="flex-1 bg-transparent text-xs text-white/30 placeholder:text-white/15 focus:outline-none font-mono"
          placeholder="Message #cypherpunks-general"
          readOnly
        />
        <span className="text-xs text-white/10 font-mono">E2E</span>
      </div>
    </div>
  );
}

const mockMessages = [
  { avatar: "G1", name: "ghost:8xK2", time: "12:01", msg: "Anyone running a node on Waku?" },
  { avatar: "G2", name: "ghost:mP9q", time: "12:02", msg: "Yeah, been up for 3 weeks. Zero downtime." },
  { avatar: "G3", name: "ghost:Tz4n", time: "12:03", msg: "This is what signal should have been from day one" },
];

const features = [
  {
    icon: "🔑",
    title: "Device-generated identity",
    desc: "Your keypair is created on your device using WebCrypto. No server ever sees your private key.",
  },
  {
    icon: "👻",
    title: "No phone. No email.",
    desc: "Create an account with nothing but your device. Your public key is your address.",
  },
  {
    icon: "🔗",
    title: "Peer-to-peer routing",
    desc: "Messages route through a decentralized network. No company can read, store, or subpoena them.",
  },
  {
    icon: "🏠",
    title: "Public and private rooms",
    desc: "Join rooms via QR code or a short link. The room creator holds the mod key, not us.",
  },
  {
    icon: "🛡️",
    title: "Signal-grade encryption",
    desc: "End-to-end encrypted using the Signal Protocol. Every message, every room, every device.",
  },
  {
    icon: "♻️",
    title: "Optional recovery",
    desc: "Add an email or phone as an encrypted key backup. Lose it and start fresh. Your choice.",
  },
];

const steps = [
  {
    title: "Open the app. Get a key.",
    desc: "Your device generates a keypair the first time you open GhostChat. No sign-up flow. No captcha. Your private key never leaves your device.",
  },
  {
    title: "Share your address.",
    desc: "Your public key becomes a short shareable string like ghost:8xK2mP9q. Send it over any channel - SMS, email, Instagram DM, QR code - however you like.",
  },
  {
    title: "Start a chat or join a room.",
    desc: "Paste someone's address to start a conversation. Scan a QR code or tap a link to join a room. All communication is end-to-end encrypted from the first message.",
  },
  {
    title: "Your history, your rules.",
    desc: "Messages are stored locally, encrypted with your key. Lose your key and you lose your history. Back it up optionally with an email or phone. No one else holds it.",
  },
];

const roomFeatures = [
  "Public rooms discoverable via QR or short link",
  "Private invite-only rooms with group keypair",
  "Room creator holds the mod key - not GhostChat",
  "No company moderation or content scanning",
  "Encrypted room history stored only on member devices",
  "Works across all platforms - desktop and mobile",
];
