'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4db3090358fb63128135f43b85068774",
".git/config": "a9cb68815ed1bc9b4f604dcb0cb43276",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15369814deb21e2a36c98b2a6806fb39",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c7a314823b9c287b11b690965e0b98d",
".git/logs/refs/heads/master": "1c7a314823b9c287b11b690965e0b98d",
".git/logs/refs/remotes/demo/master": "50dbad26dc68d68e4ad87679e2f71f29",
".git/logs/refs/remotes/origin/master": "d53641a07b651785199162f47cd459c2",
".git/objects/00/d761dbf26735d44e2302a0254b529d45d5fbc4": "a969da7fcec2b6914a1cf18a73df1f59",
".git/objects/01/1a5e771022f76dedfeacaf1a730bbf1e499236": "e79f3c709a2f95b905ddb09b774a2c0b",
".git/objects/04/c8fde367e04b0ee68b6354587e05cb14c33a60": "9b58e1de9927637e8e8a9bba6c18c6f1",
".git/objects/05/3ffc71328e9742a5b4b38a51d7f676b66ac22d": "e944e270bd6f846021ab2a992f6c7148",
".git/objects/08/6b7b8660c0d6ce933a52974db436656e2de6ca": "d495a61e9bbf2b9175a4482945a96584",
".git/objects/08/a0da78e7dd1c5712820931d13e02057dd0dad9": "1e5a95971fbd0f28e9c8ae9ede9c6081",
".git/objects/0d/a6b5188031b99fcf78784ba0332705aea884c7": "e387d1438e0b89c4d5a2019ed8336291",
".git/objects/0e/0dcd235c4973becf25f38eb4e5bb26e154c86a": "13e3d699f54c273cb85da397b0df9a2d",
".git/objects/0e/987061ad789ec941d57d47d70af9535a3e2944": "414678757386d110f55796f7478e6209",
".git/objects/0f/c09d954d0e037dea485dc55592c1892039b996": "f057fff6d1d0b685c1c861517ed86304",
".git/objects/14/ee3fbc0a1388bbf2b162b8054f336246f24287": "f212f324864979e79abd5410d1093e15",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/19/033f587ed63177a02b99efa46ff5abab8d8105": "828a9625d42254a3a01e3548153cba05",
".git/objects/19/628b27c4f7d05942247bc35255913c158ed8ae": "ffa2efe1d3955e16cfecd5817b5a13c9",
".git/objects/1a/a4422278d1c803ee15ef15810d5d6f9e20066f": "448dfdab669dbf9d77150e6e9c606105",
".git/objects/1b/0e80776d27c661c88d4a5ed8130669727e2644": "b280bdcd5f925fe2c8a246ace6b372bb",
".git/objects/1b/31f3f17cd140551e00b3d65e95bede70ca085d": "5a926f81f34800c294dc422fc0863bd1",
".git/objects/1b/c06fef45126d2f10af670a512e838a3b4d03b1": "3f12e1c979ce33d49f0cc1ab6aca41e6",
".git/objects/1d/5471c70cd8a36b55bc04ee800afa0e36b7cd53": "f710aff8fb83b24f9e1a1e3e83203703",
".git/objects/1f/3cebdfa432be8ff897d617fe7f7bd850cee586": "717b45006d14bfbb62a6b9cba6392dc3",
".git/objects/24/8ef8d71c815481b3892bc4121f548029be1368": "fa0aa6628c10bf3e4dc9e12d33a2fa36",
".git/objects/25/254800bd3d053f186cdb67225af7b44067b290": "a232c7eaf033435c1fea0df0bd5c6f28",
".git/objects/26/91b1832409ce6e0c197f167317d05131c05492": "b464f8e3af4310e8d69314e20886adac",
".git/objects/26/b122c21858431b22680a25ca4a11d0f6f11d69": "12011ffc41c56117e7f77ec7a981e8cd",
".git/objects/2c/f34951ff3679950e6f4c1c3d33bcdc820e2908": "849f104af199f32bfddb78fd47d6f4f1",
".git/objects/2d/d62efa34c2ba28f89e1482bb6096e5fb97e739": "9090c5693695c477b5fd37abb64e7432",
".git/objects/2f/3140e5e76224cadd44bddcb347e99b5240219b": "1f5c956a0ff8171181b9716a50e90c0e",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/73d3d54797d2b2ce68ee78429f0613120588f4": "167cd0109eab0653a9fe211d1d08b3a7",
".git/objects/36/babe2c0b8a592241e2d80287798159bb4e4219": "1ad2a788a8969b719cb0e214a3cc35b4",
".git/objects/37/ec9e64ef1df3c41d2a46d3faf9f62eab8aa88b": "1316125feaf18e486ada7e3b40123f7f",
".git/objects/3a/cb25571fae28b85f58ca42868bb2cc5e5884d0": "9b9968864211574e239e7dae4c519fbf",
".git/objects/3b/88c4df98c2592f18f32dfbcd170103edd6d0cb": "83b29a666fd6cbc57c7ec5e778c39893",
".git/objects/3d/411a4072ef63ff581b6b34f9061f2603f7141c": "d1dcc9765e9ea9f1ae17efccb8b7cf6a",
".git/objects/3e/bc1959c2db9ab15aacba1e1948fb2a13306041": "9ee2423da049a8ab67793bf9e980752f",
".git/objects/3f/388556065e64cf70c7c8ba39b4c0af32d0f015": "616752a5d8da63e2fe59839f1be85dec",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/a1d2df3be179a4e0e9b99cf53c032dd7fa5cf3": "cec6fa7cbcf9c5aa37284c6c0ea44d64",
".git/objects/45/159595a4e4bd85ba6c50495e07d930dc10fd28": "51ea1c888334806d5664b90ee5440402",
".git/objects/49/ceccf3b448c2c3b03ae4d6c3a1ba58cc36be9f": "ff4bd7127e451c27162966d0c22b729f",
".git/objects/49/dd05fb6ef6d39b86a3870c829443a8df84c4f5": "8a6759abfafe595c0684c8704fe95c5b",
".git/objects/51/ce7830e3a31afde622c16587155869c7fcbe3d": "7d6b0bb61a93781efaa11257da8602a3",
".git/objects/53/72505b03486ff6be001e95a395be85a6723713": "ea3ce6a434a5445ca96f9608116b119b",
".git/objects/54/4fb0a7bc1dccd449e51cd9cb28dfc212f27f22": "4e5b2ab1371d0a2dbfe21ead7ff55667",
".git/objects/58/00590fe4bde2c226c64f199ee293e542116e0c": "09d434e3cb0e9e4465dec90a7761de6a",
".git/objects/58/a7f1e01742bbb12929155374284e6946c480bd": "03c735a95197341d4c9220a83e508a54",
".git/objects/59/1a0c7bfc78ec2fdf602a992d4b3315a5ae70e5": "b46be6bf4541ec619b974664e4ddbd54",
".git/objects/5a/70458b3a23b81947fe231b50da8279a7b0bf8b": "33d7971a4223bb54352573e72be8311b",
".git/objects/63/5f2a2746bbf41c9854d009fb725f33c7b9f44a": "426ef501e6a3e9dc4eb038737bcf9708",
".git/objects/64/55b0ea4292bd3246dda79b2ea44055ddecf723": "2b73ba9a7159eba1a26ba4c96cd651a4",
".git/objects/69/dede29d1265113a3ae10e2dbb030ef00c24b96": "1637632c3e6c311b90a9bf6bed611e41",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/f9ff3ed64aaf15e34dcdc481e3b1644f05c62e": "817cfc9377c0c8984fdad582e20a1363",
".git/objects/6f/65402fcd510023912e51658c4a1f63ee5a99ea": "e1c8b12d2f99e0be0598189a50ebba16",
".git/objects/71/3e7262e49f7d4f9105b02aa8d739d8a60c2a64": "df8d67c603fda10afae946cfd81f9bd1",
".git/objects/71/56ec6c8c4737d12ca3d05ecb8b79386cfd2e1b": "cb148aeddb4225f2f45cc30d56872bc3",
".git/objects/72/31080e77f8846c769f93e6cd50a77ec411bd7c": "e883c4fd752abce170bc78dd7603ab34",
".git/objects/74/1f031777296fe34e2798f4fc324221fc701d32": "ba84249b93fc363be335576975f92b9e",
".git/objects/78/6a35973d3e82829bc9cbb2620b1379a609be2f": "23d0748fe9f19ee6e217e38d395c571a",
".git/objects/79/2a6d46bffc94ecffb9e76a83c8a1c31551f9ad": "103cd81bd0d441c7002266e65e670ac9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bb787707aa054a7ef76a793acf7ad4af46d536": "5ef947b399e4cb57d37a251ed02a3321",
".git/objects/7a/086babe02b7e7a08f511fcac49cd3a8a2d0e88": "b67994084bbc66ae6c92c5426a60a12f",
".git/objects/7b/bdd52f4bf11e828aca8a397556187370a71880": "a423d829589aa0cea75f24c3e3f2e07c",
".git/objects/7b/dab5b73a001e1b3a589f3d70102851c1948a00": "6ecbc175fa81c1d30401093068bf9844",
".git/objects/80/1b7428e76fc2def5ef4ccb1704b327b3e8d112": "f46b7dd54a48da4d30c9170fb94e4e0b",
".git/objects/81/fbb65f4f50ff8ae1ccc490989940c878e8fb24": "c173814e2b576fbf87764b08de764ea0",
".git/objects/82/311467eeae12c5e8914e36d35faafc387d12ea": "eecaa5accf4d613b4a1dfafd66bbd39c",
".git/objects/83/33efefd929ad4e1d6e5f7e4ff013b7921c3eaa": "918fd2890c6b6bb4b82b11a1ca749225",
".git/objects/83/ecdcddf795db584e34c7f59b298682076041f4": "78d91c2fa66d5307055e6aa0e3f4ed7d",
".git/objects/84/ac5237261ccef1c43c1c4c9e3be59b895c74c7": "7059b29b4643087f1be5865e7cf3bed7",
".git/objects/84/e2404101079570a3ac5f12ea39fa3f59f8f9d6": "213ca7a3b15098e774a816e0706e6650",
".git/objects/87/87bd08cf5b6263b7f69e3a01a5cc4a0ca1dd75": "f6f938406a5f09681b6061453f35d3e0",
".git/objects/88/ca7fbf062b5012ab42cba0146369266264bce9": "fdcc09e41efce9c245417b46bd4b2fd3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/a9b4add78a33757e877d43a31296271453fbe0": "a9be13e328482546b7a9017a856b2478",
".git/objects/8f/84f8106a1ccffe212814cd4bf51647153fd03a": "1ce9474b8b3d6660ce6670f7ae6092c5",
".git/objects/92/4681dddfae37de8af6f457d3e8c3dc2e9736ee": "d76c861f6d5b3f7703611514ee241c30",
".git/objects/9b/3bc6f39bf6661b5527f8f43359b6d6766b1f29": "7b25953200efe33e0da42d6e0a791976",
".git/objects/9c/a4d29ceba1b27f858783e9864eb018d6380868": "98727533af770d515d942f3d4c5dfb9b",
".git/objects/9c/c7ad4af14e6b5f573819d82623fd88cd1094e1": "88d2e0ef493c999d056fbc7edde8c709",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/74d260e248c4fe15a9f168600625619df0ee5e": "cb339c6c7ce6020d3e451a01038e98bf",
".git/objects/a0/5e8e928b771e27a97a40e82228426d85e315e8": "7991eaadd0580070603dcc5a268427b0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/65cbac89ed93cc1262a23859f457a5860b0d1b": "72d28fd613e9e147998a01b6b2e4a133",
".git/objects/a2/e955e32e139ce35f82be4b796290167a859ca9": "ab3f5ac59351a90f2bf6ec6114e5e27d",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/2aa4fa26327c17d5ce5798557a5b87b0283415": "556ea9d41c61baab61627481b76bdd1c",
".git/objects/a9/666acad83e8deb8271ff4e7c2eedf735973c68": "c71d6d90d143895b222233696a44518b",
".git/objects/a9/9d03420ab1d433ec766dc386e442d13375a677": "1c7476328d850160cef66ecc2b328872",
".git/objects/ad/f5e9826d2de3f70dfc7873a88a45b4f24fdbac": "7bf8f7d767db89cfaf3c1b75e210a652",
".git/objects/ae/7c27fc6d8960264c2b272b5261a8a32801817e": "af6c4bbd8111c45dcc579a2a6482ec25",
".git/objects/b0/725b29440aecac8aeeb2fd05bdb1105e766668": "a0116fc2e3e8f22cce7da475287274a8",
".git/objects/b0/7dced1ab161ef335997bd7114c4aaf299a5804": "6b3e4795266a8e80863f9de3ad37418c",
".git/objects/b3/75fcd7be96ed10bcc3907e00baf91df0500f81": "fe545f378e7b29baca08ca0eb2b77afa",
".git/objects/b4/4ca8df4ff479c818dd90a7ef361e4e6575ca05": "86339938a947a09ff260b4c4ec4e10a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/87dea118de3eaa9b9dbe481c36b403da820a92": "7c4ddca1c7adeed8eec5a4c87743728e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/202bea93aa785c45e4d01104a31220ddc65bf3": "02b317e31902ceb942f6a3252eab17f7",
".git/objects/be/4f15b92dcd8099df651f20d7c1a7e37de90192": "4c2a0c11c4ca4b8e9f9db5b9544d4d3b",
".git/objects/bf/9651b7e036b8da8ca08e14cfcedb3cb31f28ce": "1bf33dc0c966b913c8684667304fbc7e",
".git/objects/c7/b3b2f8eb47ba58a07fb8c76ff5e719a2a23c51": "59bebc7eb54f2b2391463bd1328bf2ab",
".git/objects/cb/31bab7df07910bc0ee13ef8b5fc4a06c01fee1": "d7ac83452f41407333094119a211d77f",
".git/objects/cc/626cce9ea93d9c66ba5339781706a2c5eb3691": "2cd397b4b9629012ba40841cf06ad20a",
".git/objects/d0/4b3efb579147a73cf80f386843592b6029443c": "e087b98229721887ce161a5286e2834c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/21407a1e75623aa2106d66fb100c7f49c3840b": "3aa4438ffdcd004a83f15f2ed58248b3",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/006cda10f9c5a82dd2ff9e226c525534c367be": "6eaa3ae1a28dbf3cbd9ed7f9fb99828a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/20bf3c82eab80b754ffbeb54102b5fbcb0ba82": "6e9e66a341b3c59a9979797fd4162f18",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/b46b5594d95650e445ffe79c8f4e6481450d35": "e7a0e0f80ab4be73dbfa2baa5d3ac44a",
".git/objects/e8/ea710cdba3a950817d63c2377eca2fe3f4a741": "60af1e1b783759178a8e3acb53435e27",
".git/objects/e9/5927a27477fa5a06fa73c267b2d4faed1bf3ca": "35f4a6c9c71319fb1786a8900166dd58",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/09eadb3927d426c5193cb0e87ccdd08ee2c5bb": "5d1e443e2bdf2c8f2fcb13c87d2bcaa3",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/d9662f8b3d5feed66840dca1c29e8c0d0f3ceb": "59c3a0cc3f56ea3f52f8e74a9aa3bc5b",
".git/objects/f4/aa722e6acba138a6d07f4f4668bd2a9ea21df6": "e8088bbf30788148db04dfedea7463a5",
".git/objects/f5/1a2cdb497d4d5338f430d117ebea0629c7ac99": "fde102d3062d70491d9e76df928fb6c6",
".git/objects/f7/9bf38aada2756d306e50a69fad3e41eef54ca8": "63254e0e1d3faeb75224842a3cb09b68",
".git/objects/fc/c916b3271e4dde458125d7aa873297b6de50ca": "546282a2db0fa980f41556fcdfc81a4a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/a970659e8896188ef024f17dd57003ad9df9cf": "c4b7d01610929b41264453563433b377",
".git/objects/ff/c04b4dadb471c3989fd5f1f99b3a405db03e5c": "dbea2bd2c0e2bab92a5ca787fa899971",
".git/refs/heads/master": "9701137cda083201d25428ca37d5360e",
".git/refs/remotes/demo/master": "6bd52c7c216a7485cf37f0beaf17a5eb",
".git/refs/remotes/origin/master": "9701137cda083201d25428ca37d5360e",
"assets/AssetManifest.bin": "9efb4e2486eaca901339ab7b38649729",
"assets/AssetManifest.json": "30c7dbb87a24c31d2321e5346f3e911a",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/fonts/Kalameh-Medium.ttf": "c0e307b202c3d4c640c030369fad07c9",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/logo.png": "e40aa84aba4f34f676361931ac5c4a2a",
"assets/assets/images/logo_for.png": "ee1483b4b755240807f0b70e10830e1e",
"assets/assets/images/send.png": "91572e31999f1c83c006f5037db02be3",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/images/verified.png": "c0419910bd0031745f77e16670cf7fea",
"assets/assets/translations/en-US.json": "c3177eac4e7d116892371fecdc3b1ecc",
"assets/assets/translations/fa-IR.json": "5c145409681a7b5661c5aa4b36f37099",
"assets/FontManifest.json": "df2abca8938cd8c863a393180bd903b2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f10d568a996bf3a4065839a09c343b5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "4c9d551b2f568feeefa320e57a0d83fc",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "da6a55f713a56c43ddbea232df4926a5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "89e7a5192ac57cc4a99334142c80d546",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "e01b437a92dec3820e6eac1346e9383d",
"firebase-messaging-sw.js": "0646579b17827f36bed1dc89e44e5bd5",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "451bf02a50f5b57d3a2c80414f7853ab",
"icons/Icon-512.png": "61854dd35d9215fa54cd10ed8cef1e93",
"icons/Icon-maskable-192.png": "451bf02a50f5b57d3a2c80414f7853ab",
"icons/Icon-maskable-512.png": "61854dd35d9215fa54cd10ed8cef1e93",
"index.html": "f55eb655059fa8cc9aa7e23751d5b12f",
"/": "f55eb655059fa8cc9aa7e23751d5b12f",
"main.dart.js": "36106083ef8cb6f74053fe56013d5b7c",
"manifest.json": "cc9c26ff725df4e415a1e7c273e9c1d2",
"version.json": "0611ec9a45e391e766beb8ac47564deb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
