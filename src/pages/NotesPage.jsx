import React, { useState , useEffect} from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { saveNotesToLocalStorage, loadNotesFromLocalStorage } from '../utils/localStorage';

function NotesPage() {
  const [notes, setNotes] = useState(loadNotesFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    saveNotesToLocalStorage(notes);
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };


  const filteredNotes = notes.filter(note => {
    const matchesSearchTerm = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || note.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <NoteForm addNote={addNote} />
      <div className="filter-section">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Personal">Personal</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Estudio">Estudio</option>
          {/* Agrega más categorías según sea necesario */}
        </select>
      </div>
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default NotesPage;
