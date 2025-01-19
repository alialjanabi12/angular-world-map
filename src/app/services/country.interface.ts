export interface CountryData {
  id: string;
  iso2Code: string;
  name: string;
  region: {
    id: string;
    iso2code: string;
    value: string;
  };
  adminregion: {
    id: string;
    iso2code: string;
    value: string;
  };
  incomeLevel: {
    id: string;
    iso2code: string;
    value: string;
  };
  lendingType: {
    id: string;
    iso2code: string;
    value: string;
  };
  capitalCity: string;
  longitude: string;
  latitude: string;
}

export interface CountryMeta {
  page: number | string;
  pages: number | string;
  per_page: number | string;
  total: number | string;
}

export type CountryResponse = [meta: CountryMeta, countries: CountryData[]];
