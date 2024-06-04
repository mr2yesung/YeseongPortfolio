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
      <div className="relative mx-auto mb-6 mt-[180px] w-full rounded-[20px] bg-white px-6 text-center dark:bg-[#111111] md:mt-[220px] lg:mb-0 lg:mt-0">
        <img
          src="/images/yeseong.png"
          alt="Yeseong Kim photo"
          className="absolute left-[50%] mx-auto -mt-[140px] h-[240px] w-[183.6px] -translate-x-[50%] transform rounded-[20px] drop-shadow-xl"
        />

        <div className="pb-8 pt-[100px]">
          <h1 className="mb-1 mt-6 text-5xl font-semibold dark:text-white">
            Yeseong Kim
          </h1>
          <h3 className="mb-4 inline-block rounded-lg px-5 py-1.5 text-[#7b7b7b] dark:bg-[#1d1d1d] dark:text-[#a6a6a6]">
            Software Engineer
          </h3>

          <div className="mt-2 rounded-2xl bg-[#f3f6f6] p-7 dark:bg-[#1d1d1d]">
            {personalInfo.map((info, i) => (
              <div
                key={info.name}
                className={`flex ${i === 0 ? "pb-2.5" : "py-2.5"} ${i === personalInfo.length - 1 ? "" : "border-b border-[#e3e3e3] dark:border-[#3d3a3a]"}`}
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white from-[#fa5252] to-[#dd2476] shadow-md transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white dark:bg-black ${info.iconColor}`}
                >
                  {info.icon}
                </span>
                <div className="ml-2.5 text-left">
                  <p className="text-xs text-[#44566c] dark:text-[#a6a6a6]">
                    {info.name}
                  </p>
                  <p className="break-all dark:text-white">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            download
            href=""
            className="mx-auto mt-8 inline-flex items-center rounded-[35px] bg-gradient-to-l from-[#fa5252] to-[#dd2476] px-8 py-3 text-lg text-white transition duration-200 ease-linear hover:bg-gradient-to-r"
          >
            <img
              src="/images/icons/download.png"
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
