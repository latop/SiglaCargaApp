'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "97eb7e5a4accf029f26c1f230aa3a9ee",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "cf46f7f07ad5ec9ea98393b4bd4aa625",
"index.html": "34852618b478c6d8db85d3747e2a86fb",
"/": "34852618b478c6d8db85d3747e2a86fb",
"main.dart.js": "3874373ba7c374cb9aa2e20e0f2ce292",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4c3b72a772a5d5648274251b54abd981",
".git/config": "0463db7df86364e4b61c7af85a17600b",
".git/objects/61/9edb45be0b02b0cd761abcd94512b57d404975": "349c369afa7ddf81d634b4e75686b081",
".git/objects/59/b8ac06b741084aa402558d637d89a70bc457fb": "eda70bece125294a6031b77e4060b771",
".git/objects/92/a65569c32de7602c55da65ce1d950a888e59f9": "f922f1c716eae01f10ff3ecd96035761",
".git/objects/92/3220dbe38c595070b3e4e59b953af6827ebe8c": "6a393ed14d6f55d4d6df2301efc7d27e",
".git/objects/68/fe875b1a025812ddbc72bb0a036939d7beaf38": "66b7ff2cb53ca61d4896f4065dc5cfb0",
".git/objects/57/49c2f229f3cad79128386c06525a9dc623017d": "f25d91b2bef225e4c4c0f982b68d82b5",
".git/objects/57/ea5bad9d9ad1c922e15d722f29609ef0cce0ae": "aee1738a4a4c803b4dfccedf347628b5",
".git/objects/6f/ea40bc760189c825c4a280ab22491767636939": "38c23dae3e0a00e006c0124b721b73ca",
".git/objects/6a/05c40756f11f66c7895494bd5b7e080b543acc": "69c0df9a8c207bfe6fc8b1e88ecc1a88",
".git/objects/3c/1fa7b53d46e4e23743f945925e7e4358d19864": "f085804d8ee2158a4bb6a5ede6ad284b",
".git/objects/3c/e369accd79826a8507a7e2d79059af776ac169": "bb1c2ac302f8f544bc9d3cf729b57b0d",
".git/objects/3d/ff37ea70b1f7e55e35b2e7999074b42362e982": "024faea91bcb6249525e9047313afd26",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/60/b8a073bcaeef97fed751d33debcf73526f0e6c": "c16ecda9a8b360e8722863deec188a27",
".git/objects/34/7575f8a57e9c05cdeada7649e0888cf6b376a9": "0ec2c5b6103dae34f8fb69282d47d1ae",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b2/66c3807b03b88b240c971533477fdc29398067": "b79c89154ff64d753de69d4202935dd7",
".git/objects/ac/79b4bd34c0e957ffc808d29ebee406ff258147": "f19bef2223d9f1e2e77dc879a18a20e9",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/be/defdb018405026bc4c087d1625d4ae3d7e0b48": "1766a7b2c2de90173025d63ab640e6cd",
".git/objects/be/155bf6f36d01b362222c8ff3fa7d4b7d6176bc": "4541e6e30c994004fafb75780576d188",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/df/74bc388a2bc2912ffb68f4f34b6cbc1f313154": "106ef441a913f8c0e92fa085ce487f4c",
".git/objects/da/f2d9ba66c07e66eb966debd0f04264b3c8ccc4": "df044a4d180f4aad26acc52d9e2374d0",
".git/objects/da/09ab1da34d3cf33d4e563963f96cbc1fc213da": "11dac222be8b2fb286b9958b93cf43ca",
".git/objects/b4/c32283a77f6eaf1bbe184ba08ffd09079fef3b": "4e482bd4876f8d9614bb0da4e5e2438f",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/816467705360d5685230d91202d78d965b6019": "4bff3abdca9f50e8413bec788b84fa4d",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/d8/e24c53e5154c9473044d8e19b405cc2d53b7a3": "ea1adddaf0d2b705372e97222fc92664",
".git/objects/ab/b5ac206df587662f23a386e23498e501ff6ed3": "c99c72a11c48b6da64bdbe68757fb700",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/0d8f90add52267adb0b53129380fb21bcf03a6": "ce5523311b640cb30e416d8fad97bcd6",
".git/objects/f4/86754937b74929ae2257ad40f3c9b7aac4b023": "f69704a614a371d2f583315e3dc915e9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/d51a90750c8d9f217162789317b9bd59738097": "542033cc35a37456835e4dbb96d3939f",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/fc/dc1e759cad119f191ede3245cad2f0f1e814cd": "3a23385475538e9ae060e7b441e32f8f",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/e3/0456f217f37b5bfb2c1192a724f1dda6b08af1": "9523c2aa4ea1a15fcbde7194e737c354",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/ed/dd0275969a7d54d883b1c57628aeb8db75c71f": "06da4b182448c767214d0d1678c4d501",
".git/objects/c6/811c55f50e3cf3352521d4097314fcfd7ed28b": "cd9702e80d99c1f3d94ff9e62e08eb4a",
".git/objects/7d/176a41b295631415a88fdc8810b95c4b32c52d": "7dd3f7db5391341ec06dfe22900e0257",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/ac22904218c0ab01136463638b24715503874e": "813ca938dbbce450550ee1a2376969ec",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/87/f0a2b3bd2be581d212d4157eec2566b9e4f138": "a7e73d4ec6fde6a5637b17d599337a52",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/01fd991122a491f93f66a5a31587410d02250f": "0e004be9721de51c2f85803f4730418c",
".git/objects/10/e536ee564f38fab9592fe6573b02896758ceb0": "b1e822a1ca299921b7915830633e9590",
".git/objects/19/eaaa76623f4a5057af1b3d931a719ffd7ec212": "b59ece10c6afac7594e09e30d5d70e29",
".git/objects/4c/889e0f4edc24810a0688025fbbaaa03afe6536": "98936865246ab60be13ecc2bfe689e42",
".git/objects/4d/9369fbaaf705878709fe1bf08c749a67ddc0ee": "91772cac15c934ffc6f3106a5ef5d2be",
".git/objects/2a/9a43064d6759b5a203174663c3d1d2a1d57b8e": "c4cbba3e2c86a76a2bc022daef1606c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/5a1a43a1a751fd333d9fdc56ddb4a534797710": "65d59eb4add8334e1dd4e124d8fd5d1c",
".git/objects/38/255a27100a1bbe63da9cd7465c9497644a2d5d": "625a59003da800df65d2fd568eedd70c",
".git/objects/65/13095ed58996be9740a94d5b9ec3b2914ad766": "5cd9fb7f6969b4fe9f997c9fd25e2936",
".git/objects/96/3f121605706f37699e40f5dfde56d26429ad03": "22a13b1103d8bf3c1a1c8bf27440736d",
".git/objects/3a/7db38714bd1dba64981a7b5f3945d1de213f13": "60ae0ae6ee75d38413bd17f44ca59ac4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/79abfbc490d6aab417114dc0789fba69b70fcf": "830ad696e4e2d3ea18e9f5dd1c3d047c",
".git/objects/5e/09bd9152aff88ee29320b625701b8d07d891a9": "1d100376acdb1fde14952a15f74b50db",
".git/objects/37/1162897b9972531c41b7bb121b10e67f3e8419": "290bab5fdaff7dbb079e150cbcce03cf",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/99/05fd6414e9bd535adde35c6b6a933c4a1949c0": "0e6ccb8d132c8dc5d08ae2c62bce7ddf",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/97/7f8c12872528a7111580db3c4c511b0ebf602c": "fb9afe9c01a9b06a689df32801c8e47e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/4702d458467ac4fb9ba3a9deebfdb52e53bc64": "14a6fb8e035649e4312ae19da1a2bd0a",
".git/objects/64/3cec2f5dacfdff6671e2d0bd187189d35c9e10": "d9e59cf0f8af6897b22e85f0f9fc8599",
".git/objects/64/350569e0f22906a92752fa5bd2e7aa559f167e": "ed22f7c3628f258cddd411fe534af34a",
".git/objects/90/fd1b3b2336505641b69025d5e9595abc779880": "32f4bbb7c7a6b0e31e29f0c5562cc16d",
".git/objects/bf/74b74a5511e59a241d7faac04c7421cdc78db5": "a896af6c5ae293b324a0a2619813b9d9",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/a0/a9746ccf72800eac2b990a5996a1562de6c794": "e429d966ea23a5315214a5674b851fc2",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/a9/0ffb5ef55e6fcfdcebafbd6e6dc2d4715891ff": "b280cb7b5f0ff01915f9e24af64bccab",
".git/objects/a9/c3899677e880d5433e4071852125e89cf2b6e9": "6c48f6c3f7d76a163cc92f8d3a11081b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/362bf2f8c450efb8edffd5f100ae5d44bb378e": "b58b96f2d31e139d85a0621ec727b89e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/5fd4666d6915a69b1623b920f945638cee96ac": "5243ea96a9a92056577dbaadd632dc9a",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0c7690bba2fbeef6e0d306b4fb125b6fb941f8": "0c557750577c8586f787b8807b92a750",
".git/objects/a1/0d66b0b49c0faadd8aa26b5f7a3a98030a152d": "0637390ba444f4edc49e2bae72816ffa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/ff885a5c5dad5876d7cb516d2e410fd9687d97": "b75f9df79b67b726d8c46f90dcdeb509",
".git/objects/c4/0727a3b34fe1c1a3da6441c0f2c39d0cd0c63f": "d7052cdda7710273ead2bcc1b21a4e88",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/cd/3bfe685c3f91c9e215ad06fce778d47e82b4fb": "b7fdfab9d1f8b0c85c21b557c778a60e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/4a1b49d38dbe649644f61a6d7b336de02df273": "a51dc14d166a6a123e252fc5ed0618d5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/d7ac7ecf175ed2d4c7eac24a3f2f04b271b56d": "a69c2bc43b39a8bf1629a43c373865d4",
".git/objects/fa/f857a5ececd2d7682e21634eddcc056fb588b9": "64f1f2ed150172149ed1f89813a7a4f6",
".git/objects/fa/1799cb2b3c1ecc9e551fb1266affe288f5b0ac": "abd58a4caf66fc19c5ed36496f596b50",
".git/objects/ff/3a0c39c8f05d5d98ed84c55882f55229a2a2c1": "7a83b1db91ef808b52265fde12f71c42",
".git/objects/f6/22d878a2234fec90b5e16f594f143a6ad61d50": "de33b11b1a04e32aa1fe0ebb40aba83d",
".git/objects/f1/c1a4730a7cec540d28e8cfdbf06968a2337014": "71edc6ad1386801ce81811d1e904ba3f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9a27c22e2d83eacaa411d83c22705e577c2103": "64b3a7c5e0946823eba07268ee2caaed",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/1f9d4b8991c352f0553aa35b4720c768528537": "1f92f210e1eef4ec5275b56e1504b23f",
".git/objects/83/b8cbaf771ce8b5744801199467777203776649": "18975ec9622e54892793a8d79c24ac04",
".git/objects/48/d1d5b8763c2df59e07a76ec32a03dedc9be31e": "41c1344167785c615f22ab0e9ef8a5bb",
".git/objects/1e/f9e7455e5a8add2446766454cad86ec13346cb": "0b81a56ec792aa11fa73a8187da627b3",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/4a/63eb7391471158967e087d1ecf891d147cf425": "199cbb3b0a0a909c7e390f737e3c9ba2",
".git/objects/4a/86cde2c2bd010393bcf03e6759924d4dd31b5a": "80e88c1bdd5b5e37436d08f4f57d51d4",
".git/objects/15/81dd6d99c214adaad640c4b61e60c22461ee93": "73f172b45074c9a3b8845cbb01e40c07",
".git/objects/71/b2f71924519dd51088143632e9e96f1dba5e68": "81bce45cf6e37c3d753890506281c25b",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/22/03cc4a7efd4ed47dc9c96ed4c96a54d93fdfa7": "e40c263c9926cb30b342b7183c25209a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9eb799df2c9f265ea2c474cd0beb5ca",
".git/logs/refs/heads/master": "f9eb799df2c9f265ea2c474cd0beb5ca",
".git/logs/refs/remotes/origin/master": "63f2fceaa16a8303469972a16fa94ff0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e9cb0d74497ab799bbbd888f722ef8d9",
".git/refs/remotes/origin/master": "e9cb0d74497ab799bbbd888f722ef8d9",
".git/index": "e8c48a07c3227e994ea97aef551beca0",
".git/COMMIT_EDITMSG": "8179a11cc19806f90bd0159e6c1fc97f",
"assets/AssetManifest.json": "5ffb96fc48f28dd223cdc2d0c62c5cdb",
"assets/NOTICES": "c1f96eacbcbcc6acbb4d2584e2f754df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "12e5099bacd164d39c4d34115b500d59",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/profile-img.jpeg": "d127e2b041251c617de626e63491cc73",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/logo.png": "de5a6c16a50a980bbb89b22959c6b329",
"assets/assets/images/logo2.png": "a5d72ce97f46fed92e58580ee6d9560c",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/list.svg": "11dd3b24f4566be6f86a5b2f655480de",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/add_square.svg": "06002e0f5c259a6a783ae01625cc5c17",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
