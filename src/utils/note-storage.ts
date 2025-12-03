import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = "NOTES_STORAGE_KEY";

// Get all notes
export async function getNotes() {
  const json = await AsyncStorage.getItem(NOTES_KEY);
  return json ? JSON.parse(json) : [];
}

// Save notes array
export async function saveNotes(notes: any[]) {
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

// Add a new note
export async function addNote(text: string) {
  const notes = await getNotes();
  const newNote = {
    id: Date.now().toString(),
    text,
    date: new Date().toISOString(),
  };
  notes.push(newNote);
  await saveNotes(notes);
}

// Delete note
export async function deleteNote(id: string) {
  const notes = await getNotes();
  const filtered = notes.filter((n: any) => n.id !== id);
  await saveNotes(filtered);
}

// Update note
export async function updateNote(id: string, newText: string) {
  const notes = await getNotes();
  const updated = notes.map((n: any) =>
    n.id === id ? { ...n, text: newText } : n
  );
  await saveNotes(updated);
}
