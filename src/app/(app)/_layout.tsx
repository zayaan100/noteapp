/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import React from 'react';

import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
  Home as ProfileIcon,
} from '@/components/ui/icons';

export default function TabLayout() {
  return (
    <Tabs>

      {/* Add Note */}
      <Tabs.Screen
        name="add-note"
        options={{
          title: 'Add Note',
          headerShown: true,
          tabBarIcon: ({ color }) => <StyleIcon color={color} />,
        }}
      />

      {/* Notes */}
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
          headerShown: true,
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
        }}
      />

      {/* About */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerShown: true,
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />

      {/* Settings */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />

    </Tabs>
  );
}
