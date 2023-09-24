const Footer = () => {
  return (
    <div className="w-full justify-start px-4 flex py-20">
      <div className="rounded-xl w-full mb-0 flex justify-center items-center py-20 bg-gray-500">
        <div className="flex flex-col">
          <p className="text-xl text-white font-bold">Read Now</p>
          <label className="" ></label>
          <input className="mt-8 rounded-lg py-2" type="text"
            placeholder="Enter Your Email" />
          <div className="flex flex-col">
            <label htmlFor="">Payment
            </label>
            <select name="" id="">
              <option value="">Airtel Money</option>
            </select>
            <select name="" id="">
              <option value="">Mtn Money</option>
              <select name="" id="">
                <option value="">Zamtel Money</option>
              </select>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer