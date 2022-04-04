export interface SmallCardContent {
    distance: string;
    location: string;
    image: string;
}

export interface MediumCardContent {
    image: string;
    title: string;
}

export interface LargeCardContent {
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

export interface SearchContent {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: number;
    lat: number;
}
