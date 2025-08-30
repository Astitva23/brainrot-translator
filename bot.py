import discord
import json
import os
import random
# random thing to commit idk ignore this
# Load dictionary
dict_path = os.path.join(os.path.dirname(__file__), "dictionary.json")
with open(dict_path, "r", encoding="utf-8") as f:
    BRAINROT_DICT = json.load(f)

# Replace slang with human words
def translate_text(text: str) -> str:
    words = text.split()
    translated = []
    for word in words:
        cleaned = word.lower().strip("!?.,")
        if cleaned in BRAINROT_DICT:
            translated.append(BRAINROT_DICT[cleaned])
        else:
            translated.append(word)
    return " ".join(translated)

# Bot client
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f"✅ Logged in as {client.user}")

@client.event
async def on_message(message):
    if message.author.bot:
        return

    # Only respond if bot is mentioned + keyword "translate"
    if client.user in message.mentions and "translate" in message.content.lower():
        if message.reference:  # check if it's a reply
            replied_msg = await message.channel.fetch_message(message.reference.message_id)
            result = translate_text(replied_msg.content)
            await message.reply(f" yea boomer:\n{result}")
        else:
            await message.reply("Please reply to a message you want translated.")

# Run bot
client.run(os.getenv("DISCORD_TOKEN"))
