import { PRICING_FAQ } from "./helpers/config";
/// <reference types="react-scripts" />

interface HeaderNavElement {
  id: string;
  name: string;
  link: string;
  list?: string[];
}

interface FooterMainLinks {
  [key: string]: string[];
}

interface FooterMainIcons {
  [key: string]: string;
}

interface FooterGeneralLink {
  [key: string]: {
    [key: string]: string[];
  };
}

interface PricingFaq {
  [key: string]: string[];
}

interface TableInfo {
  [key: string]: {
    price: {
      mo?: number;
      yr?: number;
    };
    img?: string;
    textColor?: string;
    cardColor: string;
    cardText: string;
    info: {
      [key: string]: {
        main: string;
        [key: string]: {
          dataTitle: string;
          main: string;
          text?: string;
        };
      };
    };
  };
}

interface TableDropRow {
  [key: string]: string[]
}

interface TableConfig {
  
}
