import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">How AirBnb Works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Accessibility</p>
        <p className="cursor-pointer">This is not a real site</p>
        <p className="cursor-pointer">Just a clone</p>
        <p className="cursor-pointer">Only frontend done here</p>
        <p className="cursor-pointer">Look around</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer">Arif Onoy</p>
        <p className="cursor-pointer">Presents</p>
        <p className="cursor-pointer">AirBnb 2.0</p>
        <p className="cursor-pointer">clone of the original</p>
        <a className="cursor-pointer" href="airbnb.com">
          Airbnb
        </a>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Tutorial followed</p>
        <a href="https://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA">
          Sonny Sangha
        </a>
        <p className="cursor-pointer">Video</p>
        <a href="https://www.youtube.com/playlist?list=PLf16UKl7nR5AOGvcX_WtjqXMge-a1B1Lo">
          Playlist here
        </a>
        <p className="cursor-pointer">Support him!</p>
      </div>
    </div>
  );
};

export default Footer;
