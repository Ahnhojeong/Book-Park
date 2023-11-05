export interface IBookInfo {
  no: number;
  ranking: string;
  bookname: string;
  authors: string;
  publisher: string;
  publication_year: string;
  isbn13: string;
  addition_symbol: string;
  vol: string;
  class_no: string;
  class_nm: string;
  loan_count: string;
  bookImageURL: string;
  bookDtlUrl: string;
}

export interface IBookItem {
  doc: IBookInfo;
}

export interface IBookList {
  docs: IBookItem[];
}

export interface IBookDetailItem {
  description: string;
  publication_date: string;
  publication_year: string;
}

export interface IBookDetail extends IBookInfo, IBookDetailItem {}

export interface ILinkBookList {
  title: string;
  alternativeTitle: null | string;
  creator: string;
  regDate: string;
  collectionDb: string;
  subjectCategory: null | string;
  subjectKeyword: null | string;
  extent: string;
  description: string;
  spatialCoverage: null | string;
  temporal: null | string;
  person: null | string;
  language: string;
  sourceTitle: null | string;
  charge: string;
  referenceIdentifier: string;
  rights: string;
  copyrightOthers: null | string;
  url: string;
  subDescription: string;
  issuedDate: string;
  contributor: null | string;
}

export interface IRankBookItem {
  no: number;
  difference: number;
  baseWeekRank: number;
  pastWeekRank: number;
  bookname: string;
  authors: string;
  publisher: string;
  publication_year: string;
  isbn13: string;
  addition_symbol: string;
  vol: string;
  class_no: string;
  class_nm: string;
  bookImageURL: string;
  bookDtlUrl: string;
}

export interface IRankBook {
  doc: IRankBookItem;
}

export interface IRankBookList {
  result: {
    date: string;
    docs: IRankBook[];
  };
}
