const RPC = require("discord-rpc");
const { DiscordAPIError, Channel } = require("discord.js");
const rpc = new RPC.Client({
    transport: "ipc"
});

//Discord app üzerinde çalışır!

rpc.on("ready", () => {
    rpc.setActivity({
        details: "This is Discord!",
        state: "WoooW Interesting!",
        startTimestamp: new Date(),
        largeImageKey: "dc_icon",
        largeImageText: "Discord!",
//        smallImageKey: "discord_red",
        smallImageText: "Discord!"
    });

    console.log("Başlatılıyor...");
    console.log("Başlatıldı!");
    console.log("Made by Developer/Software Impovrer(Tyede)!");
});

rpc.login({
    clientId: "Your ID Application ID"
});
