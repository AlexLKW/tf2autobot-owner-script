# tf2autobot-owner-script
A script for owners of [tf2autobots](https://github.com/TF2Autobot/tf2autobot) that is using [Jack's bptf-autopricer](https://github.com/jack-richards/bptf-autopricer) or other custom pricer that support item input to pricelist via API.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Open the [script in raw view](https://github.com/AlexLKW/tf2autobot-owner-script/raw/main/Custom%20Pricer%20Backpack.tf%20Integration.user.js).
3. Install.
4. Edit the priceIP to your pricer IP.

## Current features

### Shortcut to add or remove the item from the pricelist
Buttons will be next to the item stats page to add or remove the item in the pricelist.
![Add Or Remove Item](https://github.com/user-attachments/assets/c89b817e-c10a-4299-99d7-a0faa690605c)

### Copy to clipboard
Clicking the buttons will copy its relative command to the clipboard. User input is still **needed** to paste the command to the bot.
#### Add to pricelist  
Command: "!add item="+itemName+"&autoprice=false&group=pending&sell.keys=99999&buy.metal=0.11"  
  
Description: Add the item but temporary set to manual pricing with the group=pending, item can be set to autoprice once the pricer retreive a price for the newly added item  

#### Delete from pricelist  
Command: "!remove item="+itemName  
  
Description: Remove the item banking listing for the bot  
