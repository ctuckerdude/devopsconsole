FROM java:8
EXPOSE 8080:8080
ADD target/devopsconsole-0.0.1-SNAPSHOT.jar devopsconsole.jar
ENTRYPOINT ["java", "-jar", "devopsconsole.jar"]