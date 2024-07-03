import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();

    this.state = {
      name: "Dr. John Nova ",
      profession: "Astraunot/Physicist",
      bio: "Helping Elon Musk to find Aliens 👽👽👽",
      imgSrc:
        "https://img.freepik.com/premium-photo/black-white-astronaut-dark-space_927844-229.jpg?w=740",
      isShown: false,
    };
    this.handleShowProfile = () => {
      this.setState({ isShown: !this.state.isShown });
    };
  }
  render() {
    return (
      <>
        {this.state.isShown ? (
          <div className="   flex flex-col items-center  justify-center h-screen  ">
            <div className=" mx-auto bg-white rounded-3xl shadow-xl">
              <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100  flex-col">
                <img
                  src={this.state.imgSrc}
                  className="w-full rounded-t-3xl  h-80  object-fit "
                  alt="movie.title"
                />

                <div className="group p-6 grid z-10">
                  <a
                    href="{`${movie.link}`}"
                    className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2"
                  >
                    {this.state.name}
                  </a>
                  <span className="text-slate-400 pt-2 font-semibold">
                    {this.state.profession}
                  </span>
                  <div className="h-28">
                    <span className="line-clamp-4 py-2 text-sm font-light leading-relaxed">
                      {this.state.bio}
                    </span>
                  </div>
                  <div className=" grid-cols-2 flex group justify-between">
                    <div className="font-black flex flex-col">
                      <span className="text-yellow-500 text-xl"></span>
                      <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600"></span>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="h-7">
                        <span className="text-3xl  font-bold  gap-x-2 text-slate-300"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={this.handleShowProfile}
          className="text-white p-4 border border-white rounded-full transition mb-5 ml-5 hover:bg-[#595858] "
        >
          {`${this.state.isShown ? "Hide" : "Show"} Astronaut`}
        </button>
      </>
    );
  }
}

export default Person;
