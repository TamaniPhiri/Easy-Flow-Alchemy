const Footer = () => {
  return (
    <div className="w-full justify-start  gap-8 px-4 flex  py-20">
      <div className="rounded-xl w-1/2 mb-0 flex px-6 py-20 bg-blue-500">
        <div className="flex flex-col">
          <p className="text-xl text-white font-bold mb-2">Read Now</p>

          <input className="mt-8 rounded-lg py-3 px-8" type="text"
            placeholder="Search Book" />
          <div className="text-lg flex flex-col mt-4">
            <label className="font-bold text-gray-500" htmlFor="">Shelf
            </label>
            <select className="rounded mt-4 py-3" name="" id="">
              <option value=""></option>
              <option value="">New</option>
              <option value="">Romantic</option>
              <option value="">Poetry</option>
            </select>


          </div>
        </div>
      </div>
      <div className="rounded-xl w-1/2 mb-0 flex  py-20 bg-blue-500">
        <div className=" px-6 flex flex-col">
          <p className="text-xl text-white font-bold mb-2">Authors</p>

          <input className="jusify-start mt-8 rounded-lg py-3" type="text"
            placeholder="Search Author" />

        </div>
      </div>
    </div>
  )
}

export default Footer