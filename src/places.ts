type ImaxType = "imax-digital" | "imax-laser" | "imax-gt";

type DolbyType = "dolby-cinema" | "dolby-atmos";

type Imax = {
  name: "imax";
  type: ImaxType;
};

type Dolby = {
  name: "dolby";
  type: DolbyType;
};
type OtherScreen = {
  name: "other";
  type: string;
};

type SpecType = Imax | Dolby | OtherScreen;

export type TheaterPlace = {
  label: string;
  url: string;
  specs: SpecType[];
  position: {
    lat: number;
    lng: number;
  };
};

const Toho = [
  {
    label: "TOHOシネマズ すすきの",
    url: "https://www.tohotheater.jp/theater/089/institution.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
      {
        name: "other",
        type: "goon",
      },
      {
        name: "other",
        type: "tcx",
      },
    ],
    position: { lat: 43.0551326, lng: 141.3501261 },
  },
  {
    label: "TOHOシネマズ 仙台",
    url: "https://www.tohotheater.jp/theater/078/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
      {
        name: "dolby",
        type: "dolby-atmos",
      },
      {
        name: "other",
        type: "tcx",
      },
    ],
    position: { lat: 38.2588879, lng: 140.876616 },
  },
  {
    label: "TOHOシネマズ 日比谷",
    url: "https://www.tohotheater.jp/theater/081/institution05.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
      {
        name: "dolby",
        type: "dolby-atmos",
      },
      {
        name: "other",
        type: "tcx",
      },
    ],
    position: { lat: 35.6733923, lng: 139.7571917 },
  },
  {
    label: "TOHOシネマズ 新宿",
    url: "https://www.tohotheater.jp/theater/076/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
      {
        name: "dolby",
        type: "dolby-atmos",
      },
      {
        name: "other",
        type: "tcx",
      },
    ],
    position: { lat: 35.6951484, lng: 139.699385 },
  },
  {
    label: "TOHOシネマズ 立川立飛",
    url: "https://www.tohotheater.jp/theater/085/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
      {
        name: "other",
        type: "tcx",
      },
      {
        name: "other",
        type: "goon",
      },
    ],
    position: { lat: 35.7125205, lng: 139.4137252 },
  },
  {
    label: "TOHOシネマズ ららぽーと横浜",
    url: "https://www.tohotheater.jp/theater/036/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.5162796, lng: 139.563999 },
  },
  {
    label: "TOHOシネマズ 二条",
    url: "https://www.tohotheater.jp/theater/023/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.008193, lng: 135.738127 },
  },
  {
    label: "TOHOシネマズ なんば 本館・別館",
    url: "https://www.tohotheater.jp/theater/032/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 34.6657116, lng: 135.501021 },
  },
  {
    label: "TOHOシネマズ 流山おおたかの森",
    url: "https://www.tohotheater.jp/theater/035/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.8711334, lng: 139.9237868 },
  },
  {
    label: "TOHOシネマズ 西宮OS",
    url: "https://www.tohotheater.jp/theater/064/institution.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 34.74373, lng: 135.359382 },
  },
  {
    label: "TOHOシネマズ ららぽーと門真",
    url: "https://www.tohotheater.jp/theater/088/institution.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
      {
        name: "other",
        type: "goon",
      },
      {
        name: "other",
        type: "tcx",
      },
    ],
    position: { lat: 34.735614, lng: 135.574359 },
  },
] satisfies TheaterPlace[];

const Cinemas109 = [
  {
    label: "109シネマズ大阪エキスポシティ",
    url: "https://109cinemas.net/osaka-expocity/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-gt",
      },
    ],
    position: { lat: 34.8055774, lng: 135.5318036 },
  },
  {
    label: "109シネマズ菖蒲",
    url: "https://109cinemas.net/shobu/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 36.0759186, lng: 139.6068538 },
  },
  {
    label: "109シネマズ木場",
    url: "https://109cinemas.net/kiba/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.6667616, lng: 139.8014873 },
  },
  {
    label: "109シネマズ二子玉川",
    url: "https://109cinemas.net/futakotamagawa/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.611111, lng: 139.626051 },
  },
  {
    label: "109シネマズグランベリーパーク",
    url: "https://109cinemas.net/grandberrypark/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.5100404, lng: 139.4675819 },
  },
  {
    label: "109シネマズ川崎",
    url: "https://109cinemas.net/kawasaki/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.5330632, lng: 139.6942616 },
  },
  {
    label: "109シネマズ湘南",
    url: "https://109cinemas.net/shonan/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.3393532, lng: 139.4437111 },
  },
  {
    label: "109シネマズ名古屋",
    url: "https://109cinemas.net/nagoya/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.162646, lng: 136.8822268 },
  },
  {
    label: "109シネマズ箕面",
    url: "https://109cinemas.net/minoh/establishment.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 34.831675, lng: 135.484977 },
  },
] satisfies TheaterPlace[];

const CinemaSunshine = [
  {
    label: "グランドシネマサンシャイン 池袋",
    url: "https://www.cinemasunshine.co.jp/theater/gdcs/floor-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-gt",
      },
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 35.7309766, lng: 139.7138181 },
  },
  {
    label: "シネマサンシャイン土浦",
    url: "https://www.cinemasunshine.co.jp/theater/tsuchiura/floor-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 36.079371, lng: 140.1798994 },
  },
  {
    label: "シネマサンシャインららぽーと沼津",
    url: "https://www.cinemasunshine.co.jp/theater/lalaportnumazu/floor-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.1183289, lng: 138.8378756 },
  },
  {
    label: "シネマサンシャイン大和郡山",
    url: "https://www.cinemasunshine.co.jp/theater/yamatokoriyama/floor-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 34.6496194, lng: 135.7999339 },
  },
  {
    label: "シネマサンシャイン衣山",
    url: "https://www.cinemasunshine.co.jp/theater/kinuyama/floor-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 33.8540074, lng: 132.743994 },
  },
  {
    label: "シネマサンシャイン飯塚",
    url: "https://www.cinemasunshine.co.jp/theater/iizuka/floor-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
      { name: "dolby", type: "dolby-atmos" },
    ],
    position: { lat: 33.6283678, lng: 130.6823366 },
  },
] satisfies TheaterPlace[];

const AeonCinema = [
  {
    label: "イオンシネマ 越谷レイクタウン",
    url: "https://www.aeoncinema.com/theater/access/81508_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.8782992, lng: 139.8258387 },
  },
  {
    label: "イオンシネマ 新利府",
    url: "https://www.aeoncinema.com/theater/access/81090_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 38.3251233, lng: 140.9688606 },
  },
  {
    label: "イオンシネマ シアタス調布",
    url: "https://www.aeoncinema.com/theater/access/81084_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.6524623, lng: 139.5419677 },
  },
  {
    label: "イオンシネマ 市川妙典",
    url: "https://www.aeoncinema.com/theater/access/81026_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.6925387, lng: 139.9267618 },
  },
  {
    label: "イオンシネマ 幕張新都心",
    url: "https://www.aeoncinema.com/theater/access/81070_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.6550032, lng: 140.0299432 },
  },
  {
    label: "イオンシネマ 新潟南",
    url: "https://www.aeoncinema.com/theater/access/81061_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 37.8772644, lng: 139.0827839 },
  },
  {
    label: "イオンシネマ となみ",
    url: "https://www.aeoncinema.com/theater/access/81093_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 36.6415985, lng: 136.9479556 },
  },
  {
    label: "イオンシネマ 白山",
    url: "https://www.aeoncinema.com/theater/access/81092_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 36.5434313, lng: 136.5806614 },
  },
  {
    label: "イオンシネマ 各務原",
    url: "https://www.aeoncinema.com/theater/access/81060_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.3922249, lng: 136.821233 },
  },
  {
    label: "イオンシネマ 大高",
    url: "https://www.aeoncinema.com/theater/access/81067_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.0530248, lng: 136.948559 },
  },
  {
    label: "イオンシネマ 名古屋茶屋",
    url: "https://www.aeoncinema.com/theater/access/81073_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 35.1041244, lng: 136.8260025 },
  },
  {
    label: "イオンシネマ 京都桂川",
    url: "https://www.aeoncinema.com/theater/access/81074_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 34.9621493, lng: 135.7070344 },
  },
  {
    label: "イオンシネマ 四條畷",
    url: "https://www.aeoncinema.com/theater/access/81077_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 34.7455982, lng: 135.6276095 },
  },
  {
    label: "イオンシネマ シアタス心斎橋",
    url: "https://www.aeoncinema.com/theater/access/81089_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 34.6738473, lng: 135.5009574 },
  },
  {
    label: "イオンシネマ 和歌山",
    url: "https://www.aeoncinema.com/theater/access/81071_facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-atmos",
      },
    ],
    position: { lat: 34.2764871, lng: 135.1488069 },
  },
  {
    label: "イオンシネマ 岡山",
    url: "https://www.aeoncinema.com/theater/access/81075_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 34.6618117, lng: 133.9182647 },
  },
  {
    label: "イオンシネマ 福岡",
    url: "https://www.aeoncinema.com/theater/access/81047_facility.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 33.594248, lng: 130.481276 },
  },
] satisfies TheaterPlace[];

