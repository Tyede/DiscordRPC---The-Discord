const RPC = require("discord-rpc");
const { DiscordAPIError, Channel } = require("discord.js");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "mc.hypixel.net",
        state: "Hacking",
        startTimestamp: new Date(),
        largeImageKey: "vape_logo",
        largeImageText: "Vape Is Best!",
        smallImageKey: "k_c_k_buton_vape",
        smallImageText: "Hacking on mc.hypixel.net"
    });

    console.log("RPC Başlatılıyor...");
    console.log("RPC Başarıyla Başlatıldı!");
    console.log("RPC'niz Kullanıma Hazır");
    console.log("Discord Rich Presence By Tyede#1513");
    console.log("Başlatıldı!");
});

rpc.login({
    clientId: "802522696763703307"
});