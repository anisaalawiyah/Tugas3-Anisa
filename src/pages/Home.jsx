import { useState } from "react";
import { Trash, SquarePen } from "lucide-react";

export default function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anisa Alawiyah", generation: 21 },
    { id: 2, name: "Almiah Kusnariati", generation: 21 },
    { id: 3, name: "Susi Haryati", generation: 21 },
    { id: 4, name: "Aisyah Roma", generation: 21 },
    { id: 5, name: "Yanti Nurhayati", generation: 21 },
  ]);

  const [updateStudent, setUpdateStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", generation: "" });
  const [showAddForm, setShowAddForm] = useState(false);

  function handleDelete(student) {
    if (window.confirm("Apakah kamu yakin ingin menghapus ini?")) {
      setStudents(students.filter((s) => s.id !== student.id));
    }
  }

  function handleUpdate() {
    setStudents(
      students.map((s) => (s.id === updateStudent.id ? updateStudent : s))
    );
    setUpdateStudent(null);
  }

  function handleAdd() {
    setStudents([
      ...students,
      { id: students.length + 1, ...newStudent, generation: parseInt(newStudent.generation) },
    ]);
    setNewStudent({ name: "", generation: "" });
    setShowAddForm(false);
  }

  return (
    <div className="bg-stone-300 min-h-screen flex items-center justify-center">
    <div className="bg-stone-300 container mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-gradient-to-r from-teal-700 to-stone-600 p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-white">
                {student.name} - {student.generation}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleDelete(student)}
                  className="text-red-200 hover:text-red-400 transition-colors duration-300"
                >
                  <Trash />
                </button>
                <button
                  onClick={() => setUpdateStudent(student)}
                  className="text-yellow-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  <SquarePen />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {updateStudent && (
        <div className="bg-gradient-to-r from-teal-700 to-stone-600  p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Nama:</label>
              <input
                type="text"
                id="name"
                value={updateStudent.name}
                onChange={(e) =>
                  setUpdateStudent({
                    ...updateStudent,
                    name: e.target.value,
                  })
                }
                className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="generation" className="block text-sm font-medium text-white">Generation:</label>
              <input
                type="number"
                id="generation"
                value={updateStudent.generation}
                onChange={(e) =>
                  setUpdateStudent({
                    ...updateStudent,
                    generation: parseInt(e.target.value),
                  })
                }
                className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="space-x-2">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                Save
              </button>
              <button type="button" onClick={() => setUpdateStudent(null)} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="px-4 py-2 bg-zinc-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
      >
        {showAddForm ? "Cancel" : "Add"}
      </button>
      {showAddForm && (
        <div className="bg-gradient-to-r from-teal-700 to-stone-600 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold text-white mb-4">Add New Student</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAdd();
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="newName" className="block text-sm font-medium text-white">Nama:</label>
              <input
                type="text"
                id="newName"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
                className="mt-1 p-2 w-full border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="newGeneration" className="block text-sm font-medium text-white">Generation:</label>
              <input
                type="text"
                id="newGeneration"
                value={newStudent.generation}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, generation: e.target.value })
                }
                className="mt-1 p-2 w-full border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-zinc-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Add
            </button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
}
