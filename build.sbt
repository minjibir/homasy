name := """homasy"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean, DebianPlugin).settings(
  watchSources ++= (baseDirectory.value / "public/ui" ** "*").get
)

scalaVersion := "2.12.6"

libraryDependencies ++= Seq(
  guice,
  jdbc,
  evolutions
)

libraryDependencies += "org.postgresql" % "postgresql" % "9.4-1201-jdbc41"

libraryDependencies ++= Seq(
  "io.jsonwebtoken" % "jjwt-api" % "0.10.5",
  "io.jsonwebtoken" % "jjwt-impl" % "0.10.5" % "runtime",
  "io.jsonwebtoken" % "jjwt-jackson" % "0.10.5"
)

// Test Database
libraryDependencies += "com.h2database" % "h2" % "1.4.194"

// Testing libraries for dealing with CompletionStage...
libraryDependencies += "org.assertj" % "assertj-core" % "3.6.2" % Test
libraryDependencies += "org.awaitility" % "awaitility" % "2.0.0" % Test

// Make verbose tests
testOptions in Test := Seq(Tests.Argument(TestFrameworks.JUnit, "-a", "-v"))

//
// Debian deployment configuration
//
maintainer in Linux := "Jabir S. Minjibir <jabir.minjibir@cyapex.com>"
packageSummary in Linux := "Hospital Management System [HoMaSy]."
packageDescription := "A partly implemented hospital management software system."