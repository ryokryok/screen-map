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

const Toho = [{
  label: "TOHOシネマズ すすきの",
  url: "https://www.tohotheater.jp/theater/089/institution.html",
  specs: [{
    name: "dolby",
    type: "dolby-cinema",
  }, {
    name: "other",
    type: "goon",
  }, {
    name: "other",
    type: "tcx",
  }],
  position: { lat: 43.0551326, lng: 141.3501207 },
}, {
  label: "TOHOシネマズ 仙台",
  url: "https://www.tohotheater.jp/theater/078/institution.html",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }, {
    name: "dolby",
    type: "dolby-atmos",
  }, {
    name: "other",
    type: "tcx",
  }],
  position: { lat: 38.2588879, lng: 140.8766106 },
}, {
  label: "TOHOシネマズ 日比谷",
  url: "https://www.tohotheater.jp/theater/081/institution05.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }, {
    name: "dolby",
    type: "dolby-atmos",
  }, {
    name: "other",
    type: "tcx",
  }],
  position: { lat: 35.6737436, lng: 139.7546701 },
}, {
  label: "TOHOシネマズ 新宿",
  url: "https://www.tohotheater.jp/theater/076/institution.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }, {
    name: "dolby",
    type: "dolby-atmos",
  }, {
    name: "other",
    type: "tcx",
  }],
  position: { lat: 35.6951484, lng: 139.699385 },
}, {
  label: "TOHOシネマズ 立川立飛",
  url: "https://www.tohotheater.jp/theater/085/institution.html",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }, {
    name: "other",
    type: "tcx",
  }, {
    name: "other",
    type: "goon",
  }],
  position: { lat: 35.7125205, lng: 139.4137252 },
}, {
  label: "TOHOシネマズ ららぽーと横浜",
  url: "https://www.tohotheater.jp/theater/036/institution.html",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }],
  position: { lat: 35.5162796, lng: 139.563999 },
}, {
  label: "TOHOシネマズ 二条",
  url: "https://www.tohotheater.jp/theater/023/institution.html",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }],
  position: { lat: 35.01027, lng: 135.7386423 },
}, {
  label: "TOHOシネマズ なんば 本館・別館",
  url: "https://www.tohotheater.jp/theater/032/institution.html",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }],
  position: { lat: 34.6657116, lng: 135.501021 },
}, {
  label: "TOHOシネマズ 流山おおたかの森",
  url: "https://www.tohotheater.jp/theater/035/institution.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.8711334, lng: 139.9237868 },
}, {
  label: "TOHOシネマズ 西宮ＯＳ",
  url: "https://www.tohotheater.jp/theater/064/institution.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 34.7436807, lng: 135.3582608 },
}, {
  label: "TOHOシネマズ ららぽーと門真",
  url: "https://www.tohotheater.jp/theater/088/institution.html",
  specs: [{
    name: "dolby",
    type: "dolby-cinema",
  }, {
    name: "other",
    type: "goon",
  }, {
    name: "other",
    type: "tcx",
  }],
  position: { lat: 34.730729, lng: 135.5815636 },
}] satisfies TheaterPlace[];

const Cinemas109 = [{
  label: "109シネマズ大阪エキスポシティ",
  url: "https://109cinemas.net/osaka-expocity/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-gt",
  }],
  position: { lat: 34.8055774, lng: 135.5318036 },
}, {
  label: "109シネマズ菖蒲",
  url: "https://109cinemas.net/shobu/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 36.0759186, lng: 139.6068538 },
}, {
  label: "109シネマズ木場",
  url: "https://109cinemas.net/kiba/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.6667616, lng: 139.8014873 },
}, {
  label: "109シネマズ二子玉川",
  url: "https://109cinemas.net/futakotamagawa/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.6110776, lng: 139.6270923 },
}, {
  label: "109シネマズグランベリーパーク",
  url: "https://109cinemas.net/grandberrypark/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.5100404, lng: 139.4675819 },
}, {
  label: "109シネマズ川崎",
  url: "https://109cinemas.net/kawasaki/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.5330632, lng: 139.6942616 },
}, {
  label: "109シネマズ湘南",
  url: "https://109cinemas.net/shonan/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.3393532, lng: 139.4437111 },
}, {
  label: "109シネマズ名古屋",
  url: "https://109cinemas.net/nagoya/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.162646, lng: 136.8822268 },
}, {
  label: "109シネマズ箕面",
  url: "https://109cinemas.net/minoh/establishment.html",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }],
  position: { lat: 34.8320917, lng: 135.4855504 },
}] satisfies TheaterPlace[];

const CinemaSunshine = [{
  label: "グランドシネマサンシャイン 池袋",
  url: "https://www.cinemasunshine.co.jp/theater/gdcs/floor-guide/",
  specs: [{
    name: "imax",
    type: "imax-gt",
  }, {
    name: "dolby",
    type: "dolby-atmos",
  }],
  position: { lat: 35.7309766, lng: 139.7138181 },
}, {
  label: "シネマサンシャイン土浦",
  url: "https://www.cinemasunshine.co.jp/theater/tsuchiura/floor-guide/",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 36.079371, lng: 140.1798994 },
}, {
  label: "シネマサンシャインららぽーと沼津",
  url: "https://www.cinemasunshine.co.jp/theater/lalaportnumazu/floor-guide/",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 35.1183289, lng: 138.8378756 },
}, {
  label: "シネマサンシャイン大和郡山",
  url: "https://www.cinemasunshine.co.jp/theater/yamatokoriyama/floor-guide/",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }],
  position: { lat: 34.6496194, lng: 135.7999339 },
}, {
  label: "シネマサンシャイン衣山",
  url: "https://www.cinemasunshine.co.jp/theater/kinuyama/floor-guide/",
  specs: [{
    name: "imax",
    type: "imax-digital",
  }],
  position: { lat: 33.8540074, lng: 132.743994 },
}, {
  label: "シネマサンシャイン飯塚",
  url: "https://www.cinemasunshine.co.jp/theater/iizuka/floor-guide/",
  specs: [{
    name: "imax",
    type: "imax-laser",
  }, { name: "dolby", type: "dolby-atmos" }],
  position: { lat: 33.6297828, lng: 130.6829118 },
}] satisfies TheaterPlace[];

const places: TheaterPlace[] = [
  ...Toho,
  ...Cinemas109,
  ...CinemaSunshine,
];

export default places;
