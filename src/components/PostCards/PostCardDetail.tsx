import samplepost from '/samplepost.png'
const PostCardDetail = () => {
  return (
    <div className="flex   flex-col md:flex-row max-h-[90vh] mx-auto  md:max-w-screen-lg shadow-lg  rounded-lg bg-white">
      <div className="relative w-full md:w-12/12 lg:w-8/12 xl:w-2/3 ">
        <img
          src={samplepost}
          alt="description"
          className="w-full h-full object-cover rounded-l-lg"
        />
        <div className="absolute gradient-glass-card rounded-bl-lg">
          <div className="flex flex-col text-sm	">
            <span className="font-semibold">Lana Steiner</span>
            <span>18 Jan 2022</span>
          </div>
          <span className="font-semibold">Developer</span>
        </div>
      </div>

      <div className="  lg:w-4/12 xl:w-1/3 md:max-w-[384px] rounded-r-lg m-6 max-h-[646px] p-2 overflow-x-auto">
        <div className="font-bold text-2xl pb-3">Building your API Stack</div>
        The rise of RESTful APIs has been met by a rise in tools for creating,
        testing, and managing them.The rise of RESTful APIs has been met by a
        rise in tools for creating, testing, and managing them.The rise of
        RESTful APIs has been met by a rise in tools for creating, testing, and
        managing them.The rise of RESTful APIs has been met by a rise in tools
        for creating, testing, and managing them.The rise of RESTful APIs has
        been met by a rise in tools for creating, testing, and managing them.The
        rise of RESTful APIs has been met by a rise in tools for creating,
        testing, and managing them.The rise of RESTful APIs has been met by a
        testing, and managing them.The rise of RESTful APIs has been met by a
        rise in tools for creating, testing, and managing them.The rise of
        RESTful APIs has been met by a rise in tools for creating, testing, and
        managing them.The rise of RESTful APIs has been met by a rise in tools
        for creating, testing, and managing them.The rise of RESTful APIs has
        been met by a rise in tools for creating, testing, and managing them.The
        rise of RESTful APIs has been met by a rise in tools for creating,
        testing, and managing them.The rise of RESTful APIs has been met by a
        testing, and managing them.The rise of RESTful APIs has been met by a
        rise in tools for creating, testing, and managing them.The rise of
        RESTful APIs has been met by a rise in tools for creating, testing, and
        managing them.The rise of RESTful APIs has been met by a rise in tools
        for creating, testing, and managing them.The rise of RESTful APIs has
        been met by a rise in tools for creating, testing, and managing them.The
        rise of RESTful APIs has been met by a rise in tools for creating,
        testing, and managing them.The rise of RESTful APIs has been met by a
        rise in tools for creating, testing, and
      </div>
    </div>
  )
}

export default PostCardDetail
