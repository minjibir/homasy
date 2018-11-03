package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointment extends Model {

    @Id
    public long appointmentId;

    @NotNull
    public long patientId;

    public long doctorId;

    public long receptionistId;

    @NotNull
    public LocalDate appointmentDate;

    @NotNull
    public LocalTime appointmentTime;

    @NotNull
    @WhenCreated
    public LocalDateTime timeOfAppointment;

    public static Finder find = new Finder<Long, Appointment>(Appointment.class);
}
