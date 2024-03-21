import type {INavigationLink} from "./types/navigation-link.type.ts";

export const SITE_TITLE = "TIL-Conf";

export const NAVIGATION_LINKS: Array<INavigationLink> = [
    // {title: 'Agenda', href: '/agenda'},
    // {title: 'Speakers', href: '/speakers'},
    // {title: 'Sponsors', href: '/sponsors'},
    // {title: 'About', href: '/about'},
    {title: 'CFP', href: 'https://docs.google.com/forms/d/1XyoW2doQvHg51Vh29iEgE6Q6RTX8zbmxJfOg9zAZQmM/viewform?edit_requested=true'},
    {title: 'CoC', href: '/coc'},
    // {title: 'Venue', href: '/venue'},
];

export const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/Thisis_Learning',
    facebook: '',
    // TODO : add logo for linkedin: 'https://linkedin.com/company/eventedge',
    // TODO : add logo for linkedin: instagram: 'https://instagram.com/eventedge',
    youtube: 'https://www.youtube.com/@ThisisTechTalks',
};
