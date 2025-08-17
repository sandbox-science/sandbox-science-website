---
title: capski
---

<p align="center">
  <img src="../public/capski.png" alt="Capski Logo">
</p>

# Capski CLI

A fast, command-line Rust video subtitle pipeline that:

- Extracts audio from a video using `ffmpeg`
- Transcribes speech into text with precise timestamps using `whisper_rs`
- Generates styled karaoke-style ASS subtitles (with word-level highlighting)
- Burns subtitles into videos or overlays on new video, image, or solid color backgrounds with `ffmpeg`

## Tech Stack
- Rust
- FFmpeg

## Engineering Requirements Document
The Engineering Requirements Document (**ERD**) is available here :

-> [ERD on Google Docs](https://docs.google.com/document/d/1xfLcfE5BA1i_wjUSHHJYuA4zneVqrm4rEg2bf_YeltQ/edit?usp=sharing)
