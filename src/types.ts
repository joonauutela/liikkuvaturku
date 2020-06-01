export interface Location {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    exercise_machines: string;
}

export interface Image {
    id: string;
    destination_id: string;
    image_url: string;
}

export interface Map {
    latitude: number;
    longitude: number;
    zoom: number;
}

export interface Machine {
    id: string;
    name: string;
    content: string;
    repetitions: string;
    sets: string;
}

export interface RootState {
    selectedLocation: Location;
    locations: Location[];
    images: Image[];
    map: Map;
    machines: Machine[];
}

export interface ParamTypes {
    id: string;
}