FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get upgrade -y 
RUN apt-get install nano
RUN apt install -y apache2
RUN apt install -y apache2-utils
RUN apt clean

COPY . /var/www/html

EXPOSE 80

CMD [ "apache2ctl", "-D", "FOREGROUND" ]
