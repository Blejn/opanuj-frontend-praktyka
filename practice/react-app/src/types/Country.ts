export interface Country {
    capital: string[];
    currencies: Record<string, CurrencyProps>;
    flag: string;
    flags: FlagProps;
    languages: Record<string, string>;
    name: NameProps;
    population: number;
  }
  interface CurrencyProps {
    name: string;
    symbol: string;
  }
  interface FlagProps {
    png: string;
    svg: string;
    alt: string;
  }
  interface NameProps {
    common: string;
    nativeName: Record<string, NativeNameProps>;
    official: string;
  }
  interface NativeNameProps {
    common: string;
    official: string;
  }