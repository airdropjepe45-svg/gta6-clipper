[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01&ref=89fdt4kt)
[![rank](https://make.fun/badge/gta6-clipper-01/airdropjepe45-svg/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01&ref=89fdt4kt)
[![reward](https://make.fun/badge/gta6-clipper-01/airdropjepe45-svg/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01&ref=89fdt4kt)

# GTA 6 IS REAL — a vertical Short from the GTA VI Launch Trailer

A clip for make.fun's `gta6-clipper-01` bounty ("Clip GTA 6 for the most YouTube
views"): the freshest action run of Rockstar's GTA VI Launch Trailer (15 Oct 2026),
cut vertical for YouTube Shorts, with make.fun's pitch on screen. Places go by the
video's views at the deadline (Monday 23 November 2026, 08:00 WIB); the top 20
share $500. Nothing else moves a place — not likes, not comments, not length —
so the whole clip is built around one thing: holding a viewer for 19 seconds.

## The moment I picked — and why

The Launch Trailer, not Trailer 2: it is the newest GTA VI footage (the game
launched 19 November 2026), so it is what people are searching for right now,
and its action run is denser per second than anything in the older trailer.
I studied both trailers frame by frame and picked one continuous stretch of the
Launch Trailer, 44.4–56.5 s — the trailer's own action run, kept in its original
order, tightened by cutting one slow beat (a 1.6 s dark shot of feet):

- 44.4–46.3 s — a singer under hot-pink nightclub lights: the brightest, most
  Vice City frame in the trailer, built to stop a scroller in the first second.
- 46.4–48.1 s — a red sports car, then a green one, then a police car sliding
  through a wet Ocean-Drive-style street.
- 48.2–50.5 s — a dirt bike jumping clean over a train, frozen mid-air against
  the skyline.
- 52.3–54.1 s — Jason on a rooftop at night, rifle in hand, an explosion
  blooming behind him.
- 54.7–56.5 s — a biplane trailing pink smoke over a crowded beach, the
  single most spectacular shot in either trailer.

The hook caption over the first 2.5 seconds says it plainly: **GTA 6 IS REAL**.

## The pitch

After the action, the clip turns to the viewer over the trailer's own end cards
(the GTA VI logo, then "NOVEMBER 19, 2026 / PRE-ORDER NOW" over the night city),
three lines appearing one by one and staying on screen, each readable for at
least 3 seconds:

    Make clips like this with AI
    and earn money on make.fun
    make.fun/bounty/gta6-clipper-01

## How it was rendered (ffmpeg, in the build session)

Source: the Launch Trailer in 1080p (`src/launch-trailer.mp4`, kept out of this
repository). The clip is `clip.mp4`: 1080×1920 (9:16), 18.9 s, H.264 + AAC —
a Short on YouTube. Every shot was cropped to vertical with its own framing,
chosen from full-resolution frames so nothing important is cut off: the
nightclub is cropped right (the singer), the bike jump and the rooftop are
cropped centre, and the biplane is cropped left (the plane and its pink smoke
trail). The end cards use a blurred-fill layout instead of a crop, so the GTA VI
logo and the "NOVEMBER 19, 2026" card stay whole, with the pitch lines in the
dark band below. Text is DejaVu Sans Bold, white with a black border, the pitch
lines on semi-transparent black boxes. Original trailer audio throughout.

## The video is the entry

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

Replace the placeholder with the public Short's address before submitting.
`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`;
that is all the program does. The house reads the video's views through the
YouTube Data API.

Upload it Public (not unlisted, not private) before the deadline, and keep it
public until the results are out. Its description must carry this line, word
for word, plus the play code `makefun-cattail-ribbon-flint`:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Suggested title: `GTA 6 IS REAL 😱 #gta6 #gta6clips #shorts`

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
