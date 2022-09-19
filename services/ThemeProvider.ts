import { ITheme } from '../model/Theme';
import { ERC721_COIW_THEMES } from './themes/erc721-coiw-theme';
import { ERC721_SJ_THEMES } from './themes/erc721-sj-theme';
import { ERC721_WFNH_BE_THEMES } from './themes/erc721-wfnh-be-theme';
import { ERC721_OCMONK_THEMES } from './themes/erc721-ocmonk-theme';
import { GENERIC_THEMES } from './themes/generic-theme';

export const themes: ITheme[] = [
  ...ERC721_SJ_THEMES,
  ...ERC721_COIW_THEMES,
  ...ERC721_WFNH_BE_THEMES,
  ...ERC721_OCMONK_THEMES,
  ...GENERIC_THEMES,
];
