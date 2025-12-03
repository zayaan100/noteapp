/* eslint-disable react/no-unstable-nested-components */
import { Link, Redirect, Tabs } from 'expo-router';
import React from 'react';

import { Pressable, Text } from '@/components/ui';
import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
  Home as ProfileIcon,
} from '@/components/ui/icons';
import { useAuth } from '@/app/providers/auth/auth-provider';

export default function TabLayout() {
  const { status, isFirstTime } = useAuth();

  if (isFirstTime) {
    return <Redirect href="/(auth)/onboarding" />;
  }

  if (status === 'signOut') {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs>

      {/* 1️⃣ ADD NOTE (style.tsx) */}
      <Tabs.Screen
        name="style"
        options={{
          title: 'Add Note',
          headerShown: true,
          tabBarIcon: ({ color }) => <StyleIcon color={color} />,
        }}
      />

      {/* 2️⃣ NOTES (index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Notes',
          headerShown: true,
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
        }}
      />

      {/* 3️⃣ ABOUT (profile.tsx) */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'About',
          headerShown: true,
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />

      {/* 4️⃣ SETTINGS (settings.tsx) */}
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
