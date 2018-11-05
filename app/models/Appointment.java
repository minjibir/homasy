package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;


@Entity
@Table(name = "appointments")
public class Appointment extends Model {

    @Id
    public Long appointmentId;

    @NotNull
    public Long patientId;

    public Long staffId;

    @NotNull
    public LocalDateTime appointmentDateTime;

    @NotNull
    public LocalDate appointmentDate;

    @NotNull
    public LocalTime appointmentTime;

    @NotNull
    @WhenCreated
    public LocalDateTime timeOfAppointment;

    public static Finder find = new Finder<Long, Appointment>(Appointment.class);
}
