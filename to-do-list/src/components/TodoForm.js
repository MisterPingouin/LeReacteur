import { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState(""); // État local pour le champ d'entrée

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le formulaire de rafraîchir la page
    if (inputValue.trim()) {
      // Vérifier si l'input n'est pas juste des espaces blancs
      addTask(inputValue); // Ajouter la tâche
      setInputValue(""); // Réinitialiser l'input après l'ajout
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;
