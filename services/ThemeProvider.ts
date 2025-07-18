import { ITheme } from '../model/Theme';
import { ERC721_OCMONK_THEMES } from './themes/erc721-ocmonk-theme';
import { GENERIC_THEMES } from './themes/generic-theme';

export const themes: ITheme[] = [
  ...ERC721_OCMONK_THEMES,
  ...GENERIC_THEMES,
];
