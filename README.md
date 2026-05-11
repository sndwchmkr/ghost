# GhostChat

> Chat without a trace.

Fully anonymous, peer-to-peer encrypted messaging. No phone number. No email. No server storing your messages. Your device generates your identity. You own your keys, you own your history.

## What it is

- Device-generated keypair identity - no registration required
- Peer-to-peer message routing via a decentralized network
- Signal Protocol end-to-end encryption
- Public and private chat rooms (Discord for cypherpunks)
- Optional email/phone key recovery
- Lose your key, lose your history - by design

## Platforms

Mac, Windows, Linux, iOS, Android - built with Tauri v2 (Rust + React/TypeScript)

## Project structure

```
ghost/
  landing/    Next.js landing page (deploys to Vercel)
  app/        Tauri v2 desktop + mobile app (coming soon)
  core/       Rust crypto and P2P networking layer (coming soon)
```

## Landing page

```bash
cd landing
npm install
npm run dev
```

## License

GPL-3.0 - open source, owned by no one.
