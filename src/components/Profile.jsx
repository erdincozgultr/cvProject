function Profile() {
  return (
    <>
      <div className="flex flex-col gap-y-10 text-lg">
        <div className="text-5xl font-medium">Profile</div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-y-4">
            <span className="text-4xl text-[#4731d3]">Profile</span>
            <div className="flex flex-col gap-y-2 w-105">
              <div className="flex gap-16">
                <span className="w-2/5 font-bold">Doğum Tarihi</span>
                <span className="w-3/5">24.03.1996</span>
              </div>
              <div className="flex gap-16">
                <span className="w-2/5 font-bold">İkamet Şehri</span>
                <span className="w-3/5">Ankara</span>
              </div>
              <div className="flex gap-16">
                <span className="w-2/5 font-bold">Eğitim Durumu</span>
                <span className="w-3/5">
                  Hacattepe Ünv. Biyoloji Lisans, 2016
                </span>
              </div>
              <div className="flex gap-16">
                <span className="w-2/5 font-bold">Tercih Ettiği Rol</span>
                <span className="w-3/5">Frontend, UI</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-lg text-[#777777] gap-y-1">
            <span className="text-4xl text-[#4731d3]">About Me</span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi molitia.
            </span>
            <br />
            <span>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam tepporibus cumque magnam!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
