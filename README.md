# 👑 King of the Table (KOTT)

**King of the Table** is a web-based rotating scoreboard system built for fast-paced 3-player air hockey matches. Two players are always in play, one is on deck, and the rest wait their turn in a live rotation. The goal? Be the King of the Table... unless you get hit with the dreaded **Blue Shell**.

---

## 🎮 How It Works

- Enter at least **3 player names** to start the game
- The first three are assigned:
  - 🔴 Left Player (Active)
  - 🟡 Right Player (Active)
  - 🟢 Waiting Player (On Deck)
- The rest are added to the **rotation queue**

### Scoring
- Click a player's circle to award a point
- If a player gets scored on while they have **6 points**, they get **Blue Shelled** (score reset to 0!)
- The **scorer** stays in
- The **loser** rotates out
- The **waiting player** rotates in
- The **loser** goes to the back of the queue

---

## 🧠 Features

- ⏱ Live game timer
- 🔁 Smart player rotation
- 💥 Blue Shell mechanic at 6 points
- 📋 Match log with all scoring events
- ✅ Undo last action
- 🕹 Add or remove players mid-game
- 📜 Live queue display
- 📤 Share final results with friends

---

## 📦 Getting Started

To run KOTT locally:

1. Clone this repo or copy all files into a local folder
2. Open `index.html` in any modern browser
3. Profit

To host it online:

- Upload the files to GitHub Pages, Netlify, or any static hosting provider

---

## 🖼 Logo

The KOTT logo features a golden crown atop a red table on a black background — a minimalist arcade throne for our air hockey kings.

---

## 💡 Built With

- HTML + CSS (responsive and mobile-friendly)
- JavaScript (vanilla, no frameworks)
- Service Worker + PWA support

---

## 🚧 Roadmap Ideas

- 🔊 Add sound effects for scoring and blue shell
- 🏆 Leaderboard persistence
- 🎨 Theme selector (Classic, Retro, Neon)
- 📱 QR Code share
- ✏️ Edit player names

---

## 👑 Credits

Created by [Pete Lippincott](https://github.com/petesimple) and ChatGPT.  
Inspired by 3CS and the thrill of air hockey rotation chaos.

---

**Long live the King... unless he has 6.**
