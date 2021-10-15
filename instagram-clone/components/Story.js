function Story({ dp, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer
        hover:scale-110 transition-all transform duration-150 ease-out "
        src={dp}
        alt="profile picture"
      />
      <p className="text-sm w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
