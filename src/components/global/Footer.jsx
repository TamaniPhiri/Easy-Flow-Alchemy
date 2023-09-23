const Footer = () => {
  return (
    <div className="w-full justify-start px-4 flex py-20">
      <div className="rounded-xl w-1/2 flex justify-center items-center py-20 bg-gray-500">
        <div className="flex flex-col">
          <p className="text-xl text-white font-bold">Buy Now</p>
          <label className="" ></label>
          <input className="mt-8 rounded-lg py-2" type="text"
            placeholder="Enter Your Email" />
            <select name="" id="">
              <option value="">Payment Method</option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default Footer