import React, { useState, useEffect } from "react";
import { supabase } from "../Auth/Supabase"; // Your Supabase client
import "./admin.css";
import i18next from "i18next";

const Admin = () => {
  const [news, setNews] = useState([]);
  const [en_content, setEn_content] = useState("");
  const [ru_content, setRu_content] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

    i18next.on("languageChanged", handleLanguageChange);

    const fetchNews = async () => {
      const { data, error } = await supabase.from("news").select("*");
      if (error) {
        console.error("Error fetching news:", error);
      } else {
        setNews(data);
      }
    };

    fetchNews();

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // Upload image using the Netlify function
  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile); // Add the image file to FormData

    try {
      const response = await fetch("/.netlify/functions/uploadImage", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(`Image upload failed: ${result.message}`);
      }

      // Return the image URL from the Netlify function
      return result.imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  // Handle adding news
  const handleAddNews = async (e) => {
    e.preventDefault();

    // Check if the user is authenticated
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session) {
      alert("You must be logged in to upload news.");
      return;
    }

    try {
      let imageUrl = null;

      // If an image is selected, upload it using the Netlify function
      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
        if (!imageUrl) {
          throw new Error("Image upload failed.");
        }
      }

      // Insert news into the Supabase database
      const { data, error: insertError } = await supabase
        .from("news")
        .insert([{ en_content, ru_content, image_url: imageUrl, date }]);

      if (insertError) {
        throw new Error(`Error adding news: ${insertError.message}`);
      }

      // Reset the form and update the news list
      setNews([...news, data[0]]);
      setEn_content("");
      setRu_content("");
      setDate("");
      setImageFile(null);
    } catch (error) {
      console.error(error.message);
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
            <textarea
              placeholder="English"
              value={en_content}
              onChange={(e) => setEn_content(e.target.value)}
              className="input-field"
              required
            />
            <textarea
              placeholder="Russian"
              value={ru_content}
              onChange={(e) => setRu_content(e.target.value)}
              className="textarea-field"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
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
              <img src={article.image_url} alt="news" className="image-url" />
              <p>
                {language === "en" ? article.en_content : article.ru_content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
