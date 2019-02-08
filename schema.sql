DROP DATABASE IF EXISTS zoundloud;

CREATE DATABASE zoundloud;

USE zoundloud;

CREATE TABLE artist_info (
  id INT(100) PRIMARY KEY AUTO_INCREMENT,
  artistname TEXT(150),
  avatar_picture TEXT(200),
  no_of_followers INT(20),
  no_of_tracks INT(20),
  pro_status INT(1), 
  is_followed INT(1)
);

CREATE TABLE song_description (
  id INT(100) PRIMARY KEY AUTO_INCREMENT,
  songname TEXT(200),
  artistname TEXT(200), 
  licence TEXT(200), 
  descriptiontext TEXT(4000), 
  releasedby TEXT(200), 
  releasedate DATE, 
  pline TEXT(200), 
  tags TEXT(200) 
)

-- const sqlsong = 'INSERT INTO song_description(songname, artistname, licence, descriptiontext, releasedby, releasedate, pline, tags ) VALUES ?';
-- //to run, open mysql 5.7 
-- and use the following command from the root directory:
-- source ./schema.sql; 
