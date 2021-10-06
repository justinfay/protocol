async function main() {
  const pools = [
    {
      name: "PngAvaxPng",
      lpAddress: "0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367",
      strategyAddress: "0x08d8C7C1a6E8543a4674E77cc0111EAa1D520f8b",
      snowglobeAddress: "0x621207093D2e65Bf3aC55dD8Bf0351B980A63815",
    },
    {
      name: "PngSnobPng",
      lpAddress: "0x97b4957df08e185502a0ac624f332c7f8967ee8d",
      strategyAddress: "0x4Bcfb10465a8D22F0A047Df3AfA8eE06CBCc8E13",
      snowglobeAddress: "0xB4db531076494432eaAA4C6fCD59fcc876af2734",
    },
    {
      name: "PngAvaxSnob",
      lpAddress: "0xa1c2c3b6b120cbd4cec7d2371ffd4a931a134a32",
      strategyAddress: "0xEbEE8807a671a858dbb2A1894BA8336a73A5b6b3",
      snowglobeAddress: "0xF4072358C1E3d7841BD7AfDE31F61E17E8d99BE7",
    },
    {
      name: "PngAvaxVso",
      lpAddress: "0x2b532bc0afae65da57eccfb14ff46d16a12de5e6",
      strategyAddress: "0x92F979215c9aAE3584b268Ad99FAc2ceD16F28fC",
      snowglobeAddress: "0x888Ab4CB2279bDB1A81c49451581d7c243AffbEf",
    },
    {
      name: "PngVsoPng",
      lpAddress: "0x9d472e21f6589380b21c42674b3585c47b74c891",
      strategyAddress: "0x747F114EfFD243f80E4fFF6D846F9b7Ef5e794e3",
      snowglobeAddress: "0x8309C64390F376fD778BDd701d54d1F8DFfe1F39",
    },
    {
      name: "PngAvaxSpore",
      lpAddress: "0x0a63179a8838b5729e79d239940d7e29e40a0116",
      strategyAddress: "0xeC96cbe0D178cB18eCf0D7bf6c2B599DAd28dA47",
      snowglobeAddress: "0x27f8FE86a513bAAF18B59D3dD15218Cc629640Fc",
    },
    {
      name: "PngSporePng",
      lpAddress: "0xad24a72ffe0466399e6f69b9332022a71408f10b",
      strategyAddress: "0x9004b64e5d793B70394a96f57b0dA869faD328c0",
      snowglobeAddress: "0xa39785a4E4CdDa7509751ed152a00f3D37FbFa9F",
    },
    {
      name: "PngAvaxBnb",
      lpAddress: "0xF776Ef63c2E7A81d03e2c67673fd5dcf53231A3f",
      strategyAddress: "0xA997C0A5d9D522892780390eFfAa44d2bB3d909F",
      snowglobeAddress: "0x39BF214A93EC72e42bC0B9b8C07BE1af6Fe169dA",
    },
    {
      name: "PngXavaPng",
      lpAddress: "0x851D47BE09BD0D3c2B24922e34a4f8AE05456924",
      strategyAddress: "0x689d22E2d749Bcd0E5812193Ee1187DE8C21456c",
      snowglobeAddress: "0xF23c55a05C9f24177FFF5934e8192461AeE4f304",
    },
    {
      name: "PngAvaxXava",
      lpAddress: "0x42152bDD72dE8d6767FE3B4E17a221D6985E8B25",
      strategyAddress: "0x0a6DBFB865244aF080D2Da1A39B78Ee5CA673762",
      snowglobeAddress: "0x6AB8DAC517c244f53D86a155a14064E86c2dE653",
    },
    {
      name: "PngAvaxPefi",
      lpAddress: "0x494Dd9f783dAF777D3fb4303da4de795953592d0",
      strategyAddress: "0x82b5B50Aa44cb42e1A350B10AB9A326357eE1AE9",
      snowglobeAddress: "0x5fb4d08bCBD444fDD5a0545fdB0C86783D186382",
    },
    {
      name: "PngPefiPng",
      lpAddress: "0x1bb5541EcCdA68A352649954D4C8eCe6aD68338d",
      strategyAddress: "0x6E1e3Da63B35021A69Ff8d87b239FAc6dD594B3a",
      snowglobeAddress: "0xf5b4Ba166b8b351C0dF92BdD6bf7d46d537185fB",
    },
    {
      name: "PngAvaxSherpa",
      lpAddress: "0xD27688e195B5495a0eA29Bb6e9248E535A58511e",
      strategyAddress: "0x0FfFA4ca317dF728439a51e3101a894dC5080802",
      snowglobeAddress: "0x5B8eE2c0a4f249e16f26d31636F1ed79df5405f9",
    },
    {
      name: "PngAvaxTryb",
      lpAddress: "0x6b41673fEff1bf0b55Ba2C9F4bf213b2bE8F474D",
      strategyAddress: "0x5c4908065abD41C7B16c2E43E13AF06c7a657d41",
      snowglobeAddress: "0xEb1010B9CF8484fcA2650525d477DD002fa889cE",
    },
    {
      name: "PngAvaxUsdtE",
      lpAddress: "0xe28984e1EE8D431346D32BeC9Ec800Efb643eef4",
      strategyAddress: "0xb2DC2aaBB618cf733e5e1389F83fF80ae40A89D0",
      snowglobeAddress: "0x7CC8068AB5FC2D8c843C4b1A6572a1d1E742D7c8",
    },
    {
      name: "PngAvaxDaiE",
      lpAddress: "0xbA09679Ab223C6bdaf44D45Ba2d7279959289AB0",
      strategyAddress: "0xAC73306De97abD0A8e5243E7902a9A860cdf8343",
      snowglobeAddress: "0x56A6e103D860FBb991eF1Afd24250562a292b2a5",
    },
    {
      name: "PngAvaxSushiE",
      lpAddress: "0xF62381AFFdfd27Dba91A1Ea2aCf57d426E28c341",
      strategyAddress: "0xCE2DA0c09b28dB317B2177464a2E6E56444884fb",
      snowglobeAddress: "0x5cce813cd2bBbA5aEe6fddfFAde1D3976150b860",
    },
    {
      name: "PngAvaxLinkE",
      lpAddress: "0x5875c368Cddd5FB9Bf2f410666ca5aad236DAbD4",
      strategyAddress: "0xcEea9292E3C5A2036f1b48A7AB7Cd53b3E5a8646",
      snowglobeAddress: "0x08D5Cfaf58a10D306937aAa8B0d2eb40466f7461",
    },

    {
      name: "PngAvaxWbtcE",
      lpAddress: "0x5764b8D8039C6E32f1e5d8DE8Da05DdF974EF5D3",
      strategyAddress: "0x7a6cbD5488723EF8B801cCa50404ce499417c309",
      snowglobeAddress: "0x04A3B139fcD004b2A4f957135a3f387124982133",
    },
    {
      name: "PngAvaxEthE",
      lpAddress: "0x7c05d54fc5CB6e4Ad87c6f5db3b807C94bB89c52",
      strategyAddress: "0x5132CEaBdE3c997c3eDDb92361c26861f0B336Ae",
      snowglobeAddress: "0xfEC005280ec0870A5dB1924588aE532743CEb90F",
    },
    {
      name: "PngAvaxYfiE",
      lpAddress: "0x9a634CE657681200B8c5fb3Fa1aC59Eb0662f45C",
      strategyAddress: "0x4E79f10AC7534Cf3B23AAFBf01dD5e7fb69d07f6",
      snowglobeAddress: "0x2ad520b64e6058654FE6E67bc790221772b63ecE",
    },
    {
      name: "PngAvaxUniE",
      lpAddress: "0x99dD520748eB0355c69DAE2692E4615C8Ab031ce",
      strategyAddress: "0x8E537Db83F802fd29e45f6Ff926c4B792123ceAA",
      snowglobeAddress: "0xf2596c84aCf1c7350dCF6941604DEd359dD506DB",
    },
    {
      name: "PngAvaxAaveE",
      lpAddress: "0x5944f135e4F1E3fA2E5550d4B5170783868cc4fE",
      strategyAddress: "0xa9E1CDb332f28469C1d9BeCCd740bD7A3DD46F94",
      snowglobeAddress: "0x7F8E7a8Bd63A113B202AE905877918Fb9cA13091",
    },
    {
      name: "PngUsdtEPng",
      lpAddress: "0x1fFB6ffC629f5D820DCf578409c2d26A2998a140",
      strategyAddress: "0x6Fdd5D2D2C2eA4f41d32F94750eff0c2341E7a4b",
      snowglobeAddress: "0xb3DbF3ff266a604A66dbc1783257377239792828",
    },
    {
      name: "PngDaiEPng",
      lpAddress: "0x603efefc3ed65e3F5b6730c603B0cfB4426E0f4f",
      strategyAddress: "0x037e116A780D58Be59B5C673ABd4A6f415F5c3ab",
      snowglobeAddress: "0x45981aB8cE749466c1d2022F50e24AbBEE71d15A",
    },
    {
      name: "PngLinkEPng",
      lpAddress: "0x340d732f44E2Fb8D08719883f1C2ae088EB11682",
      strategyAddress: "0x7eE5A96fDa9883837F17f2B866B74C7C2322B96C",
      snowglobeAddress: "0x92f75Da67c5E647D86A56a5a3D6C9a25e887504A",
    },
    {
      name: "PngWbtcEPng",
      lpAddress: "0xf277e270bc7664E6EBba19620530b83883748a13",
      strategyAddress: "0xfEda214455c227ca148BEc384aEBB156FdcD77C0",
      snowglobeAddress: "0x857f9A61C97d175EaE9E0A8bb74CF701d45a18dc",
    },
    {
      name: "PngEthEPng",
      lpAddress: "0xcf35400A595EFCF0Af591D3Aeb5a35cBCD120d54",
      strategyAddress: "0x22dBe776844052578eF2B400ff72d3E2FEf31AAe",
      snowglobeAddress: "0xEC7dA05C3FA5612f708378025fe1C0e1904aFbb5",
    },
    {
      name: "PngAvaxYak",
      lpAddress: "0xd2F01cd87A43962fD93C21e07c1a420714Cc94C9",
      strategyAddress: "0xF87dC60a4026b11F393b3b4bf886b042d52e970C",
      snowglobeAddress: "0x1BF90bdeb965a76Af56024EF3e70439DEa89bF3f",
    },
    {
      name: "PngYakPng",
      lpAddress: "0x42c45fE57927AB94f5BA5484483B67184aA82e5d",
      strategyAddress: "0x605431B1843951830b82BA84AD1bE847f6E84fA3",
      snowglobeAddress: "0xA829397Af2AdD7C6564a74DC072b3D9095581d70",
    },
    {
      name: "PngAvaxQi",
      lpAddress: "0xE530dC2095Ef5653205CF5ea79F8979a7028065c",
      strategyAddress: "0xA3FDD3AB82cdCe96AA5eB74c38f15ae478f6CCCc",
      snowglobeAddress: "0xeEc21abC6daD38A8515a7C3388E5ef962Cd960e6",
    },
    {
      name: "PngQiPng",
      lpAddress: "0x50E7e19281a80E3C24a07016eDB87EbA9fe8C6cA",
      strategyAddress: "0x6EA4BdA10F42eF289539230FFEd24fcB844f79a3",
      snowglobeAddress: "0x9EC50ee696bB1c6f8f4e2181f61ad687700005cF",
    },
    {
      name: "PngAvaxDyp",
      lpAddress: "0x497070e8b6C55fD283D8B259a6971261E2021C01",
      strategyAddress: "0x2754376740F51516594B691f8e545f718f6200BB",
      snowglobeAddress: "0xf4a591BeaC3A4D864C3293477bBD3f86880ADa16",
    },
    {
      name: "PngAvaxWalbt",
      lpAddress: "0x4555328746f1b6a9b03dE964C90eCd99d75bFFbc",
      strategyAddress: "0x7541373605f5446C8B6F5b91515d3F0e3709941C",
      snowglobeAddress: "0x322094FDB02677E7a993E735826c9E183fc605a6",
    },
    {
      name: "PngAvaxUsdcE",
      lpAddress: "0xbd918Ed441767fe7924e99F6a0E0B568ac1970D9",
      strategyAddress: "0x5450fBA1464A32afb62eFD1327c9f7741f7d2c62",
      snowglobeAddress: "0xd63359ff51BF1217730ae2C37979242B1a3f7c53",
    },
    {
      name: "PngUsdcEPng",
      lpAddress: "0xC33Ac18900b2f63DFb60B554B1F53Cd5b474d4cd",
      strategyAddress: "0x5Eb8942Fc2b1E43ED89D673757aFfd7b9CFdd22C",
      snowglobeAddress: "0x39259A07C7B21189BF1bC2Bd75967565b3C1F16e",
    },
    {
      name: "PngAvaxTusd",
      lpAddress: "0xE9DfCABaCA5E45C0F3C151f97900511f3E73Fb47",
      strategyAddress: "0xc8F5066222c0A639C253154de69cBBBf08FeBc1c",
      snowglobeAddress: "0xfe1A87Cc4a2144f7eBb7d731bE80bF0e4CC6E909",
    },
    {
      name: "PngAvaxLyd",
      lpAddress: "0x87B1Cf8f0Fd3e0243043642Cea7164a67Cb67E4d",
      strategyAddress: "0x16784e86a0cCa1E5B7f00916251a1DAAe7a9A57B",
      snowglobeAddress: "0x3F2b777d055dbD4D0812f3750Ee71190431D3Fc8",
    },
    {
      name: "PngAvaxHusky",
      lpAddress: "0xd05e435Ae8D33faE82E8A9E79b28aaFFb54c1751",
      strategyAddress: "0x06Cb3C743924feF73967D88aa9b1c98b13f8021c",
      snowglobeAddress: "0x150Bc67072c2dB7c55D83302B7dA7D930Eed1c3E",
    },
    {
      name: "PngAvaxGaj",
      lpAddress: "0x278f24A782B96BE10f15df93487Aec5331CfdFF1",
      strategyAddress: "0xA89947F32669Ee3414Ece27F2eB26E274A0f6c67",
      snowglobeAddress: "0xa3528E975ed30326e4930c8F70b01F9d9608D8b1",
    },
    {
      name: "PngAvaxAve",
      lpAddress: "0x62a2F206CC78BAbAC9Db4dbC0c9923D4FdDef047",
      strategyAddress: "0x517c02BF0fFd2c5C382991C0Aa3b306d9e357fb8",
      snowglobeAddress: "0xD579719d3a58492D803c7d60E3565733a4ba3DEa",
    },
    {
      name: "PngAvePng",
      lpAddress: "0x59748d12eC2bf081B306821eE1201A463F94fEa4",
      strategyAddress: "0x025F134952F74B59888d0D3D1545865aa8a9bF98",
      snowglobeAddress: "0x2B30b282405C3ee946843901dDbEc1a82562a1fC",
    },
    {
      name: "PngAvaxEle",
      lpAddress: "0x9e14eBC3c312d1CADa4E16001FD53b222902E103",
      strategyAddress: "0x9e4ca07dAaE819DE12fF9eDC4647a1BBF3e34305",
      snowglobeAddress: "0x096bAE6C45b0047eF3F1cf1f1c8a56eF0cd58cdE",
    },
    {
      name: "PngAvaxGdl",
      lpAddress: "0xc5AB0C94Bc88b98f55f4e21C1474F67ab2329CFD",
      strategyAddress: "0x2a1EFDDB7f864Af3474E9459c4FF3B83e90F728D",
      snowglobeAddress: "0x342476c1F9436277acBC088788D0De53b8b34106",
    },
    {
      name: "PngAvaxMfi",
      lpAddress: "0x13bEb85D61035Dc51480AB230CE1cBAa8cC551da",
      strategyAddress: "0xAAd21Eb26464C1E37e4BfBCb1Ea99BA5576f4e6D",
      snowglobeAddress: "0x2F2Ba207f86b46b05a1c79e50b9f980e267719B8",
    },
    {
      name: "PngMfiPng",
      lpAddress: "0x334Fd3526D5F55301FF3faa0fc231d38FA45e342",
      strategyAddress: "0xc932639f60BC2F839126298A9f9130084A038F54",
      snowglobeAddress: "0x51B03A4A57da8ea9FC4549d1C54f6ccd678e2892",
    },
    {
      name: "PngAvaxFrax",
      lpAddress: "0xf0252ffAF3D3c7b3283E0afF56B66Db7105c318C",
      strategyAddress: "0x36c98A11a2B41A5b9b5ebAF8D3160EB8d2fC1800",
      snowglobeAddress: "0xD0686AC7d0CfFd00A29567D37774058452210D57",
    },
    {
      name: "PngAvaxFxs",
      lpAddress: "0xd538a741c6782Cf4E21e951cdA39327c50C51087",
      strategyAddress: "0xA4BB2C3BDE08FAB2c1a9537B57f08653f51e8fEf",
      snowglobeAddress: "0x07E837D2ae3F2fB565ABdAa80797d47412FC3a94",
    },
    {
      name: "PngAvaxStart",
      lpAddress: "0x8d0BfC06AF725CFaA38672b97c9fFaAD16081aF9",
      strategyAddress: "0xf0034462e91bAb693d3052C619ed67C0613Ef047",
      snowglobeAddress: "0x973509A4e6DfAA2B5753fC8FB4f85F861fFbA8BB",
    },
    {
      name: "PngAvaxSwap",
      lpAddress: "0x5BE4063911D88fd07122671C9F3c94693846787c",
      strategyAddress: "0xaB8eC44bC3D64b4E43C87B30Faa045A9b93343e7",
      snowglobeAddress: "0x7Fc1954FbC383e5c477b81c0E1CFBf3846D0dE10",
    },
    {
      name: "PngAvaxTundra",
      lpAddress: "0x0a081F54d81095D9F8093b5F394Ec9b0EF058876",
      strategyAddress: "0x3653546bDB22168031CD7a159bB5C12eF4d585d3",
      snowglobeAddress: "0x05Bba89E406792D2d73d6D4022347c3893b02a20",
    },
    {
      name: "PngAvaxYts",
      lpAddress: "0x363D093d419093998C06a4f422D73A43156d7f3e",
      strategyAddress: "0xf6AF690a89862a4704230E91b3e91570490D6580",
      snowglobeAddress: "0xee4F816ac2333A346B7B3a76579F0b5342511822",
    },
    {
      name: "PngPng",
      lpAddress: "0x60781C2586D68229fde47564546784ab3fACA982",
      strategyAddress: "0x5E431A41D75b273Cf0BD165c7551838FB3C4CE10",
      snowglobeAddress: "0xA22D8FD15FB36aA9e1Db795A78db8b688F6284F6",
    },
    {
      name: "PngAvaxYay",
      lpAddress: "0x04D80d453033450703E3DC2d0C1e0C0281c42D81",
      strategyAddress: "0xe33ACaDF398fe64512689b5FbaE440cCb1AbaA5E",
      snowglobeAddress: "0xD7601D15ce8D207Ef01f2e45c6e24Fc5A34c393f",
    },
    {
      name: "PngAvaxStorm",
      lpAddress: "0x9613Acd03dcb6Ee2a03546dD7992d7DF2aa62d9a",
      strategyAddress: "0xb7094fd4a26397ADb1Ac1beB73046C55f91Aca82",
      snowglobeAddress: "0x86C70CE247Cd76b776748687634382a1830b3aC4",
    },
    {
      name: "PngAvaxIce",
      lpAddress: "0x24dF88626312D37b1cBb46d2e0491477D1bEc84a",
      strategyAddress: "0x83866b7817Ab99451F773193d307D9E7FE4D191d",
      snowglobeAddress: "0x42c3Fa6514Ac55F0f2CA4E910D897282829c0Ab2",
    },
    {
      name: "PngAvaxWow",
      lpAddress: "0x5085678755446F839B1B575cB3d1b6bA85C65760",
      strategyAddress: "0x73Da3FCdCd5B6c4C58383ddc6A2e19046981d71C",
      snowglobeAddress: "0xca26bF455974B85df3Ed9cfdbf0B620D616738BF",
    },
    {
      name: "PngAvaxTeddy",
      lpAddress: "0x4F20E367B10674cB45Eb7ede68c33B702E1Be655",
      strategyAddress: "0xf67D65074500964a0bec8F6E99dfd56c8F9368b6",
      snowglobeAddress: "0x42E1CDd48884C9027E965600B4A725a91D27255b",
    },
    {
      name: "PngAvaxMyak",
      lpAddress: "0xBccebf064b8FcC0CB4DF6c5d15F9F6fEaD3Df88d",
      strategyAddress: "0xb66d2FBC206644d962Ef3a8eADeD938A8fF1EdB0",
      snowglobeAddress: "0xc88477DD929837B0e6Aeafeb9Dd2Dd238505E698",
    },
    {
      name: "PngAvaxApein",
      lpAddress: "0x8dEd946a4B891D81A8C662e07D49E4dAee7Ab7d3",
      strategyAddress: "0xd0d8cac872113d241b7E19398D519299F2156755",
      snowglobeAddress: "0x192ae260676Ba79ccc57A6f4Ed692Bfe371658b9",
    },
    {
      name: "PngAvaxCnr",
      lpAddress: "0xC04dE3796716ae5A6788b75DC0d4a1ecE06092d9",
      strategyAddress: "0x84A538fad778a56f76E78fE255DE8fcc9e83F53e",
      snowglobeAddress: "0xEf28DbfDB08c4475f5fA07Ac2aD4B8C1cFE2938a",
    },
    {
      name: "PngAvaxCycle",
      lpAddress: "0x51486D916A273bEA3AE1303fCa20A76B17bE1ECD",
      strategyAddress: "0x4E341fd12202dB8Cb6E725bcDe0Ff3fC2D742e7f",
      snowglobeAddress: "0x4c885E844283D9FAf10607106963768113342543",
    },
    {
      name: "PngAvaxBifi",
      lpAddress: "0xAaCE68f9C8506610929D76a0729c7C24603641fC",
      strategyAddress: "0x3b4a657d578234Eb4c24E4301c42DDf53FFEe69E",
      snowglobeAddress: "0x07e7dF7F0612B7dc6789ba402b17c7108c932d05",
    },
    {
      name: "JoeAvaxPng",
      lpAddress: "0x3dAF1C6268362214eBB064647555438c6f365F96",
      strategyAddress: "0x7E24f0f6278E9Ea526022D28FCa12cf66D882460",
      snowglobeAddress: "0x962ECf51A169090002CC88B4Bf16e447d2E13100",
    },
    {
      name: "JoeAvaxJoe",
      lpAddress: "0x454E67025631C065d3cFAD6d71E6892f74487a15",
      strategyAddress: "0x118EAa52519aC8E022f1587D4ec0EF1f7c2246e0",
      snowglobeAddress: "0xcC757081C972D0326de42875E0DA2c54af523622",
    },
    {
      name: "JoeAvaxSnob",
      lpAddress: "0x8fB5bD3aC8eFD05DACae82F512dD03e14aAdAb73",
      strategyAddress: "0x868d0F1985e7e5585747bd6E9B111D031B71F960",
      snowglobeAddress: "0x8b2E1802A7E0E0c7e1EaE8A7c636058964e21047",
    },
    {
      name: "JoeAvaxXava",
      lpAddress: "0x72c3438cf1c915EcF5D9F17A6eD346B273d5bF71",
      strategyAddress: "0x90967866125C3277aa7DF3a5651C5Ef12F18901b",
      snowglobeAddress: "0x0B2C4f6C54182EDeE30DFF69Be972f9E04888321",
    },
    {
      name: "JoeAvaxPefi",
      lpAddress: "0xb78c8238bD907c42BE45AeBdB4A8C8a5D7B49755",
      strategyAddress: "0x5639322281647935f64efbd74Df231F5066CcAA2",
      snowglobeAddress: "0x68691a1e8eAAE3dFDcC300BbC0d6D3902bA06E8d",
    },
    {
      name: "JoeAvaxElk",
      lpAddress: "0x88D000E853d03E7D59CE602dff736Dc39aD118fb",
      strategyAddress: "0x0Fd5eeef2261597369B51471eD5B9ebeEF7A4C6a",
      snowglobeAddress: "0x6440365E1c9282F50477b1F00289b3A7218E47Ef",
    },
    {
      name: "JoeAvaxVso",
      lpAddress: "0x00979Bd14bD5Eb5c456c5478d3BF4b6E9212bA7d",
      strategyAddress: "0x92AAe7428773aE8e8156a3270e91641807D68A82",
      snowglobeAddress: "0xFB3ba5884aD5eBD93C7CB095e4cE08B1C365c2ea",
    },
    {
      name: "JoeAvaxSherpa",
      lpAddress: "0xf0d7EC33147Ec3bEfd24B880472307bF3a01BB8A",
      strategyAddress: "0x35Fe62800440595A77A11Ff5474b91be00Ea1705",
      snowglobeAddress: "0x75312b14Ce830EC078D93Ac8FA667b14BEAC18E6",
    },
    {
      name: "JoeAvaxYak",
      lpAddress: "0xb5c9e891AF3063004a441BA4FaB4cA3D6DEb5626",
      strategyAddress: "0xC561812B2e3962A89A99C2dd583B3537a32B15D0",
      snowglobeAddress: "0x9854F6615f73e533940F90FfE8DB1eAFB424A3c7",
    },
    {
      name: "JoeUsdteJoe",
      lpAddress: "0x1643de2efB8e35374D796297a9f95f64C082a8ce",
      strategyAddress: "0x304C0ACD0b5e78dB331952834281f75eB5b9eC7b",
      snowglobeAddress: "0xB26A7f2bCA1De2E6BFf411D2ce04ca6C3285e0E8",
    },
    {
      name: "JoeAvaxEthE",
      lpAddress: "0xFE15c2695F1F920da45C30AAE47d11dE51007AF9",
      strategyAddress: "0xF3c9D8f8F2784e63BD2631c4a4c6Ef02973Aa6F2",
      snowglobeAddress: "0xe13E1a491eDc640b0591D70390897620f31bbF6E",
    },
    {
      name: "JoeAvaxWbtcE",
      lpAddress: "0xd5a37dC5C9A396A03dd1136Fc76A1a02B1c88Ffa",
      strategyAddress: "0x457e7d6a598a129132d3A80EFf3dD9D7235548aa",
      snowglobeAddress: "0x5c52587bD441A6e6916D2C2d32A84735b9Ee4ccD",
    },
    {
      name: "JoeAvaxUsdtE",
      lpAddress: "0xeD8CBD9F0cE3C6986b22002F03c6475CEb7a6256",
      strategyAddress: "0x3Ab14374bB3fB175c4A61F3E934ec42BfEd0D259",
      snowglobeAddress: "0xc72901E3dBE5258728B329352fC4742f4966Bc1f",
    },
    {
      name: "JoeAvaxLinkE",
      lpAddress: "0x6F3a0C89f611Ef5dC9d96650324ac633D02265D3",
      strategyAddress: "0x72f88B9Ceb3010a839E8191462c3E6B8dF9634Cf",
      snowglobeAddress: "0xfAa4f21A8Ef346370d00F1a7693FdC5D87C3e12a",
    },
    {
      name: "JoeUsdtEDaiE",
      lpAddress: "0xa6908C7E3Be8F4Cd2eB704B5cB73583eBF56Ee62",
      strategyAddress: "0x66f37F73FaC11f4012dD2e9D2844B386212C1961",
      snowglobeAddress: "0xfe19f34873fC2C7ddcB8e392791b97526B4d22e0",
    },
    {
      name: "JoeWbtcEUsdtE",
      lpAddress: "0xB8D5E8a9247db183847c7D79af9C67F6aeF759f7",
      strategyAddress: "0xBe609cf73C25CF64FE90dD31C4B0157F199e777B",
      snowglobeAddress: "0x6941618661205d5AAd2C880A0B123d19615916b0",
    },
    {
      name: "JoeUsdtEEthE",
      lpAddress: "0xbe1b87f47fDE3F338Aa3AA98b85435e1709dFD06",
      strategyAddress: "0x421ec5fa43Fc37Ce1D822144259f9cA0F5a8c440",
      snowglobeAddress: "0x67b2D2579E631512faFbB1534214eA2D3403563B",
    },
    {
      name: "JoeUsdtELinkE",
      lpAddress: "0x59E4e5501764a293B829902D9CF01967FA80eff2",
      strategyAddress: "0x833f270504De13c699A05a0FE39FC65475cB2C68",
      snowglobeAddress: "0x0666B3db2441A50B6a1C1d330d2f36Df18Ad5651",
    },
    {
      name: "JoeAvaxUsdcE",
      lpAddress: "0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1",
      strategyAddress: "0x8c86F4ac42814a1Ec136DBb607259B1Bf98998C6",
      snowglobeAddress: "0xf25f6f5dad18a16033d05c1f2F558119665fDEF4",
    },
    {
      name: "JoeDaiEUsdcE",
      lpAddress: "0x63ABE32d0Ee76C05a11838722A63e012008416E6",
      strategyAddress: "0x953a04A757F88122B428f1c08F5d43b48c3aF951",
      snowglobeAddress: "0x6C915564607d62B007D203c04473152bc090EE93",
    },
    {
      name: "JoeAvaxQi",
      lpAddress: "0x2774516897AC629aD3ED9dCac7e375Dda78412b9",
      strategyAddress: "0x75f1Ed15D3974F4d9F2072D92eB509B82c2aC4EA",
      snowglobeAddress: "0x9937dD4aaaCfD77BD34a88f9282fAe36fAE364f9",
    },
    {
      name: "JoexJoe",
      lpAddress: "0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33",
      strategyAddress: "0x040D72568303927c8eEf626ec8AB8271162dA120",
      snowglobeAddress: "0x8c06828A1707b0322baaa46e3B0f4D1D55f6c3E6",
    },
    {
      name: "JoeAvaxMim",
      lpAddress: "0x781655d802670bba3c89aebaaea59d3182fd755d",
      strategyAddress: "0xAFCa35AE5Dd4D8FC900AD7b08d7f3e96E498B2B8",
      snowglobeAddress: "0xf561EAE92039ab1540a75FDFD50ce8C6800bC078",
    },
    {
      name: "JoeAvaxTime",
      lpAddress: "0xf64e1c5b6e17031f5504481ac8145f4c3eab4917",
      strategyAddress: "0xc42701aE4bacF65A23B82abd42E549aab4fCC2EB",
      snowglobeAddress: "0x3AF37B647a08D443ef08Aff8cDdeAE33bBa56779",
    },
    {
      name: "JoeAvaxFrax",
      lpAddress: "0x0d84595e8638dbc631076c51000b2d31120d8aa1",
      strategyAddress: "0x55864D8f42452b3AFEF83B4831E3253581bEe080",
      snowglobeAddress: "0x8ba8d732109A4eE78b0F8976B21FC88009280bd7",
    },
    {
      name: "JoeAvaxSyn",
      lpAddress: "0x20abdc20758990b6afc90da2f2d30cd0aa3f73c6",
      strategyAddress: "0xc79E3F17b88E7E621196cc2d5A6B23617dC62ED9",
      snowglobeAddress: "0x810CF29576E61695BA7Fe1e4D493663185691854",
    },
    {
      name: "JoeAvaxEle",
      lpAddress: "0x0a6f6f504245bdc36b47d72d8718c09d6c0461de",
      strategyAddress: "0x9185D1f86592DC670568B240c7cc5bFF7a04DC4d",
      snowglobeAddress: "0xD865B861365c777b3942122933Ff6F8aD1cD28E3",
    },
    {
      name: "JoeAvaxWet",
      lpAddress: "0xee25009c093a06896acf29cf93386ecc00b1714b",
      strategyAddress: "0x04249D6B55769f69e8E810e60ae885AD75646306",
      snowglobeAddress: "0x34B5f24Ab10A36Cf1e82ea95c9C611162D6e3f60",
    },
    {
      name: "JoeUsdtEUsdcE",
      lpAddress: "0x2E02539203256c83c7a9F6fA6f8608A32A2b1Ca2",
      strategyAddress: "0xF6AaAb65b735e71951Af436bBa7aC4461c9E3E83",
      snowglobeAddress: "0xd596136ee746BaeE7ac159B3c21E71b3aeb81A68",
    },
    {
      name: "JoeAvaxSpell",
      lpAddress: "0x62cf16BF2BC053E7102E2AC1DEE5029b94008d99",
      strategyAddress: "0x5E881dE5B6127134600e03705966f3EA37D9e2d2",
      snowglobeAddress: "0xec54A22B53EE66a77C5F26F860c6913472199661",
    },
    {
      name: "JoeUsdcEMai",
      lpAddress: "0x58f75d7745ec383491053947Cd2AE6Ee7fc8B8f8",
      strategyAddress: "0xcb0A11DfA23e457A917488f11843822085edf146",
      snowglobeAddress: "0x81Be7fBF66cF52A5cC6AD77f32361C5F3BBDAAd8",
    },
    {
      name: "JoeAvaxAavee",
      lpAddress: "0xc3e6D9f7a3A5E3e223356383C7C055Ee3F26A34F",
      strategyAddress: "0xc487FD871031ba788aEa388557Ceb2C0E8BFeACd",
      snowglobeAddress: "0xE7FfFc0D15fc238F8F1AcC40Db5B5A0240Fb116a",
    },
    {
      name: "JoeAvaxBifi",
      lpAddress: "0x361221991B3B6282fF3a62Bc874d018bfAF1f8C8",
      strategyAddress: "0xb1c5867847A347ae84b53Cb0EEaeA76E9aFF91F6",
      snowglobeAddress: "0xb58fA0e89b5a32E3bEeCf6B16704cabF8471F0E1",
    },
    {
      name: "JoeAvaxBnb",
      lpAddress: "0xeb8eB6300c53C3AddBb7382Ff6c6FbC4165B0742",
      strategyAddress: "0x7092e1468b1A3f4Db78f32dCd697D7D9ABaf7241",
      snowglobeAddress: "0xc33b19c3d166CcD844aeDC475A989F5C0FC79E43",
    },
    {
      name: "JoeAvaxChart",
      lpAddress: "0x8724a15D8B760BB72545488429A4032228382BDa",
      strategyAddress: "0x38342ee92B71CE36152a02A062EC1A1EA39dA339",
      snowglobeAddress: "0x916aEbEE43E2bE7ed126A21208db4092392d80AD",
    },
    {
      name: "JoeAvaxKlo",
      lpAddress: "0xb2fF0817ad078C92C3AfB82326592e06C92581B8",
      strategyAddress: "0x083f7864d89C80e3F613043Bb3926D0dC2fb6f18",
      snowglobeAddress: "0xf6E8432EF7d85Ae1202Dc537106D3696eBB27769",
    },
    {
      name: "JoeAvaxMai",
      lpAddress: "0xD6d03fe131dB3dE3aF5E6326036BaC4C1Cf8C80d",
      strategyAddress: "0xBe7527A9CB26E62B7E9F1850f8141F289682f665",
      snowglobeAddress: "0x29BF8c19e044732b110faA1Ff0Cc59CA35c13f17",
    },
    {
      name: "JoeAvaxMyak",
      lpAddress: "0xAD3Afde5B6b8C353078Fd368f508C97d593353cc",
      strategyAddress: "0x6556D1575F17ec06e867090DE03C6e39DDf749DB",
      snowglobeAddress: "0xb81159B533F517f0E36978b7b8e9E8409fb9C169",
    },
    {
      name: "JoeAvaxRelay",
      lpAddress: "0x41f3092d6Dd8dB25ec0f7395F56CAc107EcB7A12",
      strategyAddress: "0xc5E7aEB5A2F80e157c3ad801e15CdCfea74551DF",
      snowglobeAddress: "0x8C4185D7303c7865a45B46d705F40a8FAAd43Add",
    },
    {
      name: "JoeAvaxTeddy",
      lpAddress: "0x91f0963873bbcA2e58d21bB0941c0D859Db3ca31",
      strategyAddress: "0x76D6c102Af065B73D5aA8A9a96cd92a4D14027f1",
      snowglobeAddress: "0xb357bA896818ccCd020fb3781a443E3d3f93beFf",
    },
    {
      name: "JoeAvaxTsd",
      lpAddress: "0x2d16af2D7f1edB4bC5DBAdF3ffF04670B4BcD0BB",
      strategyAddress: "0x5B32E4B2734E2f6d540249607f11797d2bEB1715",
      snowglobeAddress: "0xcEBFFa4C80291e80EA0684E4C8884124d6a81197",
    },
    {
      name: "JoeUsdceLinke",
      lpAddress: "0xb9f425bC9AF072a91c423e31e9eb7e04F226B39D",
      strategyAddress: "0x968Fc5ffB5948938099b1884f21aEee0fE560198",
      snowglobeAddress: "0xc28F8a82018c0b92C903Fc2D3013381b7e6ae3d5",
    },
    {
      name: "JoeUsdceEthe",
      lpAddress: "0x199fb78019A08af2Cb6a078409D0C8233Eba8a0c",
      strategyAddress: "0x14636A5a5Dc8836E7E378B9b6E4614A3C94f48E5",
      snowglobeAddress: "0x5586630339C015dF34EAB3Ae0343D37BE89671f9",
    },
    {
      name: "JoeUsdceJoe",
      lpAddress: "0x67926d973cD8eE876aD210fAaf7DFfA99E414aCf",
      strategyAddress: "0x043a2eCE3C99fcBCB879A469c35BF267Bf842D4C",
      snowglobeAddress: "0xDe9f979fEdf595FcfD1D09c85d194C700678cC83",
    },
    {
      name: "JoeUsdceWbtce",
      lpAddress: "0x62475f52aDd016A06B398aA3b2C2f2E540d36859",
      strategyAddress: "0x3F84273A3D9419b3Cada6c0080073DEcA2c1383B",
      snowglobeAddress: "0xAFB27fB1c5bd91A80d18A321D6dC09aDd6a94219",
    },
    {
      name: "BenqiDai",
      lpAddress: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
      strategyAddress: "0xc9a6A413FBAf5029A4d4b9Ca9e15efe88c8e70d4",
      snowglobeAddress: "0x7b2525A502800E496D2e656e5b1188723e547012",
    },
    {
      name: "Benqieth",
      lpAddress: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      strategyAddress: "0x46a6aCd149f7BeA5c469580FEE851dd9F5ba968e",
      snowglobeAddress: "0x37d4b7B04ccfC14d3D660EDca1637417f5cA37f3",
    },
    {
      name: "BenqiWbtc",
      lpAddress: "0x50b7545627a5162F82A992c33b87aDc75187B218",
      strategyAddress: "0x3DD8c4BB2e3fC4dC42e5D2765093aE9325E49ed6",
      snowglobeAddress: "0x8FA104f65BDfddEcA211867b77e83949Fc9d8b44",
    },
    {
      name: "BenqiLink",
      lpAddress: "0x5947BB275c521040051D82396192181b413227A3",
      strategyAddress: "0xbd86DdDf32923763F26A0eB051c35b6442c323fe",
      snowglobeAddress: "0x32d9D114A2F5aC4ce777463e661BFA28C8fE9Eb7",
    },
    {
      name: "BenqiUsdcE",
      lpAddress: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
      strategyAddress: "0xb9B9800d18287dDB04296Bd47192daba159d8128",
      snowglobeAddress: "0xa8981Eab82d0a471b37F7d87A221C92aE60c0E00",
    },
    {
      name: "BenqiQi",
      lpAddress: "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
      strategyAddress: "0xe9d8C31c5Bd5f2939731387dBc4f1c984828F532",
      snowglobeAddress: "0x68b8037876385BBd6bBe80bAbB2511b95DA372C4",
    },
  ];

  const generate = (pool) => {
    const network = pool.name.slice(0, 3) === "joe" ? "traderJoe" : "pangolin";
  };

  for (const pool of pools) {
    await generate(pool);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
