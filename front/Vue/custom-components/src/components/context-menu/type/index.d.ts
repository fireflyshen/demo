declare module "contextMenu" {
  export interface contextMenuItem {
    label: string;
    color?: string;
    icon: string;
    checked?: boolean;
    children?: Item[];
    action?: string;
  }

}
