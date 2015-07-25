CREATE DATABASE chat;
USE chat;

  CREATE TABLE `messages` (
  `username` varchar(15),
  `text` TEXT(140),
  `roomname` varchar(15)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

