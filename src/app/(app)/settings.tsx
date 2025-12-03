import React from 'react';
// import { Env } from '@env';
import { useColorScheme } from 'nativewind';
import { observer } from 'mobx-react-lite';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { LanguageItem } from '@/components/settings/language-item';
import { ThemeItem } from '@/components/settings/theme-item';
import {
  colors,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import { Github, Rate, Share, Support, Website } from '@/components/ui/icons';
import { translate } from '@/lib';
import { useAuth } from '@/app/providers/auth/auth-provider';

export default observer(function Settings() {
  const { signOut } = useAuth();
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[500];

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">

          {/* SETTINGS TITLE */}
          <Text className="text-xl font-bold">
            {translate('settings.title')}
          </Text>

          {/* ONLY THEME TOGGLE SECTION */}
          <ItemsContainer title="Theme">
            <ThemeItem />
          </ItemsContainer>

        </View>
      </ScrollView>
    </>
  );
});
