import { useData } from "../hooks/useData";

function Profile() {
  const profileData = useData("profileSection");

  return (
    <>
      <div className="flex flex-col gap-y-10 sm:text-lg">
        <div className="text-3xl sm:text-5xl font-medium dark:text-casper">
          {profileData.title}
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div className="flex flex-col gap-y-4">
            <span className="text-2xl sm:text-4xl text-purpleHearth dark:text-blueBell">
              {profileData.title}
            </span>
            <div className="flex flex-col gap-y-2 sm:1/2 xl:w-105 dark:text-white">
              {profileData.profile.map((item, index) => (
                <div key={index} className="flex gap-16">
                  <span className="w-2/5 font-bold">{item.name}</span>
                  <span className="w-3/5">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-boulder gap-y-1">
            <span className="text-2xl sm:text-4xl text-purpleHearth dark:text-blueBell">
              {profileData.subTitle}
            </span>
            {profileData.subText.map((text, index) => (
              <div key={index}>
                <span className="dark:text-white">{text}</span>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
