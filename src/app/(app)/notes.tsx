import React from 'react';
import { useFocusEffect } from 'expo-router';

import {
  FocusAwareStatusBar,
  Text,
  View,
  ScrollView,
  Pressable,
} from '@/components/ui';

import { getNotes, deleteNote } from '@/utils/note-storage';

export default function NotesScreen() {
  const [notes, setNotes] = React.useState([]);

  async function loadNotes() {
    const stored = await getNotes();
    setNotes(stored);
  }

  // ✅ Correct focus listener for Expo Router
  useFocusEffect(
    React.useCallback(() => {
      loadNotes();
    }, [])
  );

  async function handleDelete(id: string) {
    await deleteNote(id);
    loadNotes();
  }

  return (
    <View className="flex-1 px-4 pt-16">
      <FocusAwareStatusBar />
      <Text className="text-xl font-bold mb-4">Notes</Text>

      <ScrollView>
        {notes.length === 0 && (
          <Text className="text-gray-500">No notes yet. Add one!</Text>
        )}

        {notes.map((note) => (
          <View
            key={note.id}
            className="border border-gray-500 rounded-lg p-4 mb-4"
          >
            <Text className="text-base">{note.text}</Text>

            <Pressable onPress={() => handleDelete(note.id)} className="mt-3">
              <Text className="text-red-600 font-semibold">Delete</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
