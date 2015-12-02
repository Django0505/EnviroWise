drop table users if exists;
drop table bin_status if exists;

create table users(id int not null auto_increment,
                    users_id int not null,
                    name varchar(100),
                    username varchar(100),
                    address varchar(100),
                    contacts int(11),
                    userRoles varchar(100),
                    primary key(id)
                    );
create table bin_status(id int not null auto_increment,
                        bin_full bool,
                        date(date),
                        locations_id int not null,
                        latitude decimal(10.7),
                        longitude decimal(10.7),
                        primary key(id),
                        foreign key(users_id) references users(id)
                        foreign key(locations_id) references locations(id)
                        );
