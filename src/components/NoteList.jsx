/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteList({ notes, deleteNote }) {
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleClickOpen = (note) => {
    setSelectedNote(note);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedNote(null);
  };

  return (
    <>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.length === 0 ? (
          <Typography variant="body1" color="textSecondary" className="col-span-full text-center">
            No hay notas
          </Typography>
        ) : (
          notes.map((note, index) => (
            <Card 
              key={index} 
              className="relative shadow-md rounded-lg border border-gray-200 w-60 mx-auto overflow-hidden cursor-pointer"
              style={{ backgroundColor: note.color || '#ffffff' }} // Usa el color elegido por el usuario
              onClick={() => handleClickOpen(note)}
            >
              <CardContent className="p-4">
                <Typography 
                  variant="h6" 
                  component="h2" 
                  className="mb-2 text-gray-800 truncate"
                >
                  {note.title || `Nota ${index + 1}`}
                </Typography>
                <Typography 
                  variant="body1" 
                  component="p" 
                  className="text-gray-700 truncate"
                >
                  {note.content}
                </Typography>
                <IconButton 
                  color="error" 
                  className="absolute top-2 right-2"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic en el botón de eliminar abra el modal
                    deleteNote(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {selectedNote && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>{selectedNote.title || 'Nota'}</DialogTitle>
          <DialogContent className="p-6">
            <Typography 
              variant="body1" 
              component="p"
              className="whitespace-pre-wrap break-words"
            >
              {selectedNote.content}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default NoteList;
