import CalendarIcon from "../icons/CalendarIcon";
import EmailIcon from "../icons/EmailIcon";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";

function MainCard() {
  const personalInfo = [
    {
      name: "Phone",
      content: "+1 949 836 1299",
      icon: <PhoneIcon />,
      iconColor: "text-[#e93b81]",
    },
    {
      name: "Email",
      content: "mryesung1@gmail.com",
      icon: <EmailIcon />,
      iconColor: "text-[#6ab5b9]",
    },
    {
      name: "Location",
      content: "Irvine, CA",
      icon: <LocationIcon />,
      iconColor: "text-[#fd7590]",
    },
    {
      name: "Birthday",
      content: "Sep 8, 2000",
      icon: <CalendarIcon />,
      iconColor: "text-[#c17ceb]",
    },
  ];

  return (
    <div>
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <img
          src="/src/assets/images/yeseong.png"
          alt="Yeseong Kim photo"
          className="w-[183.6px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        />

        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
            Yeseong Kim
          </h1>
          <h3 className="mb-4 text-[#7b7b7b] inline-block dark:bg-[#1d1d1d] px-5 py-1.5 rounded-lg dark:text-[#a6a6a6]">
            Software Engineer
          </h3>

          <div className="p-7 rounded-2xl mt-2 bg-[#f3f6f6] dark:bg-[#1d1d1d]">
            {personalInfo.map((info, i) => (
              <div
                key={info.name}
                className={`flex ${i === 0 ? "pb-2.5" : "py-2.5"} ${i === personalInfo.length - 1 ? "" : "border-b border-[#e3e3e3] dark:border-[#3d3a3a]"}`}
              >
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-lg hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] flex justify-center items-center hover:text-white transition-colors duration-300 ease-in-out bg-white dark:bg-black shadow-md ${info.iconColor}`}
                >
                  {info.icon}
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566c] dark:text-[#a6a6a6]">
                    {info.name}
                  </p>
                  <p className="dark:text-white break-all">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            download
            href=""
            className="inline-flex items-center mx-auto bg-gradient-to-l from-[#fa5252] to-[#dd2476] duration-200 transition ease-linear hover:bg-gradient-to-r px-8 py-3 text-lg text-white rounded-[35px] mt-8"
          >
            <img
              src="/src/assets/images/icons/download.png"
              alt="download icon"
              className="mr-2"
            />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
