import React from 'react'
import Tv from '/src/IMG/tv.png'
import Home from '/src/IMG/Home.png'
import MovieProjector from '/src/IMG/Movie-Projector.png'
import Show from '/src/IMG/Show.png'
import Calendar from '/src/IMG/Calendar.png'
import Logout from '/src/IMG/Logout.png'
import Group from '/src/IMG/Group.png'
import Group1 from '/src/IMG/Group1.png'
import Star from '/src/IMG/Star.png'
import Heart from '/src/IMG/Heart.png'
import Share from '/src/IMG/Share.png'
import Bookmark from '/src/IMG/Bookmark.png'
import TwoTickets from '/src/IMG/Two-Tickets.png'
import List from '/src/IMG/List.png'
import ExpandArrow from '/src/IMG/Expand Arrow.png'
import './moviedetail.css'

const MovieDetails = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="movie-menu">
          <div className="tv">
            <img src={Tv} alt=""/><h2>MovieBox</h2>
          </div>
          <div className="tvv">
            <img src={Home} alt=""/><h2>Home</h2>
          </div>

          <div className="tvvv">
            <img src={MovieProjector} alt=""/><h2>Movies</h2>
          </div>

          <div className="tvv">
            <img src={Show} alt=""/><h2>TV Series</h2>
          </div>

          <div className="tvv">
            <img src={Calendar} alt=""/><h2>upcoming</h2>
          </div>

          <div className="note">

            <p className="note1">
              Play movie quizes <br/>
              and earn <br/>
              free tickets
            </p>
            <p className="note2">
              50k people are playing <br/>
              now
            </p>

            <div className="playing">
              <p>Start Playing</p>
            </div>

          </div>

          <div className="logout">
            <img src={Logout} alt=""/><h2>Logout</h2>
          </div>
        </div>



        <div>
          <div className="video">
            <img src={Group} alt=""/>
            <div className="flex m-4">
              <div className="">
                <div className="flex">
                  <h2 className="text-neutral-500 text-sm">Top Gun: Maverick • 2022 • PG-13 • 2h 10m</h2>
                  <div className="flex ml-4">
                    <button className="action">Action</button>
                  </div>
                  <div className="flex ml-4">
                    <button className="drama">Drama</button>
                  </div>
                </div>
                
                <div className="description">
                  <p>
                    After thirty years, Maverick is still pushing the envelope as a top naval aviator, <br/>
                    but must confront ghosts of his past when he leads TOP GUN's elite graduates <br/>
                    on a mission that demands the ultimate sacrifice from those chosen to fly it.
                  </p> 
                </div>
              </div>

              <div className="ml-12">
                <div className="flex items-center left-4">
                  <div className="bg-gray-200 flex p-1">
                    <img className="size-4" src={Heart} alt=""/>
                    <img className="size-4" src={Share} alt=""/>
                    <img className="size-4" src={Bookmark} alt=""/>
                    <img className="size-4" src={Star} alt=""/>
                  </div>

                  <div className="pl-1">
                    <h2 className="pl-1 text-slate-200 text-base">8.5 <span className="text-black">|350k</span></h2>
                  </div>
                </div>
                <div className="block mt-4 ">
                  <div className="flex bg-red-500 mt-4 items-center justify-center p-2 rounded-lg">
                    <img className="size-4" src={TwoTickets} alt=""/>
                    <h2 className="text-xs pl-2">See Showtimes</h2>
                  </div>

                  <div className="flex bg-red-100 mt-4 items-center justify-center p-2 rounded-lg">
                    <img className="size-4" src={List} alt=""/>
                    <h2 className="text-xs pl-2">More watch options</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex m-4">
              <div>
                <div>
                  <p className="text-sm font-medium mb-2">Director: <span className="text-red-500 pl-2">Joseph Kosinski</span></p>
                  <p className="text-sm font-medium mb-2">Writers: <span className="text-red-500 pl-2">Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                  <p className="text-sm font-medium mb-2">Star: <span className="text-red-500 pl-2">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                </div>
                <div className="flex items-center justify-between mt-4 border-solid border-2 rounded-lg">
                  <div className="flex">
                    <h2 className="text-xs bg-red-700 p-2 text-white rounded-t-lg rounded-b-lg">Top rated moive #65</h2>
                    <h2 className="text-xs pl-4 p-2">Awards 9 nominations</h2>
                  </div>
                  <div>
                    <img className="size-4" src={ExpandArrow} alt=""/>
                  </div>
                </div>
              </div>

              <div className="pl-12">
                <img className="size-10/12" src={Group1} alt=""/>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieDetails
