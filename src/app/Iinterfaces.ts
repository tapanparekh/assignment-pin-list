export interface IRegion {
    id: string;
    name: string;
}

export interface ICountry {
    id: string;
    name: string;
    regionId: string;
}

export interface ICustomer {
    id: string;
    title: string;
    email: string;
    region: IRegion;
    country: ICountry;
}

export interface IPin {
    title: string;
    image: string;
    collaborators: ICustomer[];
    privacy: boolean;
}

export interface IPinForm {
    title: string;
    image: string;
    collaborators: string[];
    privacy: boolean;
}

export interface ICustomerForm {
    title: string;
    email: string;
    region: string;
    country: string;
}