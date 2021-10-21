import React from 'react';


const SettingForm = () => {

  return (
    <li class="group relative dropdown  px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
      <a>Dropdown</a>
      <div class="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul class="top-0 w-48 bg-white shadow px-6 py-8">
          <li class="py-1"><a class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
          <li class="py-1"><a class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
          <li class="py-1"><a class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
          <li class="py-1"><a class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
          <li class="py-1"><a class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
       </ul>

      </div>

    </li>
  )
}

export default SettingForm;