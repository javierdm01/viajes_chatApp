export default function InputSearch({ setSearch, search }) {
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
  
    return (
      <input
        type="text"
        className="border rounded-full outline-none w-full font-bold  p-6 pr-20 md:pl-14 md:pr-20 md:px-10 text-white bg-transparent h-14"
        onChange={handleSearch}  // Cambiado de onClick a onChange
        value={search}
        placeholder="Planifica un viaje con nosotros" // Corrigiendo el texto
      />
    );
  }
  