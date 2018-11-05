# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table appointments (
  appointment_id                bigserial not null,
  patient_id                    bigint not null,
  staff_id                      bigint,
  appointment_date              date not null,
  appointment_time              time not null,
  time_of_appointment           timestamptz not null,
  constraint pk_appointments primary key (appointment_id)
);

create table sessions (
  consultation_id               bigserial not null,
  patient_id                    bigint not null,
  doctor_id                     bigint not null,
  statement                     varchar(255) not null,
  diagnosis                     varchar(255) not null,
  appointment_id                bigint not null,
  consultation_date_time        timestamptz not null,
  constraint pk_sessions primary key (consultation_id)
);

create table patients (
  patient_id                    bigserial not null,
  first_name                    varchar(255) not null,
  last_name                     varchar(255) not null,
  phone_number                  varchar(255) not null,
  gender                        varchar(255) not null,
  age                           integer not null,
  height                        integer not null,
  marital_status                varchar(255) not null,
  constraint uq_patients_phone_number unique (phone_number),
  constraint pk_patients primary key (patient_id)
);

create table prescription (
  prescription_id               bigserial not null,
  consultation_id               bigint not null,
  prescription_content          varchar(255) not null,
  prescription_status           boolean default false not null,
  available                     varchar(255),
  prescription_date_time        timestamptz not null,
  constraint pk_prescription primary key (prescription_id)
);


# --- !Downs

drop table if exists appointments cascade;

drop table if exists sessions cascade;

drop table if exists patients cascade;

drop table if exists prescription cascade;

