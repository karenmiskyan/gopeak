export interface IFooterContactsColumn {
  name: string;
  phone_number: string;
}

export interface IFooterLinkColumnItem {
  name: string;
  href: string;
}

export interface IFooterLinkColumn {
  name: string;
  items: IFooterLinkColumnItem[];
}
