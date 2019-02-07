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
    pro_status BINARY(1) NOT NULL,
    is_followed BINARY(1) NOT NULL

)
-- //to run, open mysql 5.7 
-- and use the following command from the root directory:
-- source ./schema.sql; 