# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table accountants (
  uuid                          uuid not null,
  constraint pk_accountants primary key (uuid)
);

create table appointments (
  appointment_id                uuid not null,
  patient_id                    uuid not null,
  doctor_id                     uuid,
  receptionist_id               uuid,
  appointment_date_time         timestamptz not null,
  time_of_appointment           timestamptz not null,
  constraint pk_appointments primary key (appointment_id)
);

create table bills (
  bill_id                       uuid not null,
  patient_id                    uuid not null,
  receptionist_id               uuid not null,
  amount                        float not null,
  billing_date                  timestamptz not null,
  constraint pk_bills primary key (bill_id)
);

create table doctors (
  id                            uuid not null,
  doctor_id                     varchar(255) not null,
  fist_name                     varchar(255) not null,
  last_name                     varchar(255) not null,
  role                          varchar(255) not null,
  department                    varchar(255) not null,
  constraint uq_doctors_doctor_id unique (doctor_id),
  constraint pk_doctors primary key (id)
);

create table patients (
  patient_id                    uuid not null,
  fist_name                     varchar(255) not null,
  last_name                     varchar(255) not null,
  phone_number                  varchar(255) not null,
  gender                        integer not null,
  age                           integer not null,
  height                        integer not null,
  maritacl_status               varchar(255),
  constraint pk_patients primary key (patient_id)
);

create table receipts (
  receipt_id                    uuid not null,
  payment_method                varchar(255) not null,
  date_paid                     timestamptz not null,
  constraint pk_receipts primary key (receipt_id)
);

create table receptionists (
  uuid                          uuid not null,
  constraint pk_receptionists primary key (uuid)
);

create table sessions (
  session_id                    uuid not null,
  appointment_id                uuid not null,
  patient_id                    uuid not null,
  doctor_id                     uuid not null,
  diagnosis                     varchar(255) not null,
  prescription                  varchar(255) not null,
  session_date_time             timestamptz not null,
  constraint pk_sessions primary key (session_id)
);


# --- !Downs

drop table if exists accountants cascade;

drop table if exists appointments cascade;

drop table if exists bills cascade;

drop table if exists doctors cascade;

drop table if exists patients cascade;

drop table if exists receipts cascade;

drop table if exists receptionists cascade;

drop table if exists sessions cascade;

