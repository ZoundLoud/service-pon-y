DROP DATABASE IF EXISTS zoundloud;

CREATE DATABASE zoundloud;

USE zoundloud;

-- schema for artist_info table. 
CREATE TABLE artist_info (
    -- field name TYPE(#),
    id INT(200) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    artistname VARCHAR(200) NOT NULL,
    avatar_picture VARCHAR(200),
    no_of_followers INT(20),
    no_of_tracks INT(20),
    pro_status INT(1) NOT NULL,
    is_followed INT(1) NOT NULL
);

CREATE TABLE song_description (
    id INT(200) PRIMARY KEY AUTO_INCREMENT,
    songname TEXT(300),
    artistname TEXT(300),
    licence TEXT(150),
    descriptiontext TEXT(4000),
    releasedby TEXT(150),
    releasedate DATE,
    pline TEXT(150),
    tags TEXT(200),
);

-- //to run, open mysql 5.7 
-- and use the following command from the root directory:
-- source ./schema.sql; 
