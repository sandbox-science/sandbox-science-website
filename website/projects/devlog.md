---
title: DevLog
---

```
░████░███████                      ░██                          ░████ 
░██  ░██   ░██                     ░██                            ░██ 
░██  ░██    ░██ ░███████ ░██    ░██░██        ░███████  ░████████ ░██ 
░██  ░██    ░██░██    ░██░██    ░██░██       ░██    ░██░██    ░██ ░██ 
░██  ░██    ░██░█████████ ░██  ░██ ░██       ░██    ░██░██    ░██ ░██ 
░██  ░██   ░██ ░██         ░██░██  ░██       ░██    ░██░██   ░███ ░██ 
░██  ░███████   ░███████    ░███   ░██████████░███████  ░█████░██ ░██ 
░██                                                           ░██ ░██ 
░████                                                   ░███████░████ 
                                                                      
```                                                                                       
**DevLog** is a lightweight CLI tool that records your local development workflow. It captures notes, shell activity, and Git actions to produce a structured, timestamped report, perfect for debugging, documentation, or reflection. The logs are recorded in text format via a JSON file. The tool can generate a Markdown and HTML report for developers to directly visualize their workflow offline directly from their browser.

<Badge type="tip" text="Note" />
>
> More about the idea on this [article](https://listed.to/@Astra/63832/devlog-cli-developer-tool). 

---

## Features

- 📋 Start and stop sessions via DevLog shell
- 📝 Add timestamped notes during a session
- 🎟️ Add timestamped git activity during a session
- 📂 Export sessions as Markdown and HTML logs
- 📁 Organized logs stored in `~/.devlog/sessions/`

