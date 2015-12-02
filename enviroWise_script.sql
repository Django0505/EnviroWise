drop table users if exists;
drop table bin_status if exists;

create table users(id int not null auto_increment,
                    users_id int ,
                    name varchar(100),
                    username varchar(100),
                    address varchar(100),
                    contacts int(11),
                    userRoles varchar(100),
                    primary key(id)
                    );
create table bin_status(id int not null auto_increment,
                        bin_full bool,
                        locations varchar(100),
                        latitude decimal(10.7),
                        longitude decimal(10.7),
                        primary key(id)
                        );
