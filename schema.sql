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
-- //to run, open mysql 5.7 
-- and use the following command from the root directory:
-- source ./schema.sql; 

-- dummy data for artist_info below: 

INSERT INTO artist_info(
    artistname,
    avatar_picture,
    no_of_followers,
    no_of_tracks,
    pro_status,
    is_followed
    )
VALUES ('KITTEH', 'https://placekitten.com/150/150', 20, 15, 0, 1),
        ('BAR', 'https://placebear.com/200/300', 2000, 15, 0, 1)