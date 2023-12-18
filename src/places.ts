type ImaxType = "digital" | "laser" | "gt";

type DolbyType = "cinema" | "atmos";

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

type TheaterPlace = {
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
    type: "cinema",
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
    type: "digital",
  }, {
    name: "dolby",
    type: "atmos",
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
    type: "laser",
  }, {
    name: "dolby",
    type: "atmos",
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
    type: "laser",
  }, {
    name: "dolby",
    type: "atmos",
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
    type: "digital",
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
    type: "digital",
  }],
  position: { lat: 35.5162796, lng: 139.563999 },
}, {
  label: "TOHOシネマズ 二条",
  url: "https://www.tohotheater.jp/theater/023/institution.html",
  specs: [{
    name: "imax",
    type: "digital",
  }],
  position: { lat: 35.01027, lng: 135.7386423 },
}, {
  label: "TOHOシネマズ なんば 本館・別館",
  url: "https://www.tohotheater.jp/theater/032/institution.html",
  specs: [{
    name: "imax",
    type: "digital",
  }],
  position: { lat: 34.6657116, lng: 135.501021 },
}, {
  label: "TOHOシネマズ 流山おおたかの森",
  url: "https://www.tohotheater.jp/theater/035/institution.html",
  specs: [{
    name: "imax",
    type: "laser",
  }],
  position: { lat: 35.8711334, lng: 139.9237868 },
}, {
  label: "TOHOシネマズ 西宮ＯＳ",
  url: "https://www.tohotheater.jp/theater/064/institution.html",
  specs: [{
    name: "imax",
    type: "laser",
  }],
  position: { lat: 34.7436807, lng: 135.3582608 },
}, {
  label: "TOHOシネマズ ららぽーと門真",
  url: "https://www.tohotheater.jp/theater/088/institution.html",
  specs: [{
    name: "dolby",
    type: "cinema",
  }, {
    name: "other",
    type: "goon",
  }, {
    name: "other",
    type: "tcx",
  }],
  position: { lat: 34.730729, lng: 135.5815636 },
}] satisfies TheaterPlace[];

export const places: TheaterPlace[] = [...Toho];
