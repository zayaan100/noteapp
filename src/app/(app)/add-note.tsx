import * as React from 'react';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';

import {
  FocusAwareStatusBar,
  ScrollView,
  Pressable,
  View,
  Text,
  SafeAreaView
} from '@/components/ui';

import { addNote } from '@/utils/note-storage';

export default function AddNote() {
  const router = useRouter();
  const [note, setNote] = React.useState("");

  async function handleSave() {
    if (!note.trim()) return;
    await addNote(note);
    setNote("");
    router.push("/notes");
  }

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1 pt-12">
          <Text className="text-xl font-bold mb-4">Add Note</Text>

          <TextInput
            placeholder="Write your note..."
            multiline
            className="border border-gray-400 rounded-lg p-3 h-40 text-base mb-4"
            value={note}
            onChangeText={setNote}
          />

          <Pressable
            className="bg-blue-600 p-3 rounded-lg"
            onPress={handleSave}
          >
            <Text className="text-white text-center text-base">Save Note</Text>
          </Pressable>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
