-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: gpnud
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `goods` (
  `uuid` varchar(10) DEFAULT 'uuid',
  `name` varchar(16) DEFAULT 'name',
  `price` varchar(6) DEFAULT '',
  `class` tinyint(3) unsigned DEFAULT '1',
  `className` varchar(12) DEFAULT 'className',
  `detail` varchar(150) DEFAULT 'detail',
  `image` json DEFAULT NULL,
  `username` varchar(50) NOT NULL DEFAULT 'nickName',
  `date` varchar(20) DEFAULT '0000-00-00',
  `p` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `linkOpenid` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`p`),
  UNIQUE KEY `uuid` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES ('uuid0000','九成新书包',' ',7,'className','爱心人士(公益捐出者)16广电一班赵小小','[\"https://gstes.club/goods/pic/testBags0.jpg\"]','nickName','2018-09-13 17:30',180,'openid0000'),('uuid0001','八成新书包',' ',7,'className','爱心人士(公益捐出者):16数媒一班MISAKI','[\"https://gstes.club/goods/pic/testBags1.jpg\"]','nickName','2018-09-13 17:30',181,'openid0000'),('uuid0002','幸福的方法【九成新】',' ',0,'className','爱心人士(公益捐出者):17数媒一班刘晓人','[\"https://gstes.club/goods/pic/testBooks0.jpg\"]','nickName','2018-09-13 17:30',182,'openid0000'),('uuid0003','鲁迅 朝花夕拾',' ',0,'className','爱心人士(公益捐出者):16英语三班张丽丽','[\"https://gstes.club/goods/pic/testBooks1.jpg\"]','nickName','2018-09-13 17:30',183,'openid0000'),('uuid0004','JOJO第一卷 八成新',' ',0,'className','爱心人士(公益捐出者):18数媒师璐璐','[\"https://gstes.club/goods/pic/testBooks2.jpg\"]','nickName','2018-09-13 17:30',184,'openid0000'),('uuid0005','长篇小说邪恶',' ',0,'className','爱心人士(公益捐出者):17车辆一班秦明凯','[\"https://gstes.club/goods/pic/testBooks3.jpg\"]','nickName','2018-09-13 17:30',185,'openid0000'),('uuid0006','红色T恤 休闲装',' ',5,'className','爱心人士(公益捐出者):16广电一班单任','[\"https://gstes.club/goods/pic/testClothes0.jpg\"]','nickName','2018-09-13 17:30',186,'openid0000'),('uuid0007','连衣裙 八成新',' ',5,'className','爱心人士(公益捐出者):15舞蹈玲娜','[\"https://gstes.club/goods/pic/testClothes1.jpg\"]','nickName','2018-09-13 17:30',187,'openid0000'),('uuid0008','连衣裙 九成新',' ',5,'className','爱心人士(公益捐出者):14软件白流紫','[\"https://gstes.club/goods/pic/testClothes2.jpg\"]','nickName','2018-09-13 17:30',188,'openid0000'),('uuid0009','九成新彩铅',' ',6,'className','爱心人士(公益捐出者):16数媒一班ZHH','[\"https://gstes.club/goods/pic/testPencils0.jpg\"]','nickName','2018-09-13 17:30',189,'openid0000'),('uuid00010','马克笔3支',' ',6,'className','爱心人士(公益捐出者):17数学马志荣','[\"https://gstes.club/goods/pic/testPencils1.jpg\"]','nickName','2018-09-13 17:30',190,'openid0000'),('uuid00011','九成新文具盒',' ',7,'className','爱心人士(公益捐出者):18数媒师匿名','[\"https://gstes.club/goods/pic/testBoxes0.jpg\"]','nickName','2018-09-13 17:30',191,'openid0000'),('uuid00012','布制时尚文具盒 方便',' ',7,'className','爱心人士(公益捐出者):16网媒匿名','[\"https://gstes.club/goods/pic/testBoxes1.jpeg\"]','nickName','2018-09-13 17:30',192,'openid0000');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `openid` varchar(30) DEFAULT 'openid',
  `nickName` varchar(50) DEFAULT 'nickName',
  `avatar` varchar(300) DEFAULT 'avatar',
  `gender` tinyint(3) unsigned DEFAULT '1',
  `province` varchar(20) DEFAULT 'province',
  `city` varchar(20) DEFAULT 'city',
  `hasUUID` json DEFAULT NULL,
  `p` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `searchHistory` json DEFAULT NULL,
  `message` json DEFAULT NULL,
  PRIMARY KEY (`p`),
  UNIQUE KEY `openid` (`openid`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('openid0000','nickName','https://gstes.club/goods/pic/usersTemp.jpg',1,'province','city','[]',28,'[]','[]');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-13 17:31:52
