export class ContextMenuItem {
  text?: string;
  action?: () => void;
  disabled: boolean = false;
  isSeparator: boolean = false;
}
