import React from "react";
import "./GithubSearch.css";
import { useState } from "react";
import axios from "axios";
import {FaMapMarkerAlt } from 'react-icons/fa';
import {PiBuildingsFill } from 'react-icons/pi';
import {FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa";





const GithubSearch = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      setProfile(response.data);
      setError(null);
    } catch (error) {
      setProfile(null);
      setError("user not found");
    }
  };
  return (
    <div className="main-container">
      <h1 className="main-heading">Github profile Dectective</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter Github username "
          value={username}
          className="search-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {error && <p className="error-msg">{error}</p>}
      {profile && (
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-img">
                <img src={profile.avatar_url} alt="Avatar" className="profile-avatar"></img>
            </div>
            <div className="profile-details">
                <div className="profile-des">
                    <h2 className="profile-name">{profile.name || profile.login}</h2>
                    <p className="profile-created">joined: {new Date(profile.created_at).toLocaleDateString()}</p>
                </div>
                <a href={profile.html_url} target="_blank" rel="noreferrer" className="profile-username">@{profile.login}</a>
                <p className="profile-bio">{profile.bio || "No bio provided."}</p>
                <div className="profile-stats">
                    <p className="profile-repos">Repositories<br/> <span className="stats">{profile.public_repos}</span></p>
                    <p className="profile-followers">Followers<br/> <span className="stats">{profile.followers}</span></p>
                    <p className="profile-following">Following<br/> <span className="stats">{profile.following}</span></p>
                </div>

               <div className='profile-info'>
                        <p className='profile-location'><FaMapMarkerAlt/> {profile.location || "Not provided"}</p>
                        <p className='profile-company'><PiBuildingsFill/> {profile.company || "Not provided"}</p>
                    </div>

                    <div className='profile-links'>
                        {profile.twitter_username && (
                            <a href={`https://twitter.com/${profile.twitter_username}`} target='_blank' rel="noreferrer" className='twitter-link'><FaXTwitter/>{profile.twitter_username}</a>
                        )}
                        <a href={profile.html_url} target='_blank' rel="noreferrer" className='profile-url'><FaGithub/>View Profile</a>
                    </div>   
               
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
