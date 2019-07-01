CREATE TABLE IF NOT EXISTS Users(
  first_name VARCHAR(34) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  username VARCHAR(15) NOT NULL,
   VARCHAR(86) NOT NULL

);

INSERT INTO Users(name, geolocation, lines, details) VALUES ('Astor Pl','POINT (-73.99106999861966 40.73005400028978)','4-6-6 Express','4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound');
INSERT INTO Users(name, geolocation, lines, details) VALUES ('Canal St','POINT (-74.00019299927328 40.71880300107709)','4-6-6 Express','4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound');