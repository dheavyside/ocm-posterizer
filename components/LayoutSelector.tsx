import { useEffect, useRef, useState } from 'react';
import { ITheme } from '../model/Theme';
import { themes } from '../services/ThemeProvider';

export interface Props {
  colId?: string;
  themeUpdated?: (theme: ITheme | null) => void;
}

interface Size {
  size: string;
  label: string;
}

const sizes: Size[] = [
  {
    size: 'wuxga',
    label: 'Full Set Friday',
  },
  {
    size: 'coming_soon',
    label: 'More Soon',
  },
];

const LayoutSelector = ({ colId = '', themeUpdated }: Props) => {
  const [filteredSizes, setFilteredSizes] = useState<Size[]>([]);
  const [filteredThemes, setFilteredThemes] = useState<ITheme[]>([]);
  const [filter, setFilter] = useState({
    size: '',
    themeId: '',
  });

  // Helper function to filter themes by code
  const filterThemesByCode = (themes: ITheme[], code: string) => {
    return themes.filter(
      (theme) =>
        theme.code?.toLowerCase().trim() === code.toLowerCase().trim() ||
        theme.code?.toLowerCase().trim() === 'generic'
    );
  };

  useEffect(() => {
    // Skip if colId is empty
    if (!colId) return;
    
    // Get themes filtered by collection ID
    const themeFilteredByCode = filterThemesByCode(themes, colId);
    
    // Get available sizes for this collection
    const fs = sizes.filter(
      (s) => s.size === 'coming_soon' || themeFilteredByCode.filter((f) => f.size === s.size).length > 0
    );
    setFilteredSizes(fs);
    
    // If no size is selected and sizes are available, select the first size
    if (filter.size === '' && fs.length > 0) {
      const firstAvailableSize = fs.find(s => s.size !== 'coming_soon')?.size || fs[0].size;
      setFilter({ size: firstAvailableSize, themeId: filter.themeId });
      return;
    }

    // Get themes filtered by both collection ID and size
    const themeFilteredBySize = themeFilteredByCode.filter(
      (theme) => theme.size === filter.size
    );

    setFilteredThemes(themeFilteredBySize);
    
    // If no theme is selected and themes are available, select the first theme
    if (!filter.themeId && themeFilteredBySize.length > 0) {
      themeSelect(themeFilteredBySize[0].id);
    }
  }, [filter, colId]);

  function sizeSelect(value: string): void {
    const filtered = filterThemesByCode(themes, colId || '').filter(
      (theme) => theme.size === value
    );

    setFilter({
      size: value,
      themeId: filtered.length > 0 ? filtered[0].id : '',
    });

    if (themeUpdated) {
      if (filtered.length > 0) {
        themeUpdated(filtered[0]);
      } else {
        themeUpdated(null);
      }
    }
  }

  function themeSelect(value: string): void {
    setFilter({ size: filter.size, themeId: value });
    const selectedTheme = themes.find((theme) => theme.id === value);
    if (themeUpdated && selectedTheme) {
      themeUpdated(selectedTheme);
    }
  }

  return (
    <div className='w-full p-2 rounded-lg bg-[#16181d]'>
      <div className='text-tiny md:text-sm'>
        <div className='text-left'>
          <ul className='flex flex-wrap justify-start -mb-px font-medium text-left text-white'>
            {filteredSizes &&
              filteredSizes.map((item) => (
                <li key={item.size}>
                  <button
                    onClick={() => sizeSelect(item.size)}
                    aria-label={`Select ${item.label} layout`}
                    aria-pressed={filter.size === item.size}
                    className={`inline-flex p-2 rounded-lg text-white hover:text-[#00FFFF] cursor-pointer ${
                      filter.size === item.size
                        ? 'text-[#00FFFF] font-bold'
                        : item.size === 'coming_soon' ? 'opacity-50 cursor-not-allowed hover:text-white' : ''
                    }`}
                    disabled={item.size === 'coming_soon'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="w-full h-px my-2 bg-gray-700 opacity-30"></div>

        <div className='relative -mt-1 text-left'>
          {filteredThemes.map((theme) => (
            <button
              className={`inline-block px-2 py-1 mr-2 text-white hover:text-[#00FFFF] cursor-pointer ${
                filter.themeId === theme.id
                  ? 'text-[#00FFFF] font-bold'
                  : ''
              }`}
              key={theme.id}
              aria-label={`Select ${theme.name} theme`}
              aria-pressed={filter.themeId === theme.id}
              onClick={() => themeSelect(theme.id)}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutSelector;
