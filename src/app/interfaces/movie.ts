export interface Movie {
    id:               number;
    title?:           string;
    description?:     string;
    rating?:          number;
    duration?:        string;
    genre?:           string[];
    released_date?:   string;
    trailer_link?:    string;
    thumbnail?:       string;
    in_watch_list?:   boolean;
}
