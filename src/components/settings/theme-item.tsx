import React from 'react';
import { observer } from 'mobx-react-lite';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import { useStores } from '@/stores';
import type { UIAppearance } from '@/stores/types';

import { Item } from './item';

export const ThemeItem = observer(() => {
  const { uiTheme } = useStores();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      uiTheme.setSelectedTheme(option.value as UIAppearance);
      modal.dismiss();
    },
    [uiTheme, modal]
  );

  // English-only theme labels
  const themes = [
    { label: `Dark 🌙`, value: 'Dark' },
    { label: `Light 🌞`, value: 'Light' },
    
  ];

  const theme = themes.find((t) => t.value === uiTheme.selectedTheme);

  return (
    <>
      <Item
        text="Theme"
        value={theme?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={themes}
        onSelect={onSelect}
        value={theme?.value}
      />
    </>
  );
});
