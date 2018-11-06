-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods
(
  food VARCHAR(50) NOT NULL,
  score INTEGER(10)
  -- Make a string column called "food" which cannot contain null --
  -- Make an numeric column called "score" --
);

CREATE TABLE favorite_songs
(
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  -- Make a string column called "song" which cannot contain null --
  -- Make a string column called "artist" --
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies
(
  id INTEGER NOT NULL
  AUTO_INCREMENT,
    movie VARCHAR
  (50) NOT NULL,
    five_times BOOLEAN DEFAULT false,
    score INTEGER
  (10),
    PRIMARY KEY
  (id)
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  -- Create a string column called "movie" which cannot be null --
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  -- Make an integer column called "score" --
  -- Set the primary key of the table to id --
);
