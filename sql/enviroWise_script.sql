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
                        -- bin_full bool ,
                        description varchar(100) ,
                        -- locations varchar(100) ,
                        latitude char(100) ,
                        longitude char(100) ,
                        primary key(id)
                        );
