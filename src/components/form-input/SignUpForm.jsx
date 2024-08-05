import React, { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Inicia sesión con correo y contraseña
      </h1>
      <form onSubmit={() => {}} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Correo electrónico:</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Contraseña:</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Confirmar contraseña:</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          REGISTRARSE
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
