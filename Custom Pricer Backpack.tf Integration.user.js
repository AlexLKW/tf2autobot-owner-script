// ==UserScript==
// @name         Custom Pricer Backpack.tf Integration
// @namespace    https://github.com/AlexLKW
// @version      1.0
// @description  Easily add and remove item for the pricelist
// @author       Alex
// @match        https://backpack.tf/stats/*
// @icon         data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔑</text></svg>
// ==/UserScript==

(function() {
    'use strict';

    // Input your autopricer IP here
    const priceIP = "" || "localhost:5432"; // example: 123.456.1.1:1234

    // __________________________________________________________________
    const itemName = $('.stats-header-title').text().trim();

    const addContent = `
        <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
        <form action="http://${priceIP}/items/add/${itemName}" method="post" target="dummyframe">
            <button name="btn-addPrice" class="price-box" onclick="copyAdd()">
                <img src="/images/440/particles/14_94x94.png" style="float:left;margin-right:0.5em">
                <div class='text'>
                    <div class="value">Add</div>
                    <div class="subtitle">to pricelist</div>
                </div>
            </button>
        </form>
        <form action="http://${priceIP}/items/delete/${itemName}" method="post" target="dummyframe">
            <button name="btn-deletePrice" class="price-box" onclick="copyDel()">
                <img src="/images/440/particles/13_94x94.png" style="float:left;margin-right:0.5em">
                <div class='text'>
                    <div class="value">Delete<div>
                    <div class="subtitle">from pricelist</div>
                </div>
            </button>
        </form>

        <script>
            function copyAdd() {
                // Copy the command for adding the item on tf2autobot
                // Please be informed that the autoprice is set to false by default since the pricer may not able to get the price immediately

                const itemName = $('.stats-header-title').text().trim();
                const addText = "!add item="+itemName+"&autoprice=false&group=pending&sell.keys=99999&buy.metal=0.11";
                navigator.clipboard.writeText(addText);
            };
            function copyDel() {
                // Copy the command for remove the item on tf2autobot

                const itemName = $('.stats-header-title').text().trim();
                const addText = "!remove item="+itemName;
                navigator.clipboard.writeText(addText);
            };
        </script>
    `;

    $('.price-boxes').append(addContent);

})();