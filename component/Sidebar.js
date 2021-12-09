import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Sidebar() {
  return (
    <div>
      <div>
        <button className="sidebar_button ">
          <HomeIcon />
          <p>Home</p>
        </button>
        <button className="sidebar_button ">
          <SearchIcon />
          <p>Search</p>
        </button>
        <button className="sidebar_button ">
          <LibraryMusicIcon />
          <p>Your Library</p>
        </button>
        <div className="sidebar_hr" />
      </div>
      <div>
        <button className="sidebar_button ">
          <PlaylistAddIcon />
          <p>Add Playlist</p>
        </button>
        <button className="sidebar_button ">
          <FavoriteBorderIcon />
          <p>Liked Songs</p>
        </button>
        <button className="sidebar_button ">
          <RssFeedIcon />
          <p>Your Episodes</p>
        </button>
        <div className="sidebar_hr" />
        <p className="sidebar_playlist">Playlist...</p>
      </div>
    </div>
  );
}

export default Sidebar;
