const Footer = () => {
  return (
    <div className="w-full justify-start px-4 flex py-20">
      <div className="rounded-xl w-full mb-0 flex justify-center items-center py-20 bg-gray-500">
        <div className="flex flex-col">
          <p className="text-xl text-white font-bold">Read Now</p>
         
          <input className="mt-8 rounded-lg py-2" type="text"
            placeholder="Search Book" />
          <div className="flex flex-col">
            <label htmlFor="">Shelf
            </label>
            <select name="" id="">
              <option value="">New</option>
              <option value="">Romantic</option>
              <option value="">Poetry</option>
            </select>
            <select name="" id="">
              
              <select name="" id="">
                
              </select>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer