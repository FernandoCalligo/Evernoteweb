/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';

// Categorías disponibles para las notas
const CATEGORIES = ['Trabajo', 'Personal', 'Estudio'];

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [color, setColor] = useState('#ffffff'); // Color por defecto

  const isFormValid = title.trim() !== '' && content.trim() !== ''; // Validación simple

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      addNote({
        title,
        content,
        category,
        color
      });
      setTitle('');
      setContent('');
      setCategory(CATEGORIES[0]);
      setColor('#ffffff'); // Resetear color al valor por defecto
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <TextField
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        error={title.trim() === ''}
        helperText={title.trim() === '' ? 'El título es obligatorio' : ''}
      />
      <TextField
        label="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        error={content.trim() === ''}
        helperText={content.trim() === '' ? 'El contenido es obligatorio' : ''}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Categoría</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Categoría"
        >
          {CATEGORIES.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className='flex justify-center align-middle text-center' fullWidth margin="normal" >
        <InputLabel>Color</InputLabel>
        <TextField
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          margin="normal"
          className='w-20'
        />
      </FormControl>
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        disabled={!isFormValid} // Deshabilita el botón si el formulario no es válido
      >
        Agregar Nota
      </Button>
    </form>
  );
}

export default NoteForm;
