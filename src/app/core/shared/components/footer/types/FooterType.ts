export interface footerType {
    socialMedia: SocialMedia;
    siteMap: SiteMap
}
interface SocialMedia {
    title: string;
    url: string;
    active: boolean
}
interface SiteMap {
    title: string;
    url: string;
    active: boolean
}