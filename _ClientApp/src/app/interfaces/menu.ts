export interface Menu {
    menuId: number,
    menuText: string,
    menuIcon: string,
    menuLink: string,
    subMenus: []
}

export class MultiLevelMenu {
    label: string;
    icon: string;
    link: string;
    items: MultiLevelMenu[];
}