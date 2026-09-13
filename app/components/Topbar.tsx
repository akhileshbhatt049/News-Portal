import Link from "next/link";

const Topbar = () => {
  return (
    <div className="h-20 flex items-center justify-center gap-10 bg-gray-200 px-6">
      <div className="hover:border-b-4 hover:border-red-300 transition-all duration-300">
        <Link href="/">Home</Link>
      </div>

      {/* <div>
        <select value="category" className="border border-gray-400 rounded-lg px-3 py-2" >
          <option value="" disabled> Choose category </option>

          <option value="technical">Technical</option>
          <option value="sports">Sports</option>
          <option value="political">Political</option>
        </select>
      </div> */}

      <div>
        <form className="flex items-center">
          
          {/* <input type="text" value="Search" placeholder="Search news" className="h-10 border border-gray-600 rounded-xl font-semibold px-3"/> */}

          <button type="submit" className="h-10 w-10 cursor-pointer hover:bg-gray-300 rounded-full ml-2">
            <img src="/icons/search-icon.png" alt="search" className="h-10 w-10" />
          </button>

        </form>
      </div>
    </div>
  );
};

export default Topbar;
