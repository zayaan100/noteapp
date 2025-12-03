/* eslint-disable react/no-unstable-nested-components */
import { Link, Redirect, Tabs } from 'expo-router';
import React from 'react';

import { Pressable, Text } from '@/components/ui';
import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as AddNoteIcon,
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
      {/* 1️⃣ PROFILE TAB */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          tabBarButtonTestID: 'profile-tab',
        }}
      />

      {/* 2️⃣ FEED TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
          headerRight: () => <CreateNewPostLink />,
          tabBarButtonTestID: 'feed-tab',
        }}
      />

      {/* 3️⃣ ADD NOTE (previously style.tsx) */}
      <Tabs.Screen
        name="style"
        options={{
          title: 'Add Note',
          headerShown: false,
          tabBarIcon: ({ color }) => <AddNoteIcon color={color} />,
          tabBarButtonTestID: 'add-note-tab',
        }}
      />

      {/* 4️⃣ SETTINGS (last tab) */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}

const CreateNewPostLink = () => {
  return (
    <Link href={"/feed/add-post" as any} asChild>
      <Pressable>
        <Text className="px-3 text-primary-300">Create</Text>
      </Pressable>
    </Link>
  );
};
