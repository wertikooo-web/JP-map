export type Dest={id:string;name:string;nameEn:string;lat:number;lng:number;region:string;regionEn:string;desc:string;descEn:string;months:number[];nights:number;tags:string[];price:number;tourists:number;hidden:boolean;logistics:string;logisticsEn:string};
const raw=`Tokyo~35.6762~139.6503~Kanto~city,food,culture
Kyoto~35.0116~135.7681~Kansai~culture,food,city
Osaka~34.6937~135.5023~Kansai~food,city
Nara~34.6851~135.8048~Kansai~culture,nature
Hakone~35.2324~139.1069~Kanto~onsen,nature,mountains
Kawaguchiko~35.4973~138.755~Yamanashi~nature,mountains
Nikko~36.7199~139.6982~Tochigi~culture,nature,mountains
Kamakura & Enoshima~35.3192~139.5467~Kanagawa~sea,culture,nature
Kanazawa~36.5613~136.6562~Hokuriku~culture,food,city
Takayama~36.1461~137.2522~Gifu~culture,mountains,food
Shirakawa-go~36.257~136.9066~Gifu~culture,mountains,nature
Matsumoto~36.238~137.972~Nagano~culture,mountains
Fukui~36.0641~136.2196~Hokuriku~culture,sea,unusual
Koyasan~34.2125~135.5861~Wakayama~culture,mountains,unusual
Kumano Kodo~33.8895~135.7754~Wakayama~nature,mountains,onsen,unusual
Hiroshima~34.3853~132.4553~Chugoku~culture,food,city
Miyajima~34.2959~132.3199~Hiroshima~culture,nature,sea
Naoshima~34.4597~133.9952~Setouchi~culture,sea,unusual
Iya Valley~33.875~133.835~Shikoku~mountains,nature,unusual
Matsuyama~33.8392~132.7657~Shikoku~onsen,culture,city
Beppu~33.2846~131.4912~Kyushu~onsen,unusual
Yufuin~33.2647~131.36~Kyushu~onsen,mountains,food
Aso~32.884~131.1064~Kyushu~nature,mountains,unusual
Kagoshima~31.5966~130.5571~Kyushu~food,nature,city
Yakushima~30.358~130.528~Kyushu~nature,mountains,unusual
Fukuoka~33.5904~130.4017~Kyushu~food,city,sea
Nagasaki~32.7503~129.8777~Kyushu~culture,city,sea
Sapporo~43.0618~141.3545~Hokkaido~food,city
Otaru~43.1907~140.9947~Hokkaido~food,sea,culture
Biei & Furano~43.5894~142.455~Hokkaido~nature,unusual
Shiretoko~44.1~145.05~Hokkaido~nature,sea,unusual
Aomori~40.8222~140.7474~Tohoku~food,culture,sea
Yamadera~38.3124~140.4347~Tohoku~culture,mountains,unusual
Ginzan Onsen~38.5693~140.5316~Tohoku~onsen,unusual
Tottori~35.5011~134.2351~Chugoku~nature,sea,unusual
Ine~35.6757~135.287~Kyoto Prefecture~sea,culture,unusual
Kiso Valley~35.589~137.595~Nagano~culture,nature,unusual
Izumo~35.367~132.754~Shimane~culture,sea,unusual
Okayama & Kurashiki~34.6551~133.9195~Chugoku~culture,city
Nagoya~35.1815~136.9066~Chubu~food,city,culture
Ise-Shima~34.455~136.725~Mie~culture,sea,unusual
Amami Oshima~28.3772~129.4937~Kagoshima~sea,nature,unusual
Okinawa~26.3344~127.8056~Okinawa~sea,culture,food
Sendai~38.2682~140.8694~Tohoku~city,food,culture
Matsushima~38.3733~141.0618~Tohoku~sea,nature,culture
Mount Zao~38.1436~140.4408~Tohoku~mountains,nature,onsen
Akita~39.72~140.1026~Tohoku~city,food,culture
Kakunodate~39.5965~140.5614~Tohoku~culture,unusual
Nyuto Onsen~39.8068~140.8336~Tohoku~onsen,mountains,unusual
Morioka~39.7036~141.1527~Tohoku~city,food
Hiraizumi~38.9867~141.1138~Tohoku~culture,nature
Geibikei Gorge~38.9894~141.254~Tohoku~nature,unusual
Oirase Gorge~40.5187~140.9825~Tohoku~nature,mountains
Lake Towada~40.4638~140.8774~Tohoku~nature,mountains
Hirosaki~40.6031~140.464~Tohoku~culture,city
Fukushima~37.7608~140.4747~Tohoku~city,food
Aizu-Wakamatsu~37.4948~139.9298~Tohoku~culture,city
Ouchi-juku~37.3347~139.8607~Tohoku~culture,unusual
Urabandai~37.6548~140.0872~Tohoku~nature,mountains
Hakodate~41.7687~140.7288~Hokkaido~city,food,sea
Noboribetsu~42.4128~141.1066~Hokkaido~onsen,nature,unusual
Lake Toya~42.6027~140.8524~Hokkaido~nature,onsen
Niseko~42.8048~140.6874~Hokkaido~mountains,nature
Asahikawa~43.7706~142.365~Hokkaido~city,food
Sounkyo~43.7272~142.9477~Hokkaido~mountains,onsen,nature
Daisetsuzan~43.6636~142.8542~Hokkaido~mountains,nature
Abashiri~44.0206~144.2735~Hokkaido~sea,unusual
Lake Akan~43.4542~144.0997~Hokkaido~nature,onsen
Kushiro~42.9849~144.3817~Hokkaido~city,nature,food
Shiretoko Five Lakes~44.1255~145.0823~Hokkaido~nature,unusual
Wakkanai~45.4157~141.6731~Hokkaido~sea,unusual
Rebun Island~45.303~141.0478~Hokkaido~sea,nature,unusual
Rishiri Island~45.178~141.242~Hokkaido~sea,mountains,unusual
Yokohama~35.4437~139.638~Kanto~city,food,sea
Kawagoe~35.9251~139.4858~Kanto~culture,city
Chichibu~35.9917~139.0854~Kanto~nature,culture
Takasaki~36.322~139.0033~Kanto~culture,city
Kusatsu Onsen~36.6228~138.5961~Kanto~onsen,mountains
Ikaho Onsen~36.497~138.917~Kanto~onsen,culture
Ashikaga Flower Park~36.3153~139.5221~Kanto~nature,unusual
Mito~36.3659~140.4714~Kanto~culture,city
Hitachi Seaside Park~36.4016~140.5913~Kanto~nature,unusual
Choshi~35.7347~140.8267~Kanto~sea,food,unusual
Mount Nokogiri~35.1605~139.8394~Kanto~mountains,culture
Sawara~35.8897~140.4991~Kanto~culture,unusual
Enoshima~35.299~139.4803~Kanto~sea,culture
Mount Takao~35.6252~139.2436~Kanto~mountains,nature
Niigata~37.9161~139.0364~Chubu~city,food,sea
Sado Island~38.0183~138.368~Chubu~sea,culture,unusual
Echigo-Tsumari~37.1275~138.755~Chubu~culture,unusual,nature
Nagano~36.6486~138.1948~Chubu~city,culture,mountains
Jigokudani Monkey Park~36.7327~138.462~Chubu~nature,mountains,unusual
Shibu Onsen~36.734~138.433~Chubu~onsen,culture
Karuizawa~36.3485~138.597~Chubu~nature,food
Tateyama Kurobe Alpine Route~36.5833~137.6~Chubu~mountains,nature,unusual
Toyama~36.6953~137.2113~Chubu~city,food,mountains
Kurobe Gorge~36.815~137.582~Chubu~nature,mountains
Gokayama~36.4265~136.9354~Chubu~culture,mountains,unusual
Gujo Hachiman~35.7485~136.9643~Chubu~culture,unusual
Gero Onsen~35.805~137.2441~Chubu~onsen,culture
Sekigahara~35.3655~136.4696~Chubu~culture,unusual
Inuyama~35.3786~136.9441~Chubu~culture,city
Tokoname~34.8867~136.8322~Chubu~culture,unusual
Hamamatsu~34.7108~137.7261~Chubu~city,food
Shizuoka~34.9756~138.3828~Chubu~city,food,nature
Miho no Matsubara~35.0008~138.5213~Chubu~sea,nature,culture
Izu Peninsula~34.9~138.95~Chubu~sea,onsen,nature
Shimoda~34.6795~138.9453~Chubu~sea,culture
Uji~34.8892~135.8077~Kansai~culture,food
Ohara Kyoto~35.119~135.834~Kansai~culture,nature
Kurama & Kibune~35.1215~135.7714~Kansai~mountains,culture,nature
Amanohashidate~35.5704~135.191~Kansai~sea,nature,culture
Maizuru~35.4748~135.385~Kansai~sea,unusual
Kobe~34.6901~135.1955~Kansai~city,food,sea
Arima Onsen~34.797~135.248~Kansai~onsen,culture
Himeji~34.8394~134.6939~Kansai~culture,city
Akashi~34.6431~134.9972~Kansai~food,sea
Wakayama~34.2305~135.1708~Kansai~city,food,sea
Shirahama Wakayama~33.6817~135.344~Kansai~sea,onsen
Nachi Falls~33.6686~135.89~Kansai~nature,culture,mountains
Kumano Hongu Taisha~33.8403~135.7731~Kansai~culture,nature
Yunomine Onsen~33.829~135.759~Kansai~onsen,unusual
Asuka~34.4712~135.8206~Kansai~culture,unusual
Mount Yoshino~34.3681~135.8579~Kansai~mountains,nature,culture
Omihachiman~35.1283~136.098~Kansai~culture,unusual
Hikone~35.2744~136.2596~Kansai~culture,city
Lake Biwa~35.25~136.1~Kansai~nature,sea
Kurashiki~34.585~133.7719~Chugoku~culture,city
Onomichi~34.4089~133.2049~Chugoku~sea,culture,unusual
Shimanami Kaido~34.256~133.181~Chugoku~sea,nature,unusual
Iwakuni~34.1666~132.2188~Chugoku~culture,nature
Yamaguchi~34.1785~131.4737~Chugoku~culture,city
Hagi~34.4081~131.399~Chugoku~culture,sea,unusual
Tsuwano~34.467~131.773~Chugoku~culture,unusual
Matsue~35.4681~133.0484~Chugoku~culture,city
Adachi Museum of Art~35.3808~133.1955~Chugoku~culture,unusual
Mount Daisen~35.3713~133.546~Chugoku~mountains,nature
Misasa Onsen~35.408~133.893~Chugoku~onsen,unusual
Takamatsu~34.3428~134.0466~Shikoku~city,food,culture
Ritsurin Garden~34.3294~134.0444~Shikoku~culture,nature
Shodoshima~34.486~134.185~Shikoku~sea,food,unusual
Teshima~34.481~134.075~Shikoku~culture,sea,unusual
Tokushima~34.0703~134.5548~Shikoku~city,culture
Naruto Whirlpools~34.2385~134.652~Shikoku~sea,nature,unusual
Kochi~33.5597~133.5311~Shikoku~city,food
Shimanto River~32.991~132.933~Shikoku~nature,unusual
Uwajima~33.2233~132.5606~Shikoku~food,sea,city
Uchiko~33.548~132.65~Shikoku~culture,unusual
Kitakyushu~33.8834~130.8751~Kyushu~city,food
Mojiko Retro~33.9458~130.961~Kyushu~culture,sea,unusual
Dazaifu~33.5215~130.5348~Kyushu~culture,food
Yanagawa~33.1631~130.4058~Kyushu~culture,unusual
Karatsu~33.4502~129.9681~Kyushu~culture,sea,food
Arita~33.2107~129.849~Kyushu~culture,unusual
Ureshino Onsen~33.096~129.984~Kyushu~onsen,food
Unzen~32.741~130.262~Kyushu~onsen,mountains,nature
Shimabara~32.7881~130.3708~Kyushu~culture,sea
Goto Islands~32.695~128.84~Kyushu~sea,culture,unusual
Kumamoto~32.8031~130.7079~Kyushu~city,culture,food
Kurokawa Onsen~33.078~131.142~Kyushu~onsen,mountains,unusual
Takachiho~32.7117~131.3078~Kyushu~nature,culture,unusual
Miyazaki~31.9077~131.4202~Kyushu~city,sea,food
Aoshima Miyazaki~31.8025~131.475~Kyushu~sea,culture
Kirishima~31.858~130.87~Kyushu~mountains,onsen,nature
Sakurajima~31.585~130.657~Kyushu~mountains,nature,unusual
Ibusuki~31.2528~130.6331~Kyushu~onsen,sea,unusual
Naha~26.2124~127.6809~Okinawa~city,food,culture
Shuri~26.217~127.7195~Okinawa~culture,city
Okinawa Churaumi~26.6943~127.8779~Okinawa~sea,unusual
Zamami Island~26.228~127.303~Okinawa~sea,nature
Tokashiki Island~26.197~127.364~Okinawa~sea,nature
Ishigaki Island~24.3448~124.1572~Okinawa~sea,food,nature
Taketomi Island~24.331~124.086~Okinawa~sea,culture,unusual
Iriomote Island~24.334~123.816~Okinawa~nature,sea,unusual
Miyakojima~24.8055~125.2811~Okinawa~sea,nature
Yonaguni~24.467~122.987~Okinawa~sea,unusual
Yanaka~35.7278~139.7665~Tokyo~culture,food,unusual
Shibamata~35.757~139.878~Tokyo~culture,unusual
Kagurazaka~35.7039~139.7341~Tokyo~food,culture
Koenji~35.7053~139.6497~Tokyo~culture,food,unusual
Kichijoji~35.7033~139.5798~Tokyo~food,city,nature
Shimokitazawa~35.6616~139.668~Tokyo~culture,food
Tsukishima~35.6649~139.7833~Tokyo~food,city
Fukagawa~35.6745~139.7967~Tokyo~culture,food
Okutama~35.809~139.096~Tokyo~nature,mountains
Ome~35.7879~139.2758~Tokyo~culture,nature
Izu Oshima~34.737~139.399~Tokyo~sea,nature,unusual
Chichijima Ogasawara~27.094~142.191~Tokyo~sea,nature,unusual
Echizen~35.903~136.168~Hokuriku~culture,sea,unusual
Eiheiji~36.055~136.356~Hokuriku~culture,nature
Tojinbo Cliffs~36.237~136.126~Hokuriku~sea,nature,unusual
Kaga Onsen~36.302~136.314~Hokuriku~onsen,culture
Noto Peninsula~37.3~136.9~Hokuriku~sea,culture,unusual
Wajima~37.3906~136.8992~Hokuriku~culture,sea,food
Chiran~31.378~130.441~Kyushu~culture,unusual
Kunisaki Peninsula~33.56~131.6~Kyushu~culture,nature,unusual
Usa Jingu~33.525~131.374~Kyushu~culture,unusual
Obuse~36.697~138.312~Chubu~culture,food
Togakushi~36.742~138.085~Chubu~culture,mountains,nature
Norikura~36.121~137.555~Chubu~mountains,nature,onsen`;
const slug=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const D:Dest[]=raw.split('\n').map(s=>{const[nameEn,lat,lng,regionEn,tag]=s.split('~'),tags=tag.split(','),hidden=tags.includes('unusual'),sea=tags.includes('sea'),mountains=tags.includes('mountains'),onsen=tags.includes('onsen');return{id:slug(nameEn),name:nameEn,nameEn,lat:+lat,lng:+lng,region:regionEn,regionEn,desc:onsen?'Онсэн, местный характер и спокойный ритм.':sea?'Море, местная жизнь и пейзажи вдали от классического маршрута.':mountains?'Горные пейзажи, прогулки и тихая сторона Японии.':'История, местная культура и детали, которые стоит смотреть без спешки.',descEn:onsen?nameEn+' combines hot springs and local character.':sea?nameEn+' offers coast, local life and scenery beyond the classic route.':mountains?nameEn+' offers mountain scenery and a quieter side of Japan.':nameEn+' is rich in history, local culture and atmosphere.',months:sea?[4,5,6,9,10]:mountains?[4,5,9,10,11]:[3,4,5,10,11],nights:sea&&hidden?2:1,tags,price:2,tourists:hidden?1:2,hidden,logistics:hidden?'Проверяй транспорт заранее; для удалённых точек оставляй запас времени.':'Удобно включать как отдельную остановку или поездку из ближайшего крупного города.',logisticsEn:hidden?'Check transport ahead and allow extra time for remote stops.':'Works well as a stop or day trip from the nearest major city.'}});