// src/AdminPage.js
import React, { useState, useEffect } from "react";
import { supabase } from "../Auth/Supabase";
import "./admin.css";

const Admin = ({ session }) => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image_url, setImage_url] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from("news").select("*");
      if (error) console.error("Error fetching news:", error);
      else setNews(data);
    };
    fetchNews();
  }, []);

  const handleAddNews = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("news")
      .insert([{ title, content, image_url, date }]);

    if (error) {
      console.error("Error adding news:", error);
    } else {
      setNews([...news, data[0]]);
      setTitle("");
      setContent("");
      setDate("");
      setImage_url("");
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin News Portal</h1>

      <div className="news-section">
        {/* Form to Add News */}
        <div className="add-news-form">
          <h2>Add News</h2>
          <form onSubmit={handleAddNews}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea-field"
              required
            ></textarea>
            <input
              type="text"
              placeholder="Image url"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="add-news-btn">
              Add News
            </button>
          </form>
        </div>

        {/* Display Existing News */}
        <div className="news-list">
          <h2>News List</h2>
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <img
                src={article.image_url}
                alt="background"
                className="image-url"
              />
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
