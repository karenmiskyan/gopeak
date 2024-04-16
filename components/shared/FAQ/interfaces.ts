export interface FAQItemData {
  title: string;
  content: string;
  value: any;
}

export interface IDialogFAQ {
  question: string;
  answer: string;
}

export interface IAllFaqCategories {
  faqs: IDialogFAQ[];
  faqSelector: string;
}
