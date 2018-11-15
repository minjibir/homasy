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
  complaint                     varchar(255) not null,
  investigation                 varchar(255),
  findings                      varchar(255),
  diagnosis                     varchar(255),
  consultation_date             timestamptz not null,
  constraint pk_sessions primary key (consultation_id)
);

create table patients (
  patient_id                    bigserial not null,
  first_name                    varchar(255) not null,
  last_name                     varchar(255) not null,
  phone_number                  varchar(255) not null,
  gender                        varchar(255) not null,
  age                           integer not null,
  date_of_birth                 date,
  marital_status                varchar(255) not null,
  constraint uq_patients_phone_number unique (phone_number),
  constraint pk_patients primary key (patient_id)
);

create table prescription (
  prescription_id               bigserial not null,
  consultation_id               bigint not null,
  patient_id                    bigint not null,
  doctor_id                     bigint not null,
  prescription_content          varchar(255) not null,
  prescription_status           boolean default false not null,
  available                     varchar(255),
  prescription_date_time        timestamptz not null,
  constraint pk_prescription primary key (prescription_id)
);

create table staff (
  uuid                          bigserial not null,
  first_name                    varchar(255) not null,
  last_name                     varchar(255) not null,
  unit                          varchar(255) not null,
  username                      varchar(255) not null,
  password                      varchar(255) not null,
  constraint uq_staff_username unique (username),
  constraint pk_staff primary key (uuid)
);

create table test_request (
  test_request_id               bigserial not null,
  tests_requested               varchar(255) not null,
  consultation_id               bigint not null,
  patient_id                    bigint not null,
  doctor_id                     bigint not null,
  test_result                   varchar(255),
  tested                        boolean default false not null,
  date_time_requested           timestamptz not null,
  constraint pk_test_request primary key (test_request_id)
);

create table vitals (
  vital_id                      bigserial not null,
  patient_id                    bigint not null,
  blood_pressure                varchar(255),
  pulse_rate                    varchar(255),
  temperature                   varchar(255),
  weight                        bigint,
  height                        integer not null,
  date_taken                    timestamptz not null,
  constraint pk_vitals primary key (vital_id)
);


# --- !Downs

drop table if exists appointments cascade;

drop table if exists sessions cascade;

drop table if exists patients cascade;

drop table if exists prescription cascade;

drop table if exists staff cascade;

drop table if exists test_request cascade;

drop table if exists vitals cascade;

