FROM mysql:8
ENV MYSQL_ROOT_PASSWORD = "admin"
VOLUME [ "/data" ]