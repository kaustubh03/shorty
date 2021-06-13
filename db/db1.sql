-- -------------------------------------------------------------
-- TablePlus 3.12.2(358)
--
-- https://tableplus.com/
--
-- Database: db1
-- Generation Time: 2021-06-13 17:35:47.1600
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `Entries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `shortenUrl` varchar(255) NOT NULL,
  `expirationDate` datetime DEFAULT NULL,
  `logging` tinyint(1) DEFAULT NULL,
  `userAgent` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isExpired` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `passwordRequire` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `urlId` int NOT NULL,
  `userAgent` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Entries` (`id`, `url`, `shortenUrl`, `expirationDate`, `logging`, `userAgent`, `ip`, `password`, `isExpired`, `createdAt`, `updatedAt`, `passwordRequire`) VALUES
('15', 'https://kaustubh.dev', 'dc2toj', '2021-06-14 18:30:00', '1', NULL, NULL, '$2a$10$Wr1xXeMxHDCWXGLojNGKN.Ecw68bzZGH1LUcq6slIoE9kPLpiNy4W', NULL, '2021-06-13 05:57:28', '2021-06-13 05:57:28', '1'),
('16', 'https://kaustubh.dev', '5n6ls0', NULL, NULL, NULL, NULL, NULL, NULL, '2021-06-13 06:16:33', '2021-06-13 06:16:33', NULL),
('17', 'https://kaustubh.dev', 'hrupq1', '2021-06-14 06:37:55', '1', NULL, NULL, '$2a$10$n1xg/04IYgqetiKS2gOS5eSl8UZCeUNORO551TBtG4e6DltN.quRK', NULL, '2021-06-13 06:38:05', '2021-06-13 06:38:05', '1'),
('18', 'https://www.youtube.com', 'kk85tt', NULL, '1', NULL, NULL, NULL, NULL, '2021-06-13 06:52:11', '2021-06-13 06:55:10', NULL),
('19', 'https://kaustubh.dev', 'mtm64r', NULL, '1', NULL, NULL, NULL, NULL, '2021-06-13 06:58:01', '2021-06-13 06:58:01', NULL),
('20', 'https://kaustubh.dev', '9e3kl2', '2021-06-12 06:58:50', '1', NULL, NULL, NULL, '1', '2021-06-13 06:58:55', '2021-06-13 07:00:54', NULL),
('21', 'https://kaustubh.dev', '7jqs71', NULL, '1', NULL, NULL, '$2a$10$n1xg/04IYgqetiKS2gOS5eSl8UZCeUNORO551TBtG4e6DltN.quRK', NULL, '2021-06-13 07:01:22', '2021-06-13 07:01:22', '1');

INSERT INTO `Logs` (`id`, `urlId`, `userAgent`, `ip`, `createdAt`, `updatedAt`) VALUES
('1', '8', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0', '::ffff:127.0.0.1', '2021-06-12 09:31:41', '2021-06-12 09:31:41'),
('2', '8', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-12 12:37:57', '2021-06-12 12:37:57'),
('3', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:03:45', '2021-06-13 10:03:45'),
('4', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:04:54', '2021-06-13 10:04:54'),
('5', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:05:23', '2021-06-13 10:05:23'),
('6', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:13:11', '2021-06-13 10:13:11'),
('7', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:16:02', '2021-06-13 10:16:02'),
('8', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:16:23', '2021-06-13 10:16:23'),
('9', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:18:18', '2021-06-13 10:18:18'),
('10', '17', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', '2021-06-13 10:21:26', '2021-06-13 10:21:26');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;