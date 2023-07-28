import { useState } from 'react';
import { LinkGenerator } from './LinkGenerator';
import { capitalizeFirstLetter } from '../utils';
import './style/Note.css'

export function Note({ notes, findNotes, note, deleteNotes, updateNote, newDateNote, SetSearchText }) {
  const { description, date, editedText } = note
  const [isEditing, setIsEditing] = useState(false);
  const [inputTextEdit, setInputTextEdit] = useState('')
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleUpdateClick = () => {
    setInputTextEdit(description)
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const dateComment = newDateNote()
    let editedText = inputTextEdit && inputTextEdit !== description ? true : false;
    let objetoB = findNotes.find(objeto => objeto.id === note.id);
    let objetoA = notes.find(objeto => objeto.id === note.id);

    objetoB = {
      ...note,
      description: inputTextEdit ? inputTextEdit : description,
      date: dateComment,
      editedText: editedText
    };

    if (objetoB && objetoA) {
      objetoA = objetoB
    }

    updateNote(objetoA);
    setIsEditing(false);
    SetSearchText("")
  };

  const handleCancelClick = () => {
    setUpdatedDescription(updatedDescription);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setInputTextEdit(e.target.value);
  }

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <h3>Edita tu nota:</h3>
          <textarea
            className="input__field"
            defaultValue={description ? description : ''}
            placeholder='Escribe tu comentario'
            onChange={handleChange}
            style={{ minHeight: '100px', width: '100%', resize: 'none', }}
          />
          <div className="note-card-buttons">
            <button
              className="note-card-buttons__comment"
              onClick={handleSaveClick}
              disabled={inputTextEdit === description}
            >
              Guardar
            </button>
            <button
              className="note-card-buttons__comment"
              onClick={handleCancelClick}
              style={{
                backgroundColor: 'red'
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <LinkGenerator
              text={capitalizeFirstLetter(description)}
            />
            <p style={{ margin: '3px 0' }}>
              <strong>{date}.</strong>
              {editedText === true &&
                <span style={{ opacity: '.5' }}>, (Editado).</span>
              }
            </p>

          </div>
          <div className="note-card-buttons">
            <button
              className="note-card-buttons__comment"
              onClick={handleUpdateClick}
            >
              Editar
            </button>
            <button
              className="note-card-buttons__comment"
              onClick={deleteNotes}
              style={{
                backgroundColor: '#e91e63'
              }}
            >
              Eliminar
            </button>

          </div>
        </>
      )}
    </div>
  );
}

// MiComponente.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Note