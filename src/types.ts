export interface Location {
    id: string;
    latitude: number;
    longitude: number;
    address: string;
    exercise_machines: string;
}

export interface Image {
    id: string;
    location_id: string;
    image_url: string;
}

export interface RootState {
    selectedLocation: Location;
    images: Image[];
}

export interface ParamTypes {
    id: string;
}