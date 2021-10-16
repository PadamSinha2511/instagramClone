function Suggest({ dp, username, company }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <img className="w-14 h-14 rounded-full border p-[2px]" src={dp} alt="" />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <p className="text-sm text-gray-400 ">Works at {company}</p>
      </div>
      <button className="text-blue-400 text-sm font-bold ml-1">Follow</button>
    </div>
  );
}

export default Suggest;
