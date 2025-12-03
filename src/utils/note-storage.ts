import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = "NOTES_STORAGE_KEY";

// Get all notes
export async function getNotes() {
  const data = await AsyncStorage.getItem(NOTES_KEY);
  return data ? JSON.parse(data) : [];
}

// Save all notes
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

// Delete a note
export async function deleteNote(id: string) {
  const notes = await getNotes();
  const filtered = notes.filter((n) => n.id !== id);
  await saveNotes(filtered);
}

// Edit a note
export async function updateNote(id: string, newText: string) {
  const notes = await getNotes();
  const updated = notes.map((n) =>
    n.id === id ? { ...n, text: newText } : n
  );
  await saveNotes(updated);
}