const UnitedCinema = [
  {
    label: "ユナイテッド・シネマ 岸和田",
    url: "https://www.unitedcinemas.jp/kishiwada/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 34.4672823, lng: 135.3704295 },
  },
  {
    label: "ユナイテッド・シネマ 豊橋18",
    url: "https://www.unitedcinemas.jp/toyohashi/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 34.7441622, lng: 137.3691138 },
  },
  {
    label: "ユナイテッド・シネマ 札幌",
    url: "https://www.unitedcinemas.jp/sapporo/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 43.064133, lng: 141.3607852 },
  },
  {
    label: "ユナイテッド・シネマ 浦和",
    url: "https://www.unitedcinemas.jp/urawa/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.8587143, lng: 139.6566056 },
  },
  {
    label: "ユナイテッド・シネマ テラスモール松戸",
    url: "https://www.unitedcinemas.jp/matsudo/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.818273, lng: 139.9310702 },
  },
  {
    label: "ユナイテッド・シネマ としまえん",
    url: "https://www.unitedcinemas.jp/toshimaen/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 35.7423973, lng: 139.645984 },
  },
  {
    label: "ユナイテッド・シネマ 金沢",
    url: "https://www.unitedcinemas.jp/kanazawa/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 36.5896395, lng: 136.6561166 },
  },
  {
    label: "ユナイテッドシネマ キャナルシティ13",
    url: "https://www.unitedcinemas.jp/canalcity/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 33.5906862, lng: 130.407459 },
  },
  {
    label: "ユナイテッドシネマ PARCO CITY 浦添",
    url: "https://www.unitedcinemas.jp/urasoe/about_facilities.html",
    specs: [
      {
        name: "imax",
        type: "imax-laser",
      },
    ],
    position: { lat: 26.2637022, lng: 127.6971891 },
  },
] satisfies TheaterPlace[];

const TJoy = [
  {
    label: "T・ジョイ横浜",
    url: "https://tjoy.jp/t-joy_yokohama/facilities",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 35.4667828, lng: 139.6197513 },
  },
  {
    label: "横浜ブルク13",
    url: "https://tjoy.jp/yokohama_burg13/facilities",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.452068, lng: 139.6306632 },
  },
  {
    label: "T・ジョイ梅田",
    url: "https://tjoy.jp/t-joy_umeda/facilities",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 34.7006768, lng: 135.4984927 },
  },
  {
    label: "Ｔ・ジョイ 博多",
    url: "https://tjoy.jp/t-joy_hakata/facilities",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 33.58981, lng: 130.4204315 },
  },
  {
    label: "新宿バルト9",
    url: "https://tjoy.jp/shinjuku_wald9/facilities",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 35.6901521, lng: 139.7033176 },
  },
  {
    label: "T・ジョイ PRINCE 品川",
    url: "https://tjoy.jp/tjoy-prince-shinagawa/facilities",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.6280946, lng: 139.7332093 },
  },
  {
    label: "広島バルト11",
    url: "https://tjoy.jp/hiroshima_wald11/facilities",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 34.394397, lng: 132.4996548 },
  },
  {
    label: "鹿児島ミッテ10",
    url: "https://tjoy.jp/kagoshima_mitte10/facilities",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 31.5849504, lng: 130.5429652 },
  },
] satisfies TheaterPlace[];

const OtherTheaters = [
  {
    label: "ミッドランドスクエア シネマ",
    url: "http://www.midland-sq-cinema.jp/theater/",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 35.169889, lng: 136.8804394 },
  },
  {
    label: "丸の内ピカデリー",
    url: "https://www.smt-cinema.com/site/marunouchi/facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 35.6734963, lng: 139.7606859 },
  },
  {
    label: "MOVIXさいたま",
    url: "https://www.smt-cinema.com/site/saitama/facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 35.8948441, lng: 139.6336403 },
  },
  {
    label: "MOVIX 京都",
    url: "https://www.smt-cinema.com/site/kyoto/facility.html",
    specs: [
      {
        name: "dolby",
        type: "dolby-cinema",
      },
    ],
    position: { lat: 35.0082553, lng: 135.7651417 },
  },
  {
    label: "福山エーガル８シネマズ",
    url: "https://www.furec.jp/theater/",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 34.544233, lng: 133.357454 },
  },
  {
    label: "成田HUMAXシネマズ",
    url: "https://www.humax-cinema.co.jp/narita/info/",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.7935865, lng: 140.3190953 },
  },
  {
    label: "USシネマ ちはら台",
    url: "https://uscinemas.jp/theater-guide/",
    specs: [
      {
        name: "imax",
        type: "imax-digital",
      },
    ],
    position: { lat: 35.5271569, lng: 140.1694037 },
  },
] satisfies TheaterPlace[];

const places: TheaterPlace[] = [
  ...Toho,
  ...Cinemas109,
  ...CinemaSunshine,
  ...AeonCinema,
  ...UnitedCinema,
  ...TJoy,
  ...OtherTheaters,
];

export default places;
