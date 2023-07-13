export interface MyContextData {
  showArr: ShowArr;
  setShowArr: (value: ShowArr) => void;
  limitTab: number;
  setLimitTab: (value: number) => void;
  skipTab: number;
  setSkipTab: (value: number) => void;
  totalTab: number;
  setTotalTab: (value: number) => void;
  idDetail: number;
  setIdDetail: (value: number) => void;
  searchResult: number;
  setSearchResult: (value: number) => void;
  searching: boolean;
  setSearching: (value: boolean) => void;
  allCheckbox: boolean;
  setAllCheckbox: (value: boolean) => void;
}

export type SidebarArr = {
  logo: (className: string) => JSX.Element;
  name: string;
}[];

export type OptionSeenArr = {
  path: string;
  name: string;
}[];

export type LoginData = {
  username: string;
  password: string;
};

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'non-binary';
  image: string;
  token: string;
}

export interface Account {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}

export interface EditForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  today: string;
}

export type Accounts = Account[];

export type AccountLimit = {
  users: Accounts;
  total: number;
  skip: number;
  limit: number;
};

export type ShowArr = {
  sidebar: boolean;
  detail: boolean;
  filter: boolean;
  update: boolean;
};

export type EditTodo = {
  text: string;
  complete: boolean;
  author: string;
};

export type Todo = {
  _id: string;
  text: string;
  complete: boolean;
  author: string;
  createdDate: string;
};

export type TodosList = Todo[];

export type AccountSlice = {
  showUpdate: boolean;
  showDetail: boolean;
  showSidebar: boolean;
  showFilter: boolean;
  totalTab: number;
  limitTab: number;
  skipTab: number;
  idDetail: number;
  searchResults: number;
  searching: boolean;
  allCheckbox: boolean;
};
