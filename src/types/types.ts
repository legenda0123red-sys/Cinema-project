export interface Movie {
    id: number;
    title: string;
    description: string;
    poster: string;
    genre: string[];
    duration: number;
    rating: number;
    releaseDate: string;
    country: string;
    age: string;
}

export interface Message{
    text: string,
    color: string
}

export interface RegistrForm{
    id?: number,
    name: string,
    email: string,
    password: string
    phone: string
}

export interface MovieCardProps {
    movie: Movie
}