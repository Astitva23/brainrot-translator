# A simple Brainrot translator for all the older people on discord.


A fun translator bot that converts "brainrot" slang into understandable text. 
Built with **Python** (Discord bot) and coming soon as a **web app**.

---

##  Features
-  Translate brainrot slang → normal text
-  Discord bot ready to invite & use
-  Web version coming soon
-  Fully customizable slang dictionary

---

## 🔧 How It Works
The translator uses a `dictionary.json` file to map slang terms to their meanings.  
When you send a message, the bot replaces slang words with understandable text.

Example:

![translated](./wyz.jpg)


---

## 🛠️ Setup for Developers

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/brainrot-translator.git
cd brainrot-translator

```

## 2. Install dependencies

```bash
pip install -r requirements.txt
```
## 3. Add your discord bot

```bash
DISCORD_TOKEN=your_discord_bot_token_here
```
---

# How It Works

- The bot loads dictionary.json, which contains slang-to-English mappings.

- When a user sends a message starting with a command (like !translate), the bot translates the text using this dictionary.

---

# Tech Stack
- Python 3
- Discord.py (Discord bot API wrapper)
- Replit (for hosting)
- JSON (dictionary storage)

---

# Credits:

- made by astitva (jhingroov)
