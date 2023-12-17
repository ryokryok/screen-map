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

const Toho: TheaterPlace[] = [{
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
}];

export const places: TheaterPlace[] = [...Toho];
