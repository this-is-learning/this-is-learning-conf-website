import type {INavigationLink} from "./types/navigation-link.type.ts";

export const SITE_TITLE = "TIL-Conf";

export const NAVIGATION_LINKS: Array<INavigationLink> = [
    {title: 'Agenda', href: '/agenda'},
    {title: 'Speakers', href: '/speakers'},
    {title: 'Sponsors', href: '/sponsors'},
    {title: 'About', href: '/about'},
    {title: 'CoC', href: '/coc'},
    {title: 'CFP', href: '/cfp'},
    {title: 'Venue', href: '/venue'},
];

export const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/Thisis_Learning',
    facebook: '',
    // TODO : add logo for linkedin: 'https://linkedin.com/company/eventedge',
    // TODO : add logo for linkedin: instagram: 'https://instagram.com/eventedge',
    youtube: 'https://www.youtube.com/@ThisisTechTalks',
};