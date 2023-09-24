const Footer = () => {
  return (
    <div className="w-full lg:justify-start justify-center gap-8 px-4 flex  py-20">
      <div className="rounded-xl w-1/2 mb-0 flex justify-center items-center py-20 bg-green-300">
        <div className="flex flex-col">
          <p className="text-xl text-white font-bold mb-2">Read Now</p>

          <input className="mt-8 rounded-lg py-1" type="text"
            placeholder="Search Book" />
          <div className="text-lg flex flex-col mt-4">
            <label className="font-bold" htmlFor="">Shelf
            </label>
            <select className="rounded mt-4 " name="" id="">
              <option value=""></option>
              <option value="">New</option>
              <option value="">Romantic</option>
              <option value="">Poetry</option>
            </select>


          </div>
        </div>
      </div>
      <div className="rounded-xl w-1/2 mb-0 flex justify-center items-center py-20 bg-green-300">
        <div className="px-6 flex flex-col">
          <p className="text-xl text-white font-bold mb-2">Authors</p>

          <input className=" mt-8 rounded-lg py-1" type="text"
            placeholder="Search Author" />

        </div>
      </div>
    </div>
  )
}

export default Footer